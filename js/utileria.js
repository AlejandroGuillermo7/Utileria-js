function validarCorreo(correo) {
    let respuesta = false;

    if(!correo)
        return respuesta

    const correo_div = correo.split('@')

    if (correo_div.length !== 2) return false;

    const name = correo_div[0]
    const dominio = correo_div[1]

    if(!name || !dominio) 
        return respuesta

    const dominio_div = dominio.split('.')

    if (dominio_div.length < 2 || dominio_div.some(
        function(parte) { 
            return parte === ''; 
        })) 
        {
        return respuesta;
    }

     respuesta = true;
    return respuesta

}

function soloLetras(texto){
    
    let respuesta = false;
    const letrasValidas = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚüÜ ";

    if(texto.length === 0) {
        return respuesta
    }

    for(let i = 0; i< texto.length; i++)
    {
        const letra_actual = texto[i]
        
        if(!letrasValidas.includes(letra_actual)){
            return respuesta
        }
    }
    respuesta = true
    return  respuesta
    
}

function ValidarLongitud(numero, maxLongitud){
    let respuesta = false

    let cadena_numero = String(numero)
 
    if(cadena_numero.length > maxLongitud){
        return respuesta
    } 
    respuesta = true
    return respuesta
}

function calcularEdad(fechaNacimiento){
    const nacimiento = new Date(fechaNacimiento);
    const fecha_actual = new Date()

    let edad = fecha_actual.getFullYear() - nacimiento.getFullYear()

    let mesDiferencia = fecha_actual.getMonth() - nacimiento.getMonth();

    let diaDiferencia = fecha_actual.getDate() - nacimiento.getDate()

    if (mesDiferencia < 0 || (mesDiferencia === 0 && diaDiferencia < 0)) {
        edad--;
    }

    return edad;

}

function esMayorDeEdad(fechaNacimiento) { 
    let respuesta = false

    const validar_edad = calcularEdad(fechaNacimiento)

    if(validar_edad < 18 ){
        console.log("Menor de edad, denegado")
        return respuesta
    } else {
        console.log("Es mayor de edad")
        respuesta = true
        return respuesta
    }
}

function validarPassword(password) {
    
    let caracteres = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    return caracteres.test(password);
}

function calcularIMC (altura, peso){
    if(typeof altura !== 'number' || typeof peso !== 'number' || altura <= 0 || peso <=0 ){
        console.log("Numeros no validos")
        return null
    }

    let respuesta = '' 
    
    const imc = peso / (altura * altura)
    
    if(imc < 18.5) {
        respuesta = 'Bajo de peso'
    }else{
        if(imc < 25){
            respuesta = 'Peso normal'
        }else{
            if(imc <30){
                respuesta = 'Sobrepeso'
            }else{
                respuesta = 'Obesidad'
            }
        }
    }

    return {imc,respuesta}

}

function calcularPresupuesto(ingresoTotal) {
    if (typeof ingresoTotal !== 'number' || ingresoTotal <= 0) {
        return null;
    }
    const necesidades = ingresoTotal * 0.50;
    const gustos = ingresoTotal * 0.30;
    const ahorro = ingresoTotal * 0.20;

    return {
        ingreso_total: ingresoTotal,
        necesidades_50: necesidades,
        gustos_30: gustos,
        ahorro_20: ahorro
    };
}