//2- Mejorar el ejercicio anterior con manejo de errores:
//Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica,
//verifique que el número de lados sea válido (mayor o igual a cero).
//Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando
// que el número de lados no es correcto.

function tipoDeFigura(lados) {
  if (lados < 0) {
    return "No válido";
  }
  if (lados === 2) {
    return "El número de lados no es correcto";
  }
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

let lados = parseInt(
  prompt("Ingrese el numero de los lados de una figura geométrica")
);

let figura = tipoDeFigura(lados);
console.log(tipoDeFigura(lados));

//3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:
//Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo
//de un lado,  calcule y retorne el perímetro de la misma.
//El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados.
//Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio,
//donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
//(para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales)

function perimetro() {
  
  if (lados === 3) {
    return lados + lados + lados;
  }
  if (lados === 4) {
    return lados + lados + lados;
  }
  if (lados === 5) {
    return lados + lados + lados;
  }
  if (lados === 6) {
    return lados + lados + lados;
  }
  if (lados > 6) {
    return lados + lados + lados;
  }
  if (lados === 3) {
    return lados + lados + lados;
  }
  if (lados < 0) {
    return "no puede ser menor que 0";
  }
  if (lados === 2) {
    return "no puede ser 2";
  }
 
}

console.log(perimetro());



let pi = 3.14159

function circunferencia() {
    if (lados === 0) {
        return 2 * pi * lados ;
      }
}
circunferencia();