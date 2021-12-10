$(document).ready(function () {
    var valoraciones = 0;
    var valTotales = 0;

    $("#e1").on("mouseover", () => pintarEstrella(1));
    $("#e2").on("mouseover", () => pintarEstrella(2));
    $("#e3").on("mouseover", () => pintarEstrella(3));
    $("#e4").on("mouseover", () => pintarEstrella(4));
    $("#e5").on("mouseover", () => pintarEstrella(5));

    $("#e1").on("click", () => valorar(1));
    $("#e2").on("click", () => valorar(2));
    $("#e3").on("click", () => valorar(3));
    $("#e4").on("click", () => valorar(4));
    $("#e5").on("click", () => valorar(5));

    $("#e1").on("mouseout", calcProm);
    $("#e2").on("mouseout", calcProm);
    $("#e3").on("mouseout", calcProm);
    $("#e4").on("mouseout", calcProm);
    $("#e5").on("mouseout", calcProm);

    function pintarEstrella(cantidad) {
        for (var i = 1; i <= 5; i++) {
            $("#e" + i)
                .removeClass("full")
                .removeClass("half");
        }
        for (var i = 1; i <= cantidad; i++) {
            $("#e" + i).addClass("over");
        }
    }

    function valorar(valor) {
        valoraciones = valoraciones + 1;
        valTotales = valTotales + valor;
        calcProm();
    }

    function calcProm() {
        var promedio = valTotales / valoraciones;
        var parteEntera = parseInt(promedio);
        for (var i = 1; i <= 5; i++) {
            $("#e" + i)
                .removeClass("over")
                .removeClass("full")
                .removeClass("half");
        }
        for (var i = 1; i <= parteEntera; i++) {
            $("#e" + i).addClass("full");
        }
        var parteDecimal = (promedio - parteEntera) * 100;
        if (parteDecimal >= 50) {
            $("#e" + (parteEntera + 1)).addClass("half");
        }
    }
});
