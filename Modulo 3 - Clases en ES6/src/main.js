import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

let clienteAgregado = "Luis Lizama";
let montoAgregado = 500000;
let deduccionAgregado = 12;
let impuestoAgregado = new Impuesto(montoAgregado, deduccionAgregado);
let clienteAgregado = new Cliente(clienteAgregado, impuestoAgregado);
let impuestoCalculo = `${clienteAgregado.nombre} - $ ${clienteAgregado.calculoImpuestoTotal()}.`;

console.log(impuestoCalculo);