export interface DataTableEntry {
  name: string;
  address: string;
}

export class Backend {
  private static entries: DataTableEntry[] = [
    {
      name: "Melinda Fowler",
      address: "409 N. Grove St. Palmetto, FL 34221",
    },
    {
      name: "Efe Mann",
      address: "8254 North Vermont St. Horn Lake, MS 38637",
    },
    {
      name: "Sullivan Snow",
      address: "9256 W. Riverview Street Garland, TX 75043",
    },
    { name: "Khadijah Brown", address: "2 Argyle St. Bowie, MD 20715" },
    { name: "Julie Moon", address: "7157 Halifax Dr. Lithonia, GA 30038" },
    {
      name: "Eman Mccaffrey",
      address: "144 Williams Street Campbell, CA 95008",
    },
    { name: "Kayla Irwin", address: "818 Nichols Dr. Omaha, NE 68107" },
    { name: "Miguel May", address: "5 Rock Creek Lane Fairport, NY 14450" },
    {
      name: "Rosina Nunez",
      address: "82 Pineknoll St. Corpus Christi, TX 78418",
    },
    {
      name: "Cayson Schofield",
      address: "35 Linda Ave. Grandville, MI 49418",
    },
    {
      name: "Glenn Odom",
      address: "869 East La Sierra Ave. Sun Prairie, WI 53590",
    },
    { name: "Bronwen Weston", address: "8 Adams Dr. Sewell, NJ 08080" },
    {
      name: "Falak Olson",
      address: "9214 High Point St. Reidsville, NC 27320",
    },
    {
      name: "Lorenzo Ferguson",
      address: "278 Middle River St. Ossining, NY 10562",
    },
    {
      name: "Duncan Mccann",
      address: "83 Ramblewood St. Hernando, MS 38632",
    },
    {
      name: "Bodhi Matthews",
      address: "8707 Glenridge Street Tupelo, MS 38801",
    },
    {
      name: "Nyah Duran",
      address: "6 Carriage Street Clarksville, TN 37040",
    },
    { name: "Connor Conroy", address: "35 Ashley Circle Chelsea, MA 02150" },
    {
      name: "Antonio Avery",
      address: "7336B Golden Star Drive Paramus, NJ 07652",
    },
    { name: "Bayley Ho", address: "510 Warren St. Helena, MT 59601" },
    { name: "Huw Dougherty", address: "7190 Beach St. Toms River, NJ 08753" },
    {
      name: "Martyna Lowery",
      address: "8354 W. Edgemont Street Hamilton, OH 45011",
    },
    {
      name: "Nusaybah Espinosa",
      address: "498 Queen Lane Cornelius, NC 28031",
    },
    {
      name: "Gurleen Sierra",
      address: "40 Henry Smith Dr. Plainfield, NJ 07060",
    },
    { name: "Dorian Burn", address: "143 W. Broad St. Hastings, MN 55033" },
    {
      name: "Stan Monroe",
      address: "55 East Glendale Ave. Crystal Lake, IL 60014",
    },
    {
      name: "Kadeem Leblanc",
      address: "8314 River Drive Sarasota, FL 34231",
    },
    {
      name: "Paige Bradford",
      address: "98 Smoky Hollow Dr. Kissimmee, FL 34741",
    },
    { name: "Kelvin Pugh", address: "95 53rd St. Homestead, FL 33030" },
    { name: "Cassius Davison", address: "733 W. New Rd. Apopka, FL 32703" },
    {
      name: "Iyla Burgess",
      address: "257 Golden Star Street Wadsworth, OH 44281",
    },
    { name: "Carmen Savage", address: "7357 Parker St. Norman, OK 73072" },
    {
      name: "Israr Madden",
      address: "7785 Homewood Street West Hempstead, NY 11552",
    },
    {
      name: "Shona Barlow",
      address: "7 Shub Farm Lane Dorchester, MA 02125",
    },
    {
      name: "Alexander Finnegan",
      address: "7 53rd St. Casselberry, FL 32707",
    },
    {
      name: "Amy-Louise Rosas",
      address: "70 Hillside Drive Mcdonough, GA 30252",
    },
    {
      name: "Alessio Kay",
      address: "647 Brickyard Ave. Ronkonkoma, NY 11779",
    },
    { name: "Carley Mellor", address: "174 Colonial St. Randolph, MA 02368" },
    {
      name: "Harvir Ferry",
      address: "5 Halifax Street Oklahoma City, OK 73112",
    },
    {
      name: "Dakota Lamb",
      address: "912 Boston Court Strongsville, OH 44136",
    },
    { name: "Areebah Ballard", address: "933 Wood St. Easley, SC 29640" },
    {
      name: "Sohail Kouma",
      address: "7176 Cobblestone Ave. Howard Beach, NY 11414",
    },
    {
      name: "Winston Barton",
      address: "7130 W. Marsh Court Highland Park, IL 60035",
    },
    {
      name: "Neo Allan",
      address: "7905 Rockledge Avenue Elk Grove Village, IL 60007",
    },
    {
      name: "Chandni Sutton",
      address: "81 Lakewood Ave. West Springfield, MA 01089",
    },
    { name: "Camron Lara", address: "47 Pin Oak Rd. Pueblo, CO 81001" },
    { name: "Jago Levine", address: "810 Ann St. Long Beach, NY 11561" },
    { name: "Sierra Nixon", address: "66 Arnold St. Freeport, NY 11520" },
    { name: "Kierran Hopper", address: "4 Cactus Ave. Nashville, TN 37205" },
    { name: "Fahad Wade", address: "85 N. Wagon Ave. Orland Park, IL 60462" },
    {
      name: "Jaydn Carlson",
      address: "153 NW. Lilac St. Lake Jackson, TX 77566",
    },
    {
      name: "Aliza Herrera",
      address: "328 East El Dorado Street Delaware, OH 43015",
    },
    { name: "Arslan Lovell", address: "134 Theatre Ave. Brick, NJ 08723" },
    { name: "Taran Cleveland", address: "794 Hickory Dr. Hobart, IN 46342" },
    {
      name: "Kailan Peterson",
      address: "894 Lower River St. San Angelo, TX 76901",
    },
    {
      name: "Luciana Christie",
      address: "8727 E. Glendale St. Milton, MA 02186",
    },
    {
      name: "Maliha Bowden",
      address: "9849 East Devon Street Midland, MI 48640",
    },
    {
      name: "Rose Molloy",
      address: "617 Windfall Avenue Erlanger, KY 41018",
    },
    {
      name: "Shae Sheridan",
      address: "8244 Shady Road Miami Beach, FL 33139",
    },
    { name: "Azra Potter", address: "526 White Street Pearl, MS 39208" },
    {
      name: "Johnathon Boyle",
      address: "479 South Studebaker Street Phoenixville, PA 19460",
    },
    {
      name: "Fenella Cunningham",
      address: "595 East St Paul Street Hephzibah, GA 30815",
    },
    { name: "Griffin Dillon", address: "35 Church St. Lemont, IL 60439" },
    {
      name: "Zidan Garrison",
      address: "104 Lake Forest Ave. Elyria, OH 44035",
    },
    {
      name: "Mert Pearce",
      address: "7122 South Tower Rd. Saint Cloud, MN 56301",
    },
    {
      name: "Dominik Daly",
      address: "8642 Squaw Creek Drive Staunton, VA 24401",
    },
    {
      name: "Jenny Salazar",
      address: "641 SW. Leeton Ridge Ave. Morganton, NC 28655",
    },
    { name: "Nour Bourne", address: "172 Ivy St. Belleville, NJ 07109" },
    { name: "Vishal Zamora", address: "650 Alderwood Road Malden, MA 02148" },
    {
      name: "Luciano Miller",
      address: "603 Sheffield Lane East Hartford, CT 06118",
    },
    {
      name: "Malikah Allman",
      address: "7333 Arch Ave. Saint Johns, FL 32259",
    },
    {
      name: "Miruna Hammond",
      address: "500 Golden Star Street Bronx, NY 10451",
    },
    {
      name: "Rico Magana",
      address: "942 East College Lane Brownsburg, IN 46112",
    },
    { name: "Ashleigh Cruz", address: "789 Riverview St. Chicago, IL 60621" },
    { name: "Zara Dolan", address: "633 Madison Dr. Tucson, AZ 85718" },
    {
      name: "Imaad Blair",
      address: "9465 Lake View Ave. Uniondale, NY 11553",
    },
    {
      name: "Shaan Austin",
      address: "658 W. Virginia Dr. Calumet City, IL 60409",
    },
    {
      name: "Stanislaw Hebert",
      address: "9640 Water Ave. Passaic, NJ 07055",
    },
    {
      name: "Cecelia Mcnamara",
      address: "97 Clay Lane Enterprise, AL 36330",
    },
    { name: "Huseyin Steele", address: "95 Kent Street Greenwood, SC 29646" },
    { name: "Leon Hale", address: "9332 Trout Dr. Milford, MA 01757" },
    {
      name: "Abdirahman Rooney",
      address: "231 Annadale Dr. Englishtown, NJ 07726",
    },
    { name: "Kelis Read", address: "2 Hill St. Oswego, NY 13126" },
    {
      name: "Jenna Zhang",
      address: "519 William Street Harrisonburg, VA 22801",
    },
    {
      name: "Calvin Whitaker",
      address: "9967 Temple Lane Harleysville, PA 19438",
    },
    { name: "Arielle Meyers", address: "13 Branch Dr. Amsterdam, NY 12010" },
    {
      name: "Rikki Trujillo",
      address: "453 East College Avenue Howell, NJ 07731",
    },
    { name: "Hughie Hollis", address: "1 George Drive Defiance, OH 43512" },
    {
      name: "Maha Archer",
      address: "8456 Goldfield Street South Portland, ME 04106",
    },
    {
      name: "Johnny Aguilar",
      address: "280 Plymouth St. West Babylon, NY 11704",
    },
    {
      name: "Jackson Farrell",
      address: "33 West Cleveland Dr. North Augusta, SC 29841",
    },
    {
      name: "Tarun Goff",
      address: "479 Devonshire Street Copperas Cove, TX 76522",
    },
    { name: "Kealan Sweet", address: "8834 Glenwood Road Cocoa, FL 32927" },
    {
      name: "Ian Mack",
      address: "24 South Homewood St. Villa Rica, GA 30180",
    },
    {
      name: "Beatrix Mercado",
      address: "8314 Academy Drive Clementon, NJ 08021",
    },
    {
      name: "Musa Kendall",
      address: "8313 Del Monte Court Paterson, NJ 07501",
    },
    {
      name: "Anna House",
      address: "4 North Indian Spring St. Kaukauna, WI 54130",
    },
    {
      name: "Alys Boyce",
      address: "387 North Gregory St. Middleton, WI 53562",
    },
    {
      name: "Georgie Ahmed",
      address: "62 Peachtree St. New Rochelle, NY 10801",
    },
    { name: "Dania Nielsen", address: "956 Kent Street Lawrence, MA 01841" },
  ];

  static async fetch(options: {
    sortBy?: string;
    sortDirection?: "asc" | "desc";
    filter?: Partial<{ [key in keyof DataTableEntry]: string }>;
    page: number;
    pageSize: number;
  }) {
    let result = [...this.entries];

    if (options.filter) {
      for (const key of Object.keys(options.filter)) {
        const query = options.filter[key as keyof DataTableEntry] as string;
        result = result.filter((entry) =>
          entry[key as keyof DataTableEntry]
            .toLowerCase()
            .includes(query.toLowerCase())
        );
      }
    }

    if (options.sortBy && options.sortDirection) {
      result.sort((a, b) => {
        const comparisonValue =
          a[options.sortBy as keyof DataTableEntry] <
          b[options.sortBy as keyof DataTableEntry]
            ? 1
            : -1;
        return options.sortDirection === "asc"
          ? comparisonValue
          : -comparisonValue;
      });
    }

    let pageIndex = options.page - 1;

    if (pageIndex > result.length - 1) {
      pageIndex = result.length - 1;
    }

    const totalEntries = result.length;

    result = result.splice(pageIndex * options.pageSize, options.pageSize);

    await wait(1000);

    return {
      entries: result,
      totalEntries,
    };
  }
}

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
