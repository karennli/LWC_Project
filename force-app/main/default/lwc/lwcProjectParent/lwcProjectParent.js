/* eslint-disable no-alert */
import { LightningElement } from "lwc";
import deleteRecords from "@salesforce/apex/recordDeleter.deleteRecords";

export default class LwcProjectParent extends LightningElement {
  massDelete() {
    const children = this.getChildren();
    const selectedRecords = this.getSelected(children);
    if (selectedRecords.length) {
      deleteRecords({ records: selectedRecords })
        .then(() => {
          console.log("deleted records");
          this.refreshAll(children);
        })
        .catch((error) => {
          alert("unable to delete " + JSON.stringify(error));
          console.log(error + " error");
        });
    }
  }

  getChildren() {
    const account = this.template.querySelector("c-child-Accounts");
    const bill = this.template.querySelector("c-child-Bills");
    const income = this.template.querySelector("c-child-Incomes");
    return [account, bill, income];
  }

  getSelected(children) {
    let selectedRows = [];
    for (let child of children) {
      let rows = child.getRows();
      selectedRows = [...selectedRows, ...rows];
    }
    return selectedRows;
  }

  refreshAll(children) {
    for (let child of children) {
      child.refresh();
    }
  }
}
