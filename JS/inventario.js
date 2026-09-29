export class Inventario {
    constructor(){
        this.inventario = [];
    }

    //----------------- Extras -------------------------------
    productoExistente(producto){
        let yaExiste = false;
        for(let i = 0; i < this.inventario.length; i++){
            if(producto.codigo === this.inventario[i].codigo){
                yaExiste = true;
                break;
            }
        }
        return yaExiste;
    }

    existenProductos(){
        let hayProductos = false;
        if(this.inventario.length > 0){
            hayProductos = true;
        }
        return hayProductos;
    }
    // ----------------------------------------------------------

    agregarProducto(producto){
        let verificacion = this.productoExistente(producto);
        if(verificacion){
            return `Ya existe un producto con el codigo o nombre ingresado`
        } else {
        this.inventario.push(producto);
        return `Se ha agregado ${producto.nombre}`;
        }
    }

    buscarPorCodigo(codigo){
        let encontrado = false;
        for(let i = 0; i < this.inventario.length; i++){
            if(this.inventario[i].codigo === codigo){
                encontrado = true;
                break;
            } 
        }
        return encontrado ? true : false;
    }

    eliminarPorCodigo(codigo){
        let encontrado = false;
        let posicion;
        for(let i = 0; i < this.inventario.length; i++){
            if(this.inventario[i].codigo === codigo){
                posicion = i;
                encontrado = true;
                break;
            } 
        }

        if(encontrado){
            for(let i = posicion; i < this.inventario.length; i++){
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
            for(let i = 0; i < this.inventario.length; i++){
                this.inventario[i] = this.inventario[i + 1]; 
            }
            this.inventario.pop();
            return `Se extrajo el primer producto: ${auxiliar.info.Html()}`;
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


