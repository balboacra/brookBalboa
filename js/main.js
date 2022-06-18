let mayor18 = Number(prompt("Cuantos años tienes?"))
const estilo = ["Stout", "Cream Ale", "Scottish", "Ipa"];
const presentacion = ["Pack de 6", "Pack de 12"];
const precio = [2400, 4600]
let iva = 1.21;
const seleccionInvalida = "Tu selección no es válida";
const ventaMenores = "Lo sentimos, no podemos vender alcohol a menores de edad";
const seeU = "Podés volver en " + (18 - mayor18) + " años!!!";
const saludos = "Gracias por su compra! Buenas birras!!";
const estiloIncorrecto = "El estilo ingresado es incorrecto";


class Producto {
    constructor(estilo, presentacion, precio) {
        this.estilo = estilo;
        this.presentacion = presentacion;
        this.precio = precio;
    }

    calcularPrecio() {
        return this.precio * iva;
    }
}

const stout6 = new Producto(estilo[0], presentacion[0], precio[0]);
const stout12 = new Producto(estilo[0], presentacion[1], precio[1]);
const creamAle6 = new Producto(estilo[1], presentacion[0], precio[0]);
const creamAle12 = new Producto(estilo[1], presentacion[1], precio[1]);
const scottish6 = new Producto(estilo[2], presentacion[0], precio[0]);
const scottish12 = new Producto(estilo[2], presentacion[1], precio[1]);
const ipa6 = new Producto(estilo[3], presentacion[0], precio[0]);
const ipa12 = new Producto(estilo[3], presentacion[1], precio[1]);


function confirmarEdad() {
    if (mayor18 >= 18) {
        return true;
    } else {
        alert(ventaMenores);
        alert(seeU);
    }
}

function seleccionarEstilo() {
    while (confirmarEdad()) {
        const estiloSeleccionado = Number(prompt("Que estilo desea?\n1) " + estilo[0] + "\n2) " + estilo[1] + "\n3) " + estilo[2] + "\n4) " + estilo[3]));
        switch (estiloSeleccionado) {
            case 1:
                const presentacionStout = prompt("En que presentacion lo prefieres?\n1) " + presentacion[0] + "\n2) " + presentacion[1]);
                if (presentacionStout == "1") {
                    alert("Has agregado un " + stout6.presentacion + " de " + stout6.estilo + " al carrito");
                    alert("Su valor es de " + stout6.calcularPrecio());
                    break;
                } else if (presentacionStout == "2") {
                    alert("Has agregado un " + stout12.presentacion + " de " + stout12.estilo + " al carrito");
                    alert("Su valor es de " + stout12.calcularPrecio());
                    break;
                } else {
                    alert(seleccionInvalida)
                }
            case 2:
                const presentacionCreamAle = prompt("En que presentacion lo prefieres?\n1) " + presentacion[0] + "\n2) " + presentacion[1]);
                if (presentacionCreamAle == "1") {
                    alert("Has agregado un " + creamAle6.presentacion + " de " + creamAle6.estilo + " al carrito");
                    alert("Su valor es de " + creamAle6.calcularPrecio());
                    break;
                } else if (presentacionCreamAle == "2") {
                    alert("Has agregado un " + creamAle12.presentacion + " de " + creamAle12.estilo + " al carrito");
                    alert("Su valor es de " + creamAle12.calcularPrecio());
                    break;
                } else {
                    alert(seleccionInvalida)
                }
            case 3:
                const presentacionScottish = prompt("En que presentacion lo prefieres?\n1) " + presentacion[0] + "\n2) " + presentacion[1]);
                if (presentacionScottish == "1") {
                    alert("Has agregado un " + scottish6.presentacion + " de " + scottish6.estilo + " al carrito");
                    alert("Su valor es de " + scottish6.calcularPrecio());
                    break;
                } else if (presentacionScottish == "2") {
                    alert("Has agregado un " + scottish12.presentacion + " de " + scottish12.estilo + " al carrito");
                    alert("Su valor es de " + scottish12.calcularPrecio());
                    break;
                } else {
                    alert(seleccionInvalida)
                    break;
                }
            case 4:
                const presentacionIpa = prompt("En que presentacion lo prefieres?\n1) " + presentacion[0] + "\n2) " + presentacion[1]);
                if (presentacionIpa == "1") {
                    alert("Has agregado un " + ipa6.presentacion + " de " + ipa6.estilo + " al carrito");
                    alert("Su valor es de " + ipa6.calcularPrecio());
                    break;
                } else if (presentacionIpa == "2") {
                    alert("Has agregado un " + ipa12.presentacion + " de " + ipa12.estilo + " al carrito");
                    alert("Su valor es de " + ipa12.calcularPrecio());
                    break;
                } else {
                    alert(seleccionInvalida)
                }
        }
        function final(){
            if (estiloSeleccionado <= 4) {
                alert (saludos);
            } else {
                alert (estiloIncorrecto);
            }
        }
        final();
        break;
    }
}


seleccionarEstilo();