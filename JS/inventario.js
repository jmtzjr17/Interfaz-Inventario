export class Inventario {
    constructor(){
        this.inventario = [];
    }

    //----------------- Utils -------------------------------
    productoExistente(producto){
        let yaExiste = this.busquedaBinaria(producto.codigo);
        return yaExiste;
    }

    existenProductos(){
        let hayProductos = false;
        if(this.inventario.length > 0){
            hayProductos = true;
        }
        return hayProductos;
    }

    busquedaBinaria(objetivo){
        let inicio = 0;
        let fin = this.inventario.length - 1;
        
        while (inicio <= fin){
            let medio = Math.floor((inicio + fin) / 2); 

            if (this.inventario[medio].codigo === objetivo){
                return medio;
            } else if (this.inventario[medio].codigo < objetivo){
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
    // ----------------------------------------------------------

    agregarProducto(producto){
        let verificacion = this.productoExistente(producto);
        if(verificacion != -1){
            return `Ya existe un producto con el codigo ingresado`;
        } else {
            let posicion = this.posicionDeInsercion(producto.codigo);

            for (let i = this.inventario.length; i > posicion; i--) {
            this.inventario[i] = this.inventario[i - 1];
            }

            this.inventario[posicion] = producto;

            return `Se ha agregado ${producto.nombre}`;
        }
    }

    buscarPorCodigo(codigo){
        let encontrado = this.busquedaBinaria(codigo);
        return encontrado;
    }

    eliminarPorCodigo(codigo){
        let encontrado = this.busquedaBinaria(codigo);
        
        if(encontrado != -1){
            for(let i = encontrado; i < this.inventario.length - 1; i++){
                this.inventario[i] = this.inventario[i + 1];
            }
            this.inventario.pop();
            return `Producto con el codigo: ${codigo} ha sido eliminado`;
        } else {
            return `No se encontro ningun producto con el codigo ${codigo}`;
        }
    }

    listar(){
        let hayProductos = this.existenProductos();
        if(hayProductos){
            let devolverInventario = "";
            for(let i = 0; i < this.inventario.length; i++){
                devolverInventario += this.inventario[i].infoHtml();
            }
            return devolverInventario;
        } else {
            return `Aun no hay productos en el inventario`;
        }
    }

    listarInverso(){
        let hayProductos = this.existenProductos();
        if(hayProductos){
            let devolverInventario = "";
            for(let i = this.inventario.length - 1; i >= 0; i--){
                devolverInventario += this.inventario[i].infoHtml();
            }
            return devolverInventario;
        } else {
            return `Aun no hay productos en el inventario`;
        }
    }

    extraerPrimerElemento(){
        let hayProductos = this.existenProductos();
        if(hayProductos){
            let auxiliar = this.inventario[0];
            for(let i = 0; i < this.inventario.length - 1; i++){
                this.inventario[i] = this.inventario[i + 1]; 
            }
            this.inventario.pop();
            return `Se extrajo el primer producto: ${auxiliar.infoHtml()}`;
        } else {
            return `Aun no hay productos en el inventario`;
        }
    }

    extraerUltimoElemento(){
        let hayProductos = this.existenProductos();
        if(hayProductos){
            let auxiliar = this.inventario[this.inventario.length -1];
            this.inventario.pop();
            return `Se extrajo el ultimo producto: ${auxiliar.infoHtml()}`;
        } else {
            return `Aun no hay productos en el inventario`;
        }
    }
}


