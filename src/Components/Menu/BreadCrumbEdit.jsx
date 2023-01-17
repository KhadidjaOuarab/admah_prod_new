import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";
function BreadCrumbDemo() {
  
    const items = [
      { label: "Search" , url: "http://localhost:3000/home"},
      { label: "Edit" },
    /*  { label: "Accessories" },
      { label: "Backpacks" },
      { label: "Item" },*/
    ];

    const home = {
      icon: "pi pi-home",
    //  url: "https://www.primefaces.org/primereact/showcase",
    };
    const search = {
        icon: "pi pi-home",
        url: "http://localhost:3000/home"
    }
    return (
      <div>
        <div className="card">
          <BreadCrumb model={items} home={search} />
        </div>
      </div>
    );
  };


export default BreadCrumbDemo;
