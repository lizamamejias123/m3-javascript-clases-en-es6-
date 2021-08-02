import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";
let cliente = "Luis Martinez";
let monto = 152;
let deduccion = 21;
let impuesto1 = new Impuesto(monto, deduccion);
let cliente1 = new Cliente(cliente, impuesto1);
let impuestoCalculo = `${cliente1.nombre} - $ ${cliente1.calculoImpuestoTotal()}.`;
console.log(impuestoCalculo);