//Declaración de variables
var codigoDeSeguridad = 0885;
var nombreUsuario = "Mariela Anabela";
var saldoCuenta = 15800;
var limiteExtraccion = 5000;




//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
function incrementarSaldo(incremento) {
    //aca sume el valor del parametro a la var global//
    saldoCuenta += incremento;

}
function restarSaldo(decremento) {
    //aca resto el valor del parametro//
    //saldoCuenta = saldoCuenta - decremento;
    saldoCuenta -= decremento;

}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limiteExtraccionStr = prompt("ingrese el nuevo límite de extracción");
    var limiteExtraccionInt = parseInt(limiteExtraccionStr);
    limiteExtraccion = limiteExtraccionInt;
    //llamo a la funcion
    actualizarLimiteEnPantalla(limiteExtraccionStr);
    alert("Su nuevo límite de extracción es $" + limiteExtraccion);

}

function extraerDinero() {
    var extraccionStr = prompt("ingrese la cantidad de dinero que desea extraer");
    var extraccionInt = parseInt(extraccionStr);
    var saldoSinActualizar = saldoCuenta;
    
    if (extraccionInt > saldoCuenta) {
        alert("No hay saldo disponible en su cuenta para extrarer esa cantindad de dinero");
    }
    else if (extraccionInt > limiteExtraccion) {
        alert("La cantidad de dinero que desea extraer es mayor a su limite de extraccion");
    }
    else {
        // funcion tipo de billete
        var resultado = extraccionInt % 100;
        if (resultado == 0) {
            restarSaldo(extraccionInt);
            alert("Ha retirado $" + extraccionStr + "\n" + "Su saldo anterior era $" + saldoSinActualizar + "\n" + "Su cuenta actual es $" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }
        else {
            alert("Solo puedes extraer billetes de $100");
        }
    }
}

function depositarDinero() {
    var incrementoStr = prompt("Ingrese la cantidad de dinero que desea depositar");
    var incrementoInt = parseInt(incrementoStr);
    var saldoSinActualizar = saldoCuenta;
    //llamo a la funcion pasandole el parametro ()
    incrementarSaldo(incrementoInt);
    alert("Su saldo anterior era $ " + saldoSinActualizar + "\n" + "Su dinero depositado es $" + incrementoStr + "\n" + "Su saldo actual es $" + saldoCuenta);
    //aca llamo a la funcion
    actualizarSaldoEnPantalla();
}

function pagarServicio() {
    var precioluz = 980;
    var preciogas = 470;
    var precioalquiler = 5700;
    var preciointernet = 2031;
    var opcionElegidaStr = prompt("Ingrese el Numero que corresponda con el servicio que desee abonar\n" + "1-Luz\n" + "2-Gas\n" + "3-Alquiler\n" + "4-Internet");
    var opcionElegidaInt = parseInt(opcionElegidaStr);
    /*
    if (opcionElegidaInt == 1) {
        pagarLuz(precioluz);
    }
    else if (opcionElegidaInt == 2) {
        pagarGas(preciogas);
    }
    else if (opcionElegidaInt == 3) {
        pagarAlquiler(precioalquiler);
    }
    else if (opcionElegidaInt == 4) {
        pagarInternet(preciointernet);
    }
    else alert("No existe el servicio que se ha seleccionado.");
    */

    switch (opcionElegidaInt) {
        case 1: pagarLuz(precioluz);
            break;
        case 2: pagarGas(preciogas);
            break;
        case 3: pagarAlquiler(precioalquiler);
            break;
        case 4: pagarInternet(preciointernet);
            break;
        default:
            alert("No existe el servicio que se ha seleccionado.");
    }

}

function pagarLuz(precioluz) {
    if (precioluz <= saldoCuenta) {
        var saldoSinActualizar = saldoCuenta;
        saldoCuenta = saldoCuenta - precioluz;
        alert("Has pagado el servicio Luz\n" + "Su saldo enterior era $" + saldoSinActualizar + "\n" + "Dinero descontado $" + precioluz + "\n" + "Saldo Actual $" + saldoCuenta)
        actualizarSaldoEnPantalla();
    }
    else
        alert("Su saldo es insuficiente para abonar el servicio")
}

function pagarGas(preciogas) {
    if (preciogas <= saldoCuenta) {
        var saldoSinActualizar = saldoCuenta;
        saldoCuenta = saldoCuenta - preciogas;
        alert("Has pagado el servicio Gas\n" + "Su saldo enterior era $" + saldoSinActualizar + "\n" + "Dinero descontado $" + preciogas + "\n" + "Saldo Actual $" + saldoCuenta)
        actualizarSaldoEnPantalla();
    }
    else
        alert("NO TIENE SALDO SUFICINETE")
}

function pagarAlquiler(precioalquiler) {
    if (precioalquiler <= saldoCuenta) {
        var saldoSinActualizar = saldoCuenta;
        saldoCuenta = saldoCuenta - precioalquiler;
        alert("Has pagado el servicio Alquiler\n" + "Su saldo enterior era $" + saldoSinActualizar + "\n" + "Dinero descontado $" + precioalquiler + "\n" + "Saldo Actual $" + saldoCuenta)
        actualizarSaldoEnPantalla();

    }
    else
        alert("NO TIENE SALDO SUFICIENTE")
}



function pagarInternet(preciointernet) {
    if (preciointernet <= saldoCuenta) {
        var saldoSinActualizar = saldoCuenta;
        saldoCuenta = saldoCuenta - preciointernet;
        alert("Has pagado el servicio Internet\n" + "Su saldo enterior era $" + saldoSinActualizar + "\n" + "Dinero descontado $" + preciointernet + "\n" + "Saldo Actual $" + saldoCuenta)
        actualizarSaldoEnPantalla();

    }
    else
        alert("NO TIENE SALDO SUFICINETE")
}


function transferirDinero() {
    var cuentaAmiga1 = 1559445
    var cuentaAmiga2 = 1559432
    var montoATransferirStr = prompt("Ingrese el monto que desee transferir");
    var saldoATransferirInt = parseInt(montoATransferirStr);
    if (saldoATransferirInt > saldoCuenta) {
        alert("No puede transferirse esa cantidad de dinero.")
    }
    else {
        var transCuentaStr = prompt("Ingrese el numero de cuenta a la que desee transferir");
        parseInt(transCuentaStr);
        if (transCuentaStr == cuentaAmiga1) {
            alert("Usted eligio transferir a Cuenta Amiga 1 \n" + "Se han transferido $" + saldoATransferirInt);
            saldoCuenta = saldoCuenta - saldoATransferirInt;
            actualizarSaldoEnPantalla();
        }
        else if (transCuentaStr == cuentaAmiga2) {
            alert("Usted eligio transferir a Cuenta Amiga 2 \n" + "Se han transferido $" + saldoATransferirInt);
            saldoCuenta = saldoCuenta - saldoATransferirInt;
            actualizarSaldoEnPantalla();
        }
        else alert("El numero de cuenta ingresado no esta registrado")

    }

}

function iniciarSesion() {
    if (parseInt(prompt("Ingrese su codigo:")) == codigoDeSeguridad) {
        alert("Bienvenido/a " + nombreUsuario + ". Ya puede operar en nuestro Home Banking");
    }
    else {
        saldoCuenta = 0;
        alert("El codigo es incorrecto.\n" + "Su dinero ha sido retenido por cuestiones de seguridad, intentelo mas tarde.");

        return false;
    }

}

function cotizarDolar(){
var valorDolar = 44.20;
var montoAConsultar = prompt ("Ingrese el monto de dinero que desee cotizar.");
parseInt(montoAConsultarInt);

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}