import { useEffect } from 'react';
import React = require('react');
import { Backend, DataTableEntry } from './backent';
import {
  FetchFnResult,
  FetchFnTableInfo,
  LoadingState,
  useDataTable,
} from './useDataTable';

export function DataTable() {
  const [tableInfo, tableControl] = useDataTable<DataTableEntry>({ fetchFn });

  useEffect(() => {
    tableControl.fetch();
  }, []);

  async function fetchFn(
    options: FetchFnTableInfo<DataTableEntry>
  ): Promise<FetchFnResult<DataTableEntry>> {
    const result = await Backend.fetch(options);
    return result;
  }

  function updateFilter(key: keyof DataTableEntry, query: string) {
    filterDelay(() => {
      tableControl.filterBy({ ...(tableInfo.filter ?? {}), [key]: query });
    });
  }

  function updateSorting(column: keyof DataTableEntry) {
    if (tableInfo.sortBy === column) {
      tableControl.sortBy(
        column,
        tableInfo.sortDirection === 'asc' ? 'desc' : 'asc'
      );
    } else {
      tableControl.sortBy(column, 'asc');
    }
  }

  function getSortArrow(column: string) {
    if (tableInfo.sortBy === column) {
      return tableInfo.sortDirection === 'asc' ? '▲' : '▼';
    } else {
      return '';
    }
  }

  return (
    <table>
      <thead>
        {/** Table Header */}
        <tr>
          <th onClick={() => updateSorting('name')}>
            Name {getSortArrow('name')}
          </th>
          <th onClick={() => updateSorting('address')}>
            Address {getSortArrow('address')}
          </th>
        </tr>
        {/** Filter */}
        <tr>
          <th>
            <input
              onChange={(event) => updateFilter('name', event.target.value)}
            ></input>
          </th>
          <th>
            <input
              onChange={(event) => updateFilter('address', event.target.value)}
            ></input>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableInfo.state === LoadingState.Loading ? (
          /** Loading Indicator */
          <tr>
            <td colSpan={2} style={{ height: '75px' }}>
              Loading ...
            </td>
          </tr>
        ) : (
          /** Table Rows */
          tableInfo.entries.map((entry, i) => (
            <tr key={i}>
              <td>{entry.name}</td>
              <td>{entry.address}</td>
            </tr>
          ))
        )}
        {/** Paginator */}
        <tr className="PaginatorRow">
          <td colSpan={2}>
            <div className="Paginator">
              <div style={{ flex: 1, textAlign: 'left' }}>
                Total Entries: {tableInfo.totalEntries}
              </div>
              <div>
                Items per page:{' '}
                <select
                  onChange={(event) =>
                    tableControl.setPageSize(parseInt(event.target.value))
                  }
                  value={10}
                >
                  <option value={3}>3</option>
                  <option value={10}>10</option>
                  <option value={30}>30</option>
                </select>
              </div>
              <div
                className="PaginatorButton"
                onClick={() => tableControl.previousPage()}
              >
                &lt;
              </div>
              {`Page ${tableInfo.page} of ${Math.ceil(
                tableInfo.totalEntries / tableInfo.pageSize
              )}`}
              <div
                className="PaginatorButton"
                onClick={() => tableControl.nextPage()}
              >
                &gt;
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

let filterTimeout: number;
function filterDelay(cb: () => void) {
  if (filterTimeout) {
    clearTimeout(filterTimeout);
  }
  filterTimeout = window.setTimeout(cb, 250);
}
