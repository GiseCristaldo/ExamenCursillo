//2- Mejorar el ejercicio anterior con manejo de errores:
//Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica,
//verifique que el número de lados sea válido (mayor o igual a cero).
//Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando
// que el número de lados no es correcto.

let lados = parseInt(
  prompt("Ingrese el numero de los lados de una figura geométrica")
);

function tipoDeFigura(lados) {
  if (lados < 0) return "No válido";

  if (lados === 2) return "El número de lados no es correcto";

  if (lados === 0) {
    circunferencia = 2 * 3.14159 * lados;
    return "Círculo, " + "Circunferencia: " + circunferencia;
  }

  perimetro = calcularPerimetro(lados, lados, lados);

  if (lados === 3) return "Tríangulo, " + "Perímetro: " + perimetro;

  if (lados === 4) return "Cuadrado, " + "Perímetro: " + perimetro;

  if (lados === 5) return "Pentágono, " + "Perímetro: " + perimetro;

  if (lados === 6) return "Hexágono, " + "Perímetro: " + perimetro;

  if (lados > 6) return "Polígono, " + "Perímetro: " + perimetro;
}

let figura = tipoDeFigura(lados);

console.log(figura);

function calcularPerimetro(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

//3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:
//Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo
//de un lado,  calcule y retorne el perímetro de la misma.
//El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados.
//Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio,
//donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
//(para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales)

