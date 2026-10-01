import { Producto } from "./producto.js";
import { Inventario } from "./inventario.js";

const miInventario = new Inventario();
const salida = document.getElementById("salidaOperaciones");

// Limpia los inputs del formulario
function limpiarCampos() {
    document.getElementById('txtCod').value = "";
    document.getElementById('txtNom').value = "";
    document.getElementById('txtCan').value = "";
    document.getElementById('txtCos').value = "";
}

// Verifica strings vacíos directamente
function verificarCamposProducto(codigo, nombre, cantidad, costo) {
    return codigo.trim() !== "" && nombre.trim() !== "" && cantidad.trim() !== "" && costo.trim() !== "";
}

function verificarCampoCodigo(codigo) {
    return codigo.trim() !== "";
}

// ------------------- Eventos ------------------------- //

document.getElementById("btnAgregar").addEventListener("click", () => {
    const rawCodigo = document.getElementById('txtCod').value;
    const rawNombre = document.getElementById('txtNom').value;
    const rawCantidad = document.getElementById('txtCan').value;
    const rawCosto = document.getElementById('txtCos').value;

    if (verificarCamposProducto(rawCodigo, rawNombre, rawCantidad, rawCosto)) {
        const producto = new Producto(rawCodigo, rawNombre, rawCantidad, rawCosto);
        salida.innerHTML = miInventario.agregarProducto(producto);
        limpiarCampos();
    } else {
        salida.innerHTML = `No se completaron los campos necesarios para agregar el producto. Intenta de nuevo.`;
    }
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    const rawCodigo = document.getElementById('txtCod').value;
    
    if (verificarCampoCodigo(rawCodigo)) {
        const codigo = Number(rawCodigo);
        const pos = miInventario.buscarPorCodigo(codigo);
        salida.innerHTML = pos !== -1 
            ? `Sí existe el producto con el código ${codigo}` 
            : `No existe el producto con el código ${codigo}`;
        limpiarCampos();
    } else {
        salida.innerHTML = `No se llenó el campo código. Intenta de nuevo.`;
    }
});

document.getElementById("btnEliminar").addEventListener("click", () => {
    const rawCodigo = document.getElementById('txtCod').value;
    
    if (verificarCampoCodigo(rawCodigo)) {
        const codigo = Number(rawCodigo);
        salida.innerHTML = miInventario.eliminarPorCodigo(codigo);
        limpiarCampos();
    } else {
        salida.innerHTML = `No se llenó el campo código. Intenta de nuevo.`;
    }
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