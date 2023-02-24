var btnCalcular = document.getElementById("btnCalcular");
var btnReinicar = document.getElementById("btnReiniciar");

function validarDatos(dinero, tasa, dias) {
    if (dinero.length == 0) {
        alert("Ingrese dinero")
    } else {
        if (tasa.length == 0) {
            alert("Falta ingresar la tasa")
        } else {
            if (dias.length == 0) {
                alert("Falta agregar los dias")
            } else {
                dinero = parseInt(dinero);
                dias = parseInt(dias);
                tasa = parseFloat(tasa);
                if (dias < 30) {
                    alert("tiene que ser mayor a 30 dias");
                } else {
                    calcularTasa(dinero, tasa, dias)
                }
            }
        }
    }






}


btnCalcular.addEventListener("click", function() {
    var dinero = document.getElementById("inputDinero").value;
    var dias = document.getElementById("inputDias").value;
    var tasa = document.getElementById("inputTasa").value;
    validarDatos(dinero, tasa, dias)



})

btnReinicar.addEventListener("click", function() {
    cambiarDivCalculadora();
})


function calcularTasa(din, tas, dia) {
    tas = tas / 100;
    var dineroDevengar = din * (tas * dia / 365);
    dineroDevengado = din + dineroDevengar;
    mostrarDatos(dineroDevengar.toFixed(2), dineroDevengado.toFixed(2))
}

function mostrarDatos(intereses, dinero) {
    var p1 = document.getElementById("p1").innerHTML = "El total de tu dinero sera:$ " + dinero;
    var p2 = document.getElementById("p2").innerHTML = "El total de tu dinero sera:$ " + intereses;



    cambiarDivResultado();


}

function cambiarDivResultado() {
    var divCalculadora = document.getElementById("inputCalculadora");
    var divResultado = document.getElementById("outPutCalculadora");
    divCalculadora.style.display = "none";
    divResultado.style.display = "flex";


}

function cambiarDivCalculadora() {
    var divCalculadora = document.getElementById("inputCalculadora");
    var divResultado = document.getElementById("outPutCalculadora");
    divCalculadora.style.display = "flex";
    divResultado.style.display = "none";


    var dinero = document.getElementById("inputDinero").value = "";
    var dias = document.getElementById("inputDias").value = "";
    var tasa = document.getElementById("inputTasa").value = "";
}