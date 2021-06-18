function Calcular()
{
    try{
        var estatura = document.getElementById("inputestatura").value;
        var peso = document.getElementById("inputpeso").value;

        CheckInputs(estatura, peso);

        estatura = estatura  / 100;

        var resultado = (peso/(estatura * estatura))

        resultado = resultado.toFixed(1);

        document.getElementById("resultado").value = resultado;

        MostrarTabla();
    }
    catch(Error)
    {
        console.log(Error);
        var msg = document.getElementById("mensaje");
        msg.innerText = Error.message;
        msg.style.display = "block";
    }
}

function MostrarTabla(){

    var resultado = document.getElementById("resultado").value;
    
    var tablainferior = document.getElementById("tablainferior");
    tablainferior.style.display = "table"

    var row1 = document.getElementById("row2");
    var row2 = document.getElementById("row3");
    var row3 = document.getElementById("row4");
    var row4 = document.getElementById("row5");
    
    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "none";
    row4.style.display = "none";
    
    tablainferior.style.display = "table"

    if(resultado < 18.5)
        row1.style.display = "table-row";
    else if(resultado >= 18.5 && resultado < 24.9)
        row2.style.display = "table-row";
    else if(resultado >= 25 && resultado < 29.9)
        row3.style.display = "table-row";
    else if(resultado > 30)
        row4.style.display = "table-row";
    else
        throw RangeError("El valor no es correcto.");

}

function CheckInputs(estatura, peso)
{
    var msg = document.getElementById("mensaje");
    msg.innerText = "";
    msg.style.display = "none";
    var counter = 0;

    var errortext = "";

    if(isNaN(estatura))
    {
        errortext += "* La estatura no es numerica.\n";
        counter++;
    }

    else if(estatura == "")
    {
        errortext += "* La estatura no puede estar vacía.\n";
        counter++;
    }

    else if(estatura == 0)
    {
        errortext += "* La estatura no puede ser de 0 cm.\n";
        counter++;
    }

    else if(estatura < 10 || estatura > 272)
    {
        errortext += "* La estatura debe estar entre un minimo de 10cm y un maximo de 272cm.\n";
        counter++;
    }


    if(isNaN(peso))
    {
        errortext += "* El peso no es numerico.\n";
        counter++;
    }

    else if(peso == "")
    {
        errortext += "* El peso no puede estar vacío.\n";
        counter++;
    }

    else if(peso == 0)
    {
        errortext += "* El peso no puede ser 0 kg.\n";
        counter++;
    }

    else if(peso < 2 || peso > 544)
    {
        errortext += "* El peso debe estar entre un minimo de 2kg y un maximo de 544kg.\n";
        counter++;
    }

    if(counter > 0)
    {
        if(counter == 1)
            throw TypeError("Se han encontrado " + counter + " error: \n" + errortext);

        else if(counter > 1)
            throw TypeError("Se han encontrado " + counter + " errores: \n" + errortext);
    }

}




