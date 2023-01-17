import React from "react";
import Label from "../Label/Label";
import { Menubar } from "primereact/menubar";
import MenuBarCss from "../Menu/MenuBar.css";
import { InputText } from "primereact/inputtext";
var logoAh = require("../../Assets/LogoAh.png");
function MenuBar() {
  const items = [
    {
      label: "ADM",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          /* items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
            },
          ],*/
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "List",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Agents",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "List",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Reports",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];
   
  return (
    <div>
      <div className="card">
        <Menubar className="pr-5"
          model={items}
          start={
            
            <img src={logoAh} className="mr-8"/>
            
          }
          end={<InputText placeholder="Search" type="text"/>}
        />
      </div>
    </div>
  );
}

export default MenuBar;
