import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/AccountController.accountList";

export default class AccountListLwc extends LightningElement {
  @wire(getAccounts)
  accountList;
}
