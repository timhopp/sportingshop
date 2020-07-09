import ValuesController from "./Controllers/ValuesController.js";
import ItemsController from "./Controllers/ItemsController.js"

class App {
  valuesController = new ValuesController();

  itemsController = new ItemsController();
}

window["app"] = new App();
