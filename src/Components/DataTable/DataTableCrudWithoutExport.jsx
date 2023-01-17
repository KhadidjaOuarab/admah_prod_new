import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "../DataTable/DataTableDemo.css";

function DataTableCrudWithoutExport({
  products,
  setProducts,
  field,
  field1,
  field2,
  field3,
  field4,
  field5,
  field6,
  field7,
  field8,
  header1,
  header2,
  header3,
  header4,
  header5,
  header6,
  header7,
  header8,
}) {
  let emptyProduct = {
    id: null,
    admNumber: 0,
    agentCode: "",
    documentNumber: 0,
    admType: "",
    anomaly: "",
    currencyCode: "",
    totalAmount: 0,
    username: "",
    flightDate: null,
    flightNumber: 0,
    from: "",
    to: "",
    exchangeDate: null,
    exchangeDocument: 0,
    exchangeCoupon: 0,
    exchangeAgent: "",
    refundDate: null,
    refundDocument: 0,
    refundCoupon: 0,
    refundAgent: "",
  };

  //const [products, setProducts] = useState(null);
  //const dt = useRef(null);

  return (
    <div>
      <div className="datatable-crud-demo mt-5">
        <div className="card">
          <DataTable
            className="ml-5 mr-5"
          //  ref={dt}
            value={products}
            rows={10}
            responsiveLayout="scroll"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "1rem" }}
            ></Column>
            <Column
              field={field1}
              header={header1}
              style={{ minWidth: "6rem" }}
            ></Column>
            <Column
              field={field2}
              header={header2}
              style={{ minWidth: "6rem" }}
            ></Column>

            <Column
              field={field3}
              header={header3}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field={field4}
              header={header4}
              style={{ minWidth: "5rem" }}
            ></Column>
            <Column
              field={field5}
              header={header5}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field={field6}
              header={header6}
              style={{ minWidth: "3rem" }}
            ></Column>
            <Column
              field={field7}
              header={header7}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field={field8}
              header={header8}
              style={{ minWidth: "4rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default DataTableCrudWithoutExport;
