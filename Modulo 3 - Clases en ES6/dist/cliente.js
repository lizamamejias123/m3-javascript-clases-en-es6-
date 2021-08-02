export default class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  } //getter


  get nombre() {
    return this.nombre;
  }

  get impuesto() {
    return this.impuesto;
  } //setter


  set nombre(nombreNuevo) {
    this.nombre = nombreNuevo;
  }

  set impuesto(impuestoNuevo) {
    this.impuesto = impuestoNuevo;
  }

  calculoImpuestoTotal() {
    return (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 0.21;
  }

}