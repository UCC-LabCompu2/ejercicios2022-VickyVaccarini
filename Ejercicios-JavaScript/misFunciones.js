/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies o yardas.
 * @param {number} valor - El valor de los inputs de metros, pulgadas, pies o yardas.
 * @return
 */

function cambiarUnidades(id, valor){
    if(isNaN(valor)){
        alert("Se ingresó un valor inválido");
        document.lasUnidades.unid_metro.value="";
        document.lasUnidades.unid_pulgada.value="";
        document.lasUnidades.unid_pie.value="";
        document.lasUnidades.unid_yarda.value="";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value=39.3701*valor;
        document.lasUnidades.unid_pie.value=3.28084*valor;
        document.lasUnidades.unid_yarda.value=1.09361*valor;
    }else if (id=="pulgada"){
        document.lasUnidades.unid_metro.value=0.0254*valor;
        document.lasUnidades.unid_pie.value=0.833333*valor;
        document.lasUnidades.unid_yarda.value=0.277778*valor;
    }else if(id=="pie"){
        document.lasUnidades.unid_metro.value=0.3048*valor;
        document.lasUnidades.unid_pulgada.value=12*valor;
        document.lasUnidades.unid_yarda.value=0.333333*valor;
    }else if(id=="yarda"){
        document.lasUnidades.unid_metro.value=0.9144*valor;
        document.lasUnidades.unid_pulgada.value=36*valor;
        document.lasUnidades.unid_pie.value=3*valor;
    }
}

function convertirGR(id){
    var grad, rad;
    if (id=="grados"){
        grad=document.getElementById("grados".value); /*obtiene el valor que se ingresa en el campo y se lo asigna a grado */
        rad=(grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad=document.getElementById("radianes".value);
        grad=(rad*180)/Math.PI;
    }
    grad=document.getElementById("grados".value);
    rad=document.getElementById("radianes".value);
}

/*function dibujarCirCuad(){
    var canvas = document.getElementById(elementid: "myCanvas");
    var ctx = canvas.getContex("2d");

    ctx.fillStyle ="#333899";
    ctx.fillRect(x:0, y:0, w:40, h:40);
}*/
