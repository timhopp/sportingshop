import _store from "../store.js"

function _drawFunds() {
  let template = ""
  let funds = _store.State.funds
  funds.forEach(fund => template += fund.fundTemplate)
  document.getElementById("funds").innerHTML = template
}



export default class FundsController {
 constructor(){
   console.log('Hi Money')
   _drawFunds()
 }

 addFunds(){
    _store.addFunds();
    _drawFunds()
}


}