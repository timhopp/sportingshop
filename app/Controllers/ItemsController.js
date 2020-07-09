import ItemsService from "../Services/ItemsService.js"


function _draw() {
  let template = ""
  let items = _store.State.items
  items.forEach(item => template += item.template)
  document.getElementById("items").innerHTML = template
}


export default class ItemsController {
  constructor(){
    console.log('Hi Item Cont')
    _draw()
  }


  addItem(event) {
    event.preventDefault();
    let formData = event.target

    // raw item data inputs //

    _itemsService.addItem(raw)
  }
}