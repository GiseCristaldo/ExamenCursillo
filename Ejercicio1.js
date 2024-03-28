//Resolver el problema utilizando javascript, para identificar una figura geométrica:

//Teniendo una variable numérica que representa el número de lados de una figura geométrica,
//mostrar por consola su tipo. Los tipos son:
//"Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

//Círculo: si el número de lados es 0.
//Triángulo: si el número de lados es 3.
//Cuadrado: si el número de lados es 4.
//Pentágono: si el número de lados es 5.
//Hexágono: si el número de lados es 6.
//Polígono: si el número de lados es mayor que 6.
//Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.

function tipoDeFigura(lados) {

  if (lados === 0) {
    return "Círculo";
  }
  if (lados === 3) {
    return "Tríangulo";
  }
  if (lados === 4) {
    return "Cuadrado";
  }
  if (lados === 5) {
    return "Pentágono";
  }
  if (lados === 6) {
    return "Hexágono";
  }
  if (lados > 6) {
    return "Polígono";
  }
}

let lados = parseInt(prompt('Ingrese el numero de los lados de una figura geométrica'));

let figura = tipoDeFigura(lados);
console.log('El número ingresado corresponde a un', tipoDeFigura(lados));


