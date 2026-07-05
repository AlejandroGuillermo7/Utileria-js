let campoUsuario = document.getElementById("usuario");
let campoPassword = document.getElementById("password");
let botonIniciar = document.getElementById("botonIniciar");
let badgeExito = document.getElementById("badgeExito");
let correoLabel = document.getElementById("correo-label");
let passwordLabel = document.getElementById("password-label");

campoUsuario.addEventListener("blur", function () {
    if (validarCorreo(this.value)) {
        correoLabel.style.display = "none";
    } else {
        correoLabel.style.display = "inline";
    }
});

campoPassword.addEventListener("blur", function () {
    if (validarPassword(this.value)) {
        passwordLabel.style.display = "none";
    } else {
        passwordLabel.style.display = "inline";
    }
});

botonIniciar.addEventListener("click", function () {
    let usuario = campoUsuario.value;
    let password = campoPassword.value;

    let correoOk = validarCorreo(usuario);
    let passwordOk = validarPassword(password);

    if (correoOk) {
        correoLabel.style.display = "none";
    } else {
        correoLabel.style.display = "inline";
    }

    if (passwordOk) {
        passwordLabel.style.display = "none";
    } else {
        passwordLabel.style.display = "inline";
    }

    if (correoOk && passwordOk) {
        badgeExito.classList.add("activo");
    } else {
        badgeExito.classList.remove("activo");
    }

    console.log("Intento de login:", usuario, correoOk, passwordOk);
});