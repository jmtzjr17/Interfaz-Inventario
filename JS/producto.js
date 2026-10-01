export class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = Number(codigo);
        this.nombre = nombre;
        this.cantidad = Number(cantidad);
        this.costo = Number(costo);
    }

    infoHtml() {
        return `<p><b>Código:</b> ${this.codigo} | <b>Nombre:</b> ${this.nombre} | <b>Cantidad:</b> ${this.cantidad} | <b>Costo:</b> $${this.costo}</p>`;
    }
}