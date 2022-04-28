/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function dibujarCirCuad(){
    var canvas = document.getElementById(elementid: "myCanvas");
    var ctx = canvas.getContext(contextld="2d");

    ctx.fillStyle ="#333899";
    ctx.fillRect(x:0, y:0, w:40, h:40);
}