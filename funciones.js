$(document).ready(function () {
    $("#btn-cambio").click(function () {
        let op1 = ($("#base").prop('selectedIndex'));
        let str = $('.value').val();
        switch (op1) {
            case 0:
                var str_end = '';
                var filtro = '1234567890.';
                for (var i = 0; i < str.length; i++)
                    if (filtro.indexOf(str.charAt(i)) != -1) 
                        str_end += str.charAt(i);
                
                let decimales = parseFloat(str_end);
                $("#input_nu").val(decimales);
                $("#input_nu").focus();
                //Binario
                $("#input_nu1").val((decimales).toString(2));
                //Octal
                $("#input_nu2").val((decimales).toString(8));
                //Hexa
                $("#input_nu3").val((decimales).toString(16).toUpperCase());
                break;
            case 1: //OPCION BINARIA
                var str_end = '';
                var filtro = '10.';
                for (var i = 0; i < str.length; i++)
                    if (filtro.indexOf(str.charAt(i)) != -1)
                        str_end += str.charAt(i);
                
                $("#input_nu1").val(str_end);
                $("#input_nu1").focus();
                //Dividir num en 2
                let num0 = str_end.split(".")[0];
                let num = str_end.split(".")[1];
                let parte_decimal = 0;
                //Saca el decimal
                for (let i = 0; i < num.length; i++) parte_decimal += num[i] * Math.pow(2, -1*(i + 1));
                
                let valor_entero = parseInt(num0, 2);
                //Pasa el valor a decimal
                let numero_completo1 = parseFloat(valor_entero + '.' + (parte_decimal.toString().split(".")[1]));

                /*Conversiones*/
                //Decimal
                $("#input_nu").val(numero_completo1);
                //Octal
                $("#input_nu2").val(numero_completo1.toString(8));
                //Hexadecimal
                $("#input_nu3").val(numero_completo1.toString(16).toUpperCase());
                break;
            case 2://OPCION OCTAL
                var str_end = '';
                var filtro = '12345670.';
                for (var i = 0; i < str.length; i++)
                    if (filtro.indexOf(str.charAt(i)) != -1)
                        str_end += str.charAt(i);
                
                $("#input_nu2").val(str_end);
                $("#input_nu2").focus();
                
                let numoct0 = str_end.split(".")[0];
                let numoct1 = str_end.split(".")[1];
                let parte_octal_decimal = 0;

                for (let o = 0; o < numoct1.length; o++) parte_octal_decimal += numoct1[o] * Math.pow(8, -1 * (o + 1));

                let octal = parseInt(numoct0, 8);
                //Pasa el valor a decimal
                let num_oct = parseFloat(octal + '.' + (parte_octal_decimal.toString().split(".")[1]));

                //Decimal
                $("#input_nu").val(num_oct);
                //Binario
                $("#input_nu1").val((num_oct).toString(2));
                //Hexa
                $("#input_nu3").val((num_oct).toString(16).toUpperCase());
                break;
            case 3://Hexadecimal
                var str_end = '';
                str = str.toUpperCase();
                var filtro = '1234567890ABCDEF.';
                for (var i = 0; i < str.length; i++)
                    if (filtro.indexOf(str.charAt(i)) != -1)
                        str_end += str.charAt(i);
                
                $("#input_nu3").val(str_end);
                $("#input_nu3").focus();

                let numhex0 = str_end.split(".")[0];
                let numhex1 = str_end.split(".")[1];
                let array = new Array();
                let varl = 0;
                for (let v = 0; v < numhex1.length; v++) {
                    switch (numhex1[v]) {
                        case 'A':
                            array.push('10');
                            break;
                        case 'B':
                            array.push('11');
                            break;
                        case 'C':
                            array.push('12');
                            break;
                        case 'D':
                            array.push('13');
                            break;
                        case 'E':
                            array.push('14');
                            break;
                        case 'F':
                            array.push('15');
                            break;
                        default:
                            array.push(numhex1[v]);
                            break;
                        }
                }
                //Recorrer Array
                let parte_hex_decimal = 0;
                for (let h = 0; h < numhex1.length; h++) {
                    parte_hex_decimal += parseInt(array[h]) * Math.pow(16, -1 * (h + 1));
                }
                console.log(parte_hex_decimal);
                let hex = parseInt(numhex0, 16);
                //Pasa el valor a decimal
                let num_hex = parseFloat(hex + '.' + (parte_hex_decimal.toString().split(".")[1]));

                //Decimal
                $("#input_nu").val(num_hex);
                //Binario
                $("#input_nu1").val((num_hex).toString(2));
                //Octal
                $("#input_nu2").val((num_hex).toString(8));
                break;
            
        }
        if ($(".input").val() == NaN) {
            alert("Error");
       }
    });
    $("#dechexa").on("input", function () {
        let hex = parseInt($(this).val()).toString(16).toUpperCase();
        $("#rhexadecimal").val(hex);
    });
    $("#hexadec").on("input", function () {
        let decvalue = '';
        decvalue = parseInt($(this).val(),16);
        $("#rhdecimal").val(decvalue);
    });

});
function Numerosbin(str) {
    var str_end = '';
    var filtro = '10.';
    for (var i = 0; i < str.length; i++)
        if (filtro.indexOf(str.charAt(i)) != -1)
            str_end += str.charAt(i);
    return str_end;
}
function Numerosdec(str) {
    var str_end = '';
    var filtro = '1234567890.';
    for (var i = 0; i < str.length; i++)
        if (filtro.indexOf(str.charAt(i)) != -1)
            str_end += str.charAt(i);
    return str_end;
}
function Numerosoct(str) {
    var str_end = '';
    var filtro = '12345670.';
    for (var i = 0; i < str.length; i++)
        if (filtro.indexOf(str.charAt(i)) != -1)
            str_end += str.charAt(i);
    return str_end;
}
function Numeroshex(str) {
    var str_end = '';
    str = str.toUpperCase();
    var filtro = '1234567890ABCDEF.';
    for (var i = 0; i < str.length; i++)
        if (filtro.indexOf(str.charAt(i)) != -1)
            str_end += str.charAt(i);
    return str_end;
}