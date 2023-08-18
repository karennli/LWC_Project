import { LightningElement, wire, api } from "lwc";
import billList from "@salesforce/apex/BillController.billList";
import { refreshApex } from "@salesforce/apex";

export default class ChildBills extends LightningElement {
  columns = [
    { label: "Bill", fieldName: "Name", type: "text" },
    { label: "Due Date", fieldName: "Due_Date__c", type: "date-local" },
    {
      label: "Amount Remaining",
      fieldName: "Amount_Remaining_on_Bill__c",
      type: "currency",
      cellAttributes: { alignment: "left" }
    }
  ];

  @api getRows() {
    return this.template.querySelector("lightning-datatable").getSelectedRows();
  }
  @api refresh() {
    refreshApex(this.bills);
  }

  @wire(billList)
  bills;
}
