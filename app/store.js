import Item from "./Models/Item.js";

let _state = {
  activeValue: new Item({ title: "Item" }),
  /** @type {Item[]} */
  items: []
};

class Store {
  /**
   * Provides access to application state data
   */

   addItem(newItem) {
     _state.items.push(newItem)
   }
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
