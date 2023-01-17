import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../DataTable/ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import "../DataTable/DataTableDemo.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedAdm } from "../../Redux/actions/actions";
import { queryAdm } from "../../Redux/actions/actions";
function DataTableCrudDemo(props) {
  let emptyADM = {
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

  const products = useSelector((state) => state.reducerSetProduct.state);

  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyADM);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const navigate = useNavigate();
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };
    _product[`${name}`] = val;

    setProduct(_product);
  };
  const onCategoryChange = (e) => {
    let _product = { ...product };
    _product["category"] = e.value;
    setProduct(_product);
  };
  const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _product = { ...product };
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const setSelectedADM = (e) => {
    setSelectedProducts(e.value);
    console.log("setSelectedADMvsetSelectedADMvsetSelectedADMvsetSelectedADMv");
    console.log(e.value);
    console.log("setSelectedADMvsetSelectedADMvsetSelectedADMvsetSelectedADMv");
  };
  const openNew = () => {
    setProduct(emptyADM);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };
      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "ADM Updated",
          life: 3000,
        });
      } else {
        _product.id = createId();
        _product.image = "product-placeholder.svg";
        _products.push(_product);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "ADM Created",
          life: 3000,
        });
      }

      //setProducts(_products);
      setProductDialog(false);
      setProduct(emptyADM);
    }
  };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    console.log("confirmDeleteProduct");
    console.log(product);
    setProduct(product);
    setDeleteProductDialog(true);
    console.log("confirmDeleteProduct");
  };

  const queryProduct = (product) => {
    console.log("queryProductqueryProductqueryProductqueryProduct")
    console.log(product)
    console.log("queryProductqueryProductqueryProductqueryProduct")
    dispatch(
      queryAdm({
        admType: product.admType,
        documentNumber: product.documentNumber,
        agentCode: product.agentCode,
        couponNumber: product.couponNumber,
        issueCity: product.issueCity,
        issueDate:product.issueDate,
        admNo: product.admNo,
        username: product.username,
        exchangeNumber: product.exchangeNumber,
        exchangedDate: product.exchangedDate,
        couponNumberExchange: product.couponNumberExchange,
        agentCodeExchange: product.agentCodeExchange,
        flightNumber: product.flightNumber,
        flightDate: product.flightDate,
        froms: product.froms,
        tos: product.tos,
        refundNumber: product.refundNumber,
        refundDate: product.refundDate,
        couponNumberRefund: product.couponNumberRefund,
        agentCodeRefund: product.agentCodeRefund,
        anomaly: product.anomaly,
        currencyCode: product.currencyCode,
        totalAmount: product.totalAmount,
      })
    );
    navigate("/Query");
  };

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);
    // setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyADM);
    console.log("http://localhost:4000/Adms/DeleteAdm/" + product._id);
    axios
      .delete("http://localhost:4000/Adms/DeleteAdm/" + product._id)
      .then((response) => {
        // setProduct(response.data);
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });

    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));
    setProduct(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);

    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Export"
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      </React.Fragment>
    );
  };
  const dispatch = useDispatch();
  const editADM = () => {
    console.log("rowDatarowDatarowDatarowDatarowDatarowDatarowData");
    console.log(selectedProducts);
    console.log("rowDatarowDatarowDatarowDatarowDatarowDatarowData");
    dispatch(selectedAdm(selectedProducts));
    navigate("/CreateStep1Edit");
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-row">
        <Button
          icon="pi pi-info"
          className="p-button-rounded p-button-info mr-2"
          onClick={() => queryProduct(rowData)}
        />

        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          // onClick={() => editProduct(rowData)}
          onClick={editADM}
        />

        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </div>
    );
  };

  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveProduct}
      />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );
  return (
    <div>
      <div className="datatable-crud-demo">
        <Toast ref={toast} />

        <div className="card">
          <Toolbar
            className="ml-5 mr-5 h-4rem pb-6 "
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            className="ml-5 mr-5"
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={setSelectedADM}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            responsiveLayout="scroll"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "1rem" }}
              exportable={false}
            ></Column>
            <Column
              field="admNo"
              header="ADM No"
              sortable
              style={{ minWidth: "6rem" }}
            ></Column>
            <Column
              field="agentCode"
              header="Agent Code"
              sortable
              style={{ minWidth: "6rem" }}
            ></Column>

            <Column
              field="documentNumber"
              header="Document Number"
              //body={priceBodyTemplate}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
             <Column
              field="couponNumber"
              header="Coupon Number"
              //body={priceBodyTemplate}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="admType"
              header="ADM Type"
              sortable
              style={{ minWidth: "5rem" }}
            ></Column>
            <Column
              field="anomaly"
              header="Anomaly"
              //  body={ratingBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="currencyCode"
              header="Currency Code"
              //  body={statusBodyTemplate}
              sortable
              style={{ minWidth: "3rem" }}
            ></Column>
            <Column
              field="totalAmount"
              header="Total Amount"
              //   body={statusBodyTemplate}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="username"
              header="Username"
              //  body={statusBodyTemplate}
              sortable
              style={{ minWidth: "4rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "5rem" }}
            ></Column>
          </DataTable>
        </div>

        <Dialog
          visible={productDialog}
          style={{ width: "450px" }}
          header="ADM Details"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={product.name}
              onChange={(e) => onInputChange(e, "name")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.name,
              })}
            />
            {submitted && !product.name && (
              <small className="p-error">Name is required.</small>
            )}
          </div>

          <div className="formgrid grid">
            <div className="field col">
              <label htmlFor="price">Price</label>
              <InputNumber
                id="price"
                value={product.price}
                onValueChange={(e) => onInputNumberChange(e, "price")}
                mode="currency"
                currency="USD"
                locale="en-US"
              />
            </div>
            <div className="field col">
              <label htmlFor="quantity">Quantity</label>
              <InputNumber
                id="quantity"
                value={product.quantity}
                onValueChange={(e) => onInputNumberChange(e, "quantity")}
                integeronly
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="description">Anomaly</label>
            <InputTextarea
              id="description"
              value={product.description}
              onChange={(e) => onInputChange(e, "description")}
              required
              rows={3}
              cols={20}
            />
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete <b>{product.admNumber}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>Are you sure you want to delete the selected ADM?</span>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default DataTableCrudDemo;
