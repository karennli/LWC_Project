import { LightningElement, wire, track, api } from "lwc";
import accountList from "@salesforce/apex/AccountController.accountList";
import { refreshApex } from "@salesforce/apex";

export default class ChildAccounts extends LightningElement {
  @track threeAccounts = [];
  error;
  columns = [
    { label: "Account Name", fieldName: "Name", type: "text" },
    { label: "Account Number", fieldName: "AccountNumber", type: "text" },
    {
      label: "Bills Owed",
      fieldName: "Amount_of_Bills__c",
      type: "currency",
      cellAttributes: { alignment: "left" }
    }
  ];

  @api getRows() {
    return this.template.querySelector("lightning-datatable").getSelectedRows();
  }
  @api refresh() {
    refreshApex(this.threeAccounts);
  }

  @wire(accountList)
  accounts({ data, error }) {
    if (data) {
      for (let i = 0; i <= 2; i++) {
        if (data[i]) this.threeAccounts.push(data[i]);
        else {
          break;
        }
      }
      this.threeAccounts = [...this.threeAccounts];
    } else if (error) {
      this.error = error;
    }
  }
}
