import Item from "./Models/Item.js";
import Funds from "./Models/Funds.js"
import _fundsController from "./Controllers/fundsController.js"

let _state = {
  activeValue: new Item({ title: "Item" }),
  /** @type {Item[]} */
  items: [
   new Item(
    {title: 'Football',
     description: 'Put Your Hands On It!',
     img: 'img.url',
     stock: 15,  
     cart: 0,
     id: 100,
     cost: 10
   }),
   new Item(
    {title: 'Baseball',
     description: 'Put Your Hands On It!',
     img: 'img.url',
     stock: 15,  
     cart: 0,
     id:101,
     cost: 30
   }),
   new Item(
    {title: 'Just a Ball',
     description: 'Put Your Hands On It!',
     img: 'img.url',
     stock: 15,  
     cart: 0,
     id:102,
     cost:500
   })
  ],
/**@type {Funds[]} */
  funds: [
    new Funds(
      0
    ),
  ]

};

class Store {
  deleteItem(itemId) {
    let indexToRemove = _state.items.findIndex(item => item.id == itemId)
    if(indexToRemove < 0){
      console.error('Figure it out')
    }
    _state.items[indexToRemove].cart -= 1
    console.log(_state.items[indexToRemove].cart)
  }
  addFunds() {
    _state.funds[0].funds += 10
    
  }
  addCart(itemId) {
   for(let i=0; i<_state.items.length; i++){
     if(_state.items[i].id == itemId && _state.funds[0].funds < _state.items[i].cost){
       alert('Get More Money yo!')
     }
     if (_state.items[i].id == itemId && _state.funds[0].funds >= _state.items[i].cost){
      _state.items[i].cart++
      _state.funds[0].funds -= _state.items[i].cost

      console.log(_state.items[i].cart)
     }
   }
  
  }

   addItem(newItem) {
     _state.items.push(newItem)
   }
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
