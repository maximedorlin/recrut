import React, { useContext } from 'react';
import { Context } from './Context';

const ResultPage: React.FC = () => {
  const { formData } = useContext(Context);

  return (
    <div>
      <h1>Submitted Data</h1>
      <p>{formData}</p>
    </div>
  );
};

export default ResultPage;
