import React from "react";
import homeCss from "../Pages/Home.css";
import Search from "../Components/Search/Search";
import MenuBar from "../Components/Menu/MenuBar";
import PanelCard from "../Components/Panel/PanelCard";
import DataTable from "../Components/DataTable/DataTableCrudDemo";
import DD from "../Components/Input/DD"
function Home() {
  return (
    <div>
      <MenuBar />
      <PanelCard />
      <DataTable />
    </div>
  );
}

export default Home;
