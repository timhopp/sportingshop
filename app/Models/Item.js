let id = 100
export default class Item {
  constructor(data){
    this.id = id++
    this.title = data.title 
    this.description = data.description
    this.img = data.img 
    this.stock = data.stock 
  }

  get Template(){
    return `
  <div class="col-3 card bg-secondary text-light p-3 m-4">
        <h2>${this.title}</h2>
        <h3>${this.description}</h3>
        <img class="img-fluid src="${this.img}">
        <button class="btn btn-danger" onclick="app.itemsController.deleteItem(
          '${this.id}')">Delete</button>

    </div>
  `
  
  }

}