import { LightningElement, track } from "lwc";

export default class TrackLWC extends LightningElement {
  message =
    "Reactive primitive properties, will re-render the page automatically";
  @track person = {
    name: "karen",
    age: 24
  };

  handleClick() {
    this.person.name = "Talentforce";
  }
}
