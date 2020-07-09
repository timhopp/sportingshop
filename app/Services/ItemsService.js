import _store from "../store.js"
import Item from "../Models/Item.js"


class ItemsService {
  deleteItem(itemId) {
    _store.deleteItem(itemId)
  }
  constructor(){
    console.log('Hi Item Service')
  }

  addItem(rawItemData) {
  let newItem = new Item(rawItemData)
  _store.addItem(newItem)
  }

  
}

const SERVICE = new ItemsService();
export default SERVICE;