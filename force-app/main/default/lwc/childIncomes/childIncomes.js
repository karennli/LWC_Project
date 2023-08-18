/* eslint-disable no-alert */
import { LightningElement, wire, api } from "lwc";
import incomeList from "@salesforce/apex/IncomeController.incomeList";
import { refreshApex } from "@salesforce/apex";

export default class ChildIncomes extends LightningElement {
  columns = [
    { label: "Income", fieldName: "Name", type: "text" },
    { label: "Income Date", fieldName: "CreatedDate", type: "date-local" },
    {
      label: "Amount",
      fieldName: "Income_Amount__c",
      type: "currency",
      cellAttributes: { alignment: "left" }
    }
  ];

  @api getRows() {
    return this.template.querySelector("lightning-datatable").getSelectedRows();
  }

  @api refresh() {
    refreshApex(this.incomes);
  }

  @wire(incomeList)
  incomes;
}
