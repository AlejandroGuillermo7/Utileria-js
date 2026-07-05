let campoNombre = document.getElementById("name");
let campoFecha = document.getElementById("fecha");
let campoTelefono = document.getElementById("telefono");
let botonValidar = document.getElementById("botonValidar");
let cerrarModal = document.getElementById("cerrarModal");
let modalFondo = document.getElementById("modalFondo");

let errorNombre = document.getElementById("errorNombre");
let errorFecha = document.getElementById("errorFecha");
let errorTelefono = document.getElementById("errorTelefono");

campoNombre.addEventListener("blur", function () {
    if (soloLetras(this.value)) {
        errorNombre.textContent = "";
    } else {
        errorNombre.textContent = "Solo letras y espacios.";
    }
});

campoFecha.addEventListener("change", function () {
    if (this.value) {
        errorFecha.textContent = "";
    } else {
        errorFecha.textContent = "Selecciona tu fecha de nacimiento.";
    }
});

campoTelefono.addEventListener("blur", function () {
    if (ValidarLongitud(this.value, 10)) {
        errorTelefono.textContent = "";
    } else {
        errorTelefono.textContent = "Máximo 10 dígitos.";
    }
});

botonValidar.addEventListener("click", function () {
    let nombre = campoNombre.value;
    let fecha = campoFecha.value;
    let telefono = campoTelefono.value;
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let dinero = parseFloat(document.getElementById("dinero").value);

    let valido = true;

    if (!soloLetras(nombre)) {
        errorNombre.textContent = "Solo letras y espacios.";
        valido = false;
    }

    if (!fecha) {
        errorFecha.textContent = "Selecciona tu fecha de nacimiento.";
        valido = false;
    }

    if (!ValidarLongitud(telefono, 10)) {
        errorTelefono.textContent = "Máximo 10 dígitos.";
        valido = false;
    }

    if (!valido) {
        return;
    }

    let edad = calcularEdad(fecha);
    let mayorEdad = esMayorDeEdad(fecha);

    if (altura > 0 && peso > 0) {
        let resultadoIMC = calcularIMC(altura, peso);
        document.getElementById("imc").value = resultadoIMC.imc.toFixed(2);
        document.getElementById("categoriaImc").value = resultadoIMC.respuesta;
    }

    if (dinero > 0) {
        let presupuesto = calcularPresupuesto(dinero);
        document.getElementById("necesidad").value = presupuesto.necesidades_50;
        document.getElementById("gustos").value = presupuesto.gustos_30;
        document.getElementById("ahorro").value = presupuesto.ahorro_20;
    }

    document.getElementById("mensajeEdad").textContent = "Edad calculada: " + edad + " años.";

    if (mayorEdad) {
        document.getElementById("mensajeMayorEdad").textContent = "El usuario es mayor de edad.";
    } else {
        document.getElementById("mensajeMayorEdad").textContent = "El usuario es menor de edad.";
    }

    modalFondo.classList.add("activo");
});

cerrarModal.addEventListener("click", function () {
    modalFondo.classList.remove("activo");
});