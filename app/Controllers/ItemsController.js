import _itemsService from "../Services/ItemsService.js"
import _store from "../store.js"


function _draw() {
  let template = ""
  let items = _store.State.items
  items.forEach(item => template += item.Template)
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

    let rawItemData = {
      title: formData.title.value,
      description: formData.description.value,
      img: formData.img.value,
      stock: formData.stock.value
    }

    _itemsService.addItem(rawItemData)
    formData.reset()
    _draw()
  }

}