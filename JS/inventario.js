export class Inventario {
    constructor() {
        this.inventario = [];
    }

    // ----------------- Utils -------------------------------
    productoExistente(producto) {
        return this.busquedaBinaria(producto.codigo);
    }

    existenProductos() {
        return this.inventario.length > 0;
    }

    busquedaBinaria(objetivo) {
        let inicio = 0;
        let fin = this.inventario.length - 1;

        while (inicio <= fin) {
            let medio = Math.floor((inicio + fin) / 2);

            if (this.inventario[medio].codigo === objetivo) {
                return medio;
            } else if (this.inventario[medio].codigo < objetivo) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            }
        }
        return -1;
    }

    posicionDeInsercion(codigo) {
        let inicio = 0;
        let fin = this.inventario.length - 1;

        while (inicio <= fin) {
            let medio = Math.floor((inicio + fin) / 2);

            if (this.inventario[medio].codigo === codigo) {
                return medio;
            } else if (this.inventario[medio].codigo < codigo) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            }
        }
        return inicio;
    }

    // ---------------- Acciones ----------------------------

    agregarProducto(producto) {
        let verificacion = this.productoExistente(producto);
        if (verificacion !== -1) {
            return `Ya existe un producto con el código ingresado.`;
        }

        let posicion = this.posicionDeInsercion(producto.codigo);

        // Desplazamiento manual hacia la derecha
        for (let i = this.inventario.length; i > posicion; i--) {
            this.inventario[i] = this.inventario[i - 1];
        }

        this.inventario[posicion] = producto;
        return `Se ha agregado ${producto.nombre}`;
    }

    buscarPorCodigo(codigo) {
        return this.busquedaBinaria(codigo);
    }

    eliminarPorCodigo(codigo) {
        let encontrado = this.busquedaBinaria(codigo);

        if (encontrado !== -1) {
            // Desplazamiento manual hacia la izquierda
            for (let i = encontrado; i < this.inventario.length - 1; i++) {
                this.inventario[i] = this.inventario[i + 1];
            }
            this.inventario.pop();
            return `Producto con el código ${codigo} ha sido eliminado.`;
        } else {
            return `No se encontró ningún producto con el código ${codigo}.`;
        }
    }

    listar() {
        if (this.existenProductos()) {
            let devolverInventario = "";
            for (let i = 0; i < this.inventario.length; i++) {
                devolverInventario += this.inventario[i].infoHtml();
            }
            return devolverInventario;
        } else {
            return `Aún no hay productos en el inventario.`;
        }
    }

    listarInverso() {
        if (this.existenProductos()) {
            let devolverInventario = "";
            for (let i = this.inventario.length - 1; i >= 0; i--) {
                devolverInventario += this.inventario[i].infoHtml();
            }
            return devolverInventario;
        } else {
            return `Aún no hay productos en el inventario.`;
        }
    }

    extraerPrimerElemento() {
        if (this.existenProductos()) {
            let auxiliar = this.inventario[0];
            for (let i = 0; i < this.inventario.length - 1; i++) {
                this.inventario[i] = this.inventario[i + 1];
            }
            this.inventario.pop();
            return `Se extrajo el primer producto: ${auxiliar.infoHtml()}`;
        } else {
            return `Aún no hay productos en el inventario.`;
        }
    }

    extraerUltimoElemento() {
        if (this.existenProductos()) {
            let auxiliar = this.inventario[this.inventario.length - 1];
            this.inventario.pop();
            return `Se extrajo el último producto: ${auxiliar.infoHtml()}`;
        } else {
            return `Aún no hay productos en el inventario.`;
        }
    }
}