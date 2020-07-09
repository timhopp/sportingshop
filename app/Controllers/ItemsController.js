import _itemsService from "../Services/ItemsService.js"
import _store from "../store.js"


function _draw() {
  let template = ""
  let items = _store.State.items
  items.forEach(item => template += item.Template)
  document.getElementById("items").innerHTML = template
}

function _drawCart(){
  let template = ''
  let cart = [];
  for(let i = 0; i < _store.State.items.length; i++){
    if(_store.State.items[i].cart >= 1){
     cart.push(_store.State.items[i])
    }
  }
  cart.forEach(item => template += item.cartTemplate )
  document.getElementById('cart').innerHTML = template
}

export default class ItemsController {
  constructor(){
    console.log('Hi Item Cont')
    _draw()
  }

  addCart(itemId){
    _store.addCart(itemId)
  }


  // addItem(event) {
  //   event.preventDefault();
  //   let formData = event.target

  //   let rawItemData = {
  //     title: formData.title.value,
  //     description: formData.description.value,
  //     img: formData.img.value,
  //     stock: formData.stock.value
  //   }

  //   _itemsService.addItem(rawItemData)
  //   formData.reset()
  //   _draw()
  // }

  viewCart(){
    _drawCart()
  }

  deleteItem(itemId){
    _itemsService.deleteItem(itemId)
  }

}