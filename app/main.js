import ItemsController from "./Controllers/ItemsController.js"
import FundsController from "./Controllers/fundsController.js"

class App {

  fundsController = new FundsController();
  itemsController = new ItemsController();
}

window["app"] = new App();
