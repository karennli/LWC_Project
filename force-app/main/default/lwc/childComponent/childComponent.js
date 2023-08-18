import { LightningElement, api } from "lwc";

export default class ChildComponent extends LightningElement {
  @api inputItem;

  fireSelectEvent() {
    const event = new CustomEvent("inputitemselect", {
      detail: { value: this.inputItem }
    });
    this.dispatchEvent(event);
  }
}
