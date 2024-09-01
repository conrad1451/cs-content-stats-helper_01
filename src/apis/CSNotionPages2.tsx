// Source:
// [1]: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

import { useEffect, useState } from "react";
import axios from "axios";

import { Table } from "typescript-table";
import { ExportDataComponent } from "typescript-exportdata";

// const columnsExample: Column[] = [
const columnsExample = [
  {
    label: "Name",
    property: "pageName",
    disableSort: false,
    disableFilter: false,
  },
  { label: "Tags", property: "tags", disableSort: true, disableFilter: true },
];

const datasExample = [
  {
    id: 1,
    pageName: "Jacob",
    tags: "Doe",
  },
  {
    id: 2,
    pageName: "Jane",
    tags: "Smith",
  },
  {
    id: 3,
    pageName: "Bob",
    tags: "Johnson",
  },
];

const myList1 = ["John", "Jane", "Bob"];
const myList2 = ["BROBRO", "Smith", "Johnson"];

// const myList0 = Array.from(Array(3), (x, i) => i);
// const datasExample2 = myList0.map((tag) => ({
// const datasExample2 = Array.from(Array(3), (x, i) => i).map((tag) => ({

// const datasExample2 = Array.from(Array(myList1.length), (x, i) => i).map(
//   (tag) => ({
//     id: tag,
//     pageName: myList1[tag],
//     tags: myList2[tag],
//   })
// );
const datasExample2 = Array.from(Array(myList1.length), (x, i) => i).map(
  (tag) => ({
    id: tag,
    pageName: datasExample[tag].pageName,
    tags: datasExample[tag].tags,
  })
);

// const databaseId = process.env.CS_CONTENT;

interface Page {
  name: string;
  tags: string[];
}

const CSNotionPages2 = () => {
  const [pages, setPages] = useState(Array<Page>);
  useEffect(() => {
    // axios.get(databaseId).then((res) => {
    axios.get("https://notion-cs-content.onrender.com/").then((res) => {
      const theData = res.data;
      setPages(theData);
      console.log(pages);
    });
  }, []);

  const datasExample3 = Array.from(Array(pages.length), (x, i) => i).map(
    (theId) => ({
      id: theId,
      pageName: datasExample[theId].pageName,
      tags: datasExample[theId].tags,
    })
  );

  return (
    <>
      <div>
        {pages.map((page) => (
          <>
            <p>
              {"Name -->"} {page.name}:
            </p>
            <Table
              // data={datasExample}
              data={datasExample3}
              columns={columnsExample}
              renderExportDataComponent={(filteredData, columnsManaged) => (
                <ExportDataComponent
                  filteredData={filteredData} //don't change this
                  columnsManaged={columnsManaged} //don't change this
                  headerProperty="label" //don't change this
                  csvExport={false} // csvExport={true} // to have an export bouton for csv format
                  excelExport={false} //excelExport={true} // to have an export bouton for excel format
                  pdfExport={false} //pdfExport={true} // to have an export bouton for pdf format
                />
              )}
            />
            <br />
            <br />
          </>
        ))}
      </div>
      <>
        {/* [1] */}
        <>{Array.from(Array(5), (x, i) => i)}</>
        <Table
          // data={datasExample}
          data={datasExample2}
          columns={columnsExample}
          renderExportDataComponent={(filteredData, columnsManaged) => (
            <ExportDataComponent
              filteredData={filteredData} //don't change this
              columnsManaged={columnsManaged} //don't change this
              headerProperty="label" //don't change this
              csvExport={false} // csvExport={true} // to have an export bouton for csv format
              excelExport={false} //excelExport={true} // to have an export bouton for excel format
              pdfExport={false} //pdfExport={true} // to have an export bouton for pdf format
            />
          )}
        />
      </>
    </>
  );
};

export default CSNotionPages2;
