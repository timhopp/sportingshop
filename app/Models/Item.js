let id = 100
export default class Item {
  constructor(data){
    this.id = id++
    this.title = data.title 
    this.description = data.description
    this.img = data.img 
    this.stock = data.stock 
    this.cart = data.cart
    this.cost = data.cost
  }

  get Template(){
    return `
  <div class="col-3 card bg-secondary text-light p-3 m-4">
        <h2>${this.title}</h2>
        <img class="img-fluid src="${this.img}">
        <h3>${this.description}</h3>
        <h3>$${this.cost} </h3>
        <button class="btn btn-success" onclick="app.itemsController.addCart(
          '${this.id}')">Add Item</button>

    </div>
  `
  
  }

  get cartTemplate(){
    return `
    <div class="col-9 card bg-secondary text-light p-3 m-4">
    <h2>${this.title}</h2>
    <img class="img-fluid src="${this.img}">
    <h3>Cart Quantity: ${this.cart}</h3>
    <button type="button" class="btn btn-danger" onclick="app.itemsController.deleteItem(
      '${this.id}')">Remove</button>

</div>
    
    `
  }

}