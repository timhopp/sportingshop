export default class Funds {
  constructor(data){
    this.funds = data
  }

 get fundTemplate(){
   return `
   <div>${this.funds}</div>
   `
 }
}

let funds = new Funds()
