/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies o yardas.
 * @param {number} valor - El valor de los inputs de metros, pulgadas, pies o yardas.
 * @return
 */
function cambiarUnidades (id, valor) {
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){ /*include es para ver si el valor ingresado incluye , */
        valor=valor.replace(",", "."); /*aca se reemplaza la , por el .*/
    }

    if (isNaN(valor)){
        alert("Se ingreso un valor invalido "+id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    } else if (id == "pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
    } else if (id=="yarda"){
        yarda = valor;
        metro = 0.9144*valor;
        pulgada = 36*valor;
        pie = 3*valor;
    } else if (id=="pie"){
        pie = valor;
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
    }
    document.lasUnidades.unid_metro.value=Math.round(metro*100)/100; /*Math.round() es para redondear*/
    document.lasUnidades.unid_pulgada.value=Math.round(pulgada*100)/100; /*  *100)/100 es para que tome 2 decimales*/
    document.lasUnidades.unid_pie.value=Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value=Math.round(yarda*100)/100;
}

/*IGUAL QUE EL DE ARRIBA PERO ESTA REFACTORIZADO PARA QUE SEA MAS LEGITIMO
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
}*/

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

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}

function calcularSuma(){
    var num1, num2;
    num1=Number(document.getElementById("sum_num1")[0].value); /*diferenciar un elemento de otro se necesita indicar el indice. si hay un solo elemento se pone 0*/
    num2=document.getElementById("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value=num1+Number(num2);
}

function calcularResta(){
    var num1, num2;
    num1=Number(document.getElementById("res_num1")[0].value);
    num2=document.getElementById("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value=num1-Number(num2);
}

function calcularMult(){
    var num1, num2;
    num1=document.getElementById("mul_num1")[0].value;
    num2=document.getElementById("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value=Number(num1)*Number(num2);
}

function calcularDiv(){
    var num1, num2;
    num1=document.getElementById("div_num1")[0].value;
    num2=document.getElementById("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value=Number(num1)/Number(num2);
}


/*function dibujarCirCuad(){
    var canvas = document.getElementById(elementid: "myCanvas");
    var ctx = canvas.getContex("2d");

    ctx.fillStyle ="#333899";
    ctx.fillRect(x:0, y:0, w:40, h:40);
}*/
