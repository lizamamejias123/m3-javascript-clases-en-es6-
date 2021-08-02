export default class Impuesto {
  constructor(monto_bruto_anual, deducciones) {
    this.monto_bruto_anual = monto_bruto_anual;
    this.deducciones = deducciones;
  } //getter


  get monto_bruto_anual() {
    return this.monto_bruto_anual;
  }

  get deducciones() {
    return this.deducciones;
  } //setter


  set monto_bruto_anual(montoNuevo) {
    this.monto_bruto_anual = montoNuevo;
  }

  set deducciones(deduccionesNuevo) {
    this.deducciones = deduccionesNuevo;
  }

}