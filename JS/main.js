import { Producto } from "./producto.js";
import { Inventario } from "./inventario.js";

const miInventario = new Inventario();
const salida = document.getElementById("salidaOperaciones");

function crearProducto(){
    const codigo = parseInt(document.getElementById('txtCod').value);
    const nombre = document.getElementById('txtNom').value;
    const cantidad = document.getElementById('txtCan').value;
    const costo = document.getElementById('txtCos').value;

    return new Producto(codigo,nombre,cantidad,costo);
}

//Elimina los datos en los campos de llenado
function limpiarCampos(){
    const codigo = document.getElementById('txtCod').value =  "";
    const nombre = document.getElementById('txtNom').value = "";
    const cantidad = document.getElementById('txtCan').value = "";
    const costo = document.getElementById('txtCos').value = "";
}

//Verifica que si se llenaron los campos necesarios para crear un producto
function verificarCamposProducto(codigo,nombre,cantidad,costo){
    let camposCompletos = true;
    if(codigo === "" || nombre === "" || cantidad === "" || costo === ""){
        camposCompletos = false;
    }
    return camposCompletos;
}


//Verifica que si se lleno el campo codigo 
function verificarCamposCodigo(codigo){
    let campoCompleto = true;
    if(codigo === ""){
        campoCompleto = false;
    }
    return campoCompleto;
}

// ------------------- Eventos ------------------------- //

document.getElementById("btnAgregar").addEventListener("click",() => {
    const producto = crearProducto();
    const verificacionProducto = verificarCamposProducto(producto.codigo,producto.nombre,producto.cantidad,producto.costo);
    if(verificacionProducto){
        salida.innerHTML = miInventario.agregarProducto(producto);
    } else {
        salida.innerHTML = `No se completaron los campos necesarios para agregar el producto, Intenta de nuevo`;
    }
    limpiarCampos();
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    const codigo = document.getElementById('txtCod').value;
    const verificacionCodigo = verificarCamposCodigo(codigo);
    if(verificacionCodigo){
        const producto = miInventario.buscarPorCodigo(codigo);
        salida.innerHTML = producto != -1 ? `Si existe el producto con el codigo ${codigo}` : `No existe el producto con el codigo ${codigo}`; 
    } else {
        salida.innerHTML = `No se lleno el campo codigo, Intenta de nuevo`;
    }
    limpiarCampos();
});

document.getElementById("btnEliminar").addEventListener("click", () => {
    const codigo = document.getElementById('txtCod').value;
    const verificacionCodigo = verificarCamposCodigo(codigo);
    if(verificacionCodigo){
        salida.innerHTML = miInventario.eliminarPorCodigo(codigo);
    } else {
        salida.innerHTML = `No se lleno el campo codigo, Intenta de nuevo`;
    }
    limpiarCampos();
});

document.getElementById("btnExtraerPrimero").addEventListener("click", () => {
    salida.innerHTML = miInventario.extraerPrimerElemento();
    limpiarCampos();
});

document.getElementById("btnExtraerUltimo").addEventListener("click", () => {
    salida.innerHTML = miInventario.extraerUltimoElemento();
    limpiarCampos();
});

document.getElementById("btnListar").addEventListener("click", () => {
    salida.innerHTML = miInventario.listar();
    limpiarCampos();
});

document.getElementById("btnListarInverso").addEventListener("click", () => {
    salida.innerHTML = miInventario.listarInverso();
    limpiarCampos();
});

