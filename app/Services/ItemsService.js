import Item from "../Models/Item.js"
import _store from "../store.js"

class ItemsService {
  constructor(){
    console.log('Hi Item Service')
  }

  addItem(rawItemData)
  let newItem = new Item(rawItemData)
  _store.addItem(newItem)
}

const SERVICE = new ItemsService();
export default SERVICE;