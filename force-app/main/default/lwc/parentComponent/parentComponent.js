import { LightningElement, track } from "lwc";

export default class ParentComponent extends LightningElement {
  input;
  selected = false;
  @track list = [];

  addInputToList() {
    this.list.push(this.template.querySelector("lightning-input").value);
  }

  handleSelect(event) {
    let oldInput = this.input;
    this.input = event.detail.value;
    this.selected = event.detail.value === oldInput ? !this.selected : true;
  }
}
