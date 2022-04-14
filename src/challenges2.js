// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let possibilidadeLadoAB = lineA + lineB;
  let moduloPossibilidadeLadoAB = Math.abs(lineA - lineB);
  let possibilidadeLadoAC = lineA + lineC;
  let moduloPossibilidadeLadoAC = Math.abs(lineA - lineC);
  let possibilidadeLadoBC = lineB + lineC;
  let moduloPossibilidadeLadoBC = Math.abs(lineB - lineC);
  let resultado = false;
  if (lineA < possibilidadeLadoBC && lineA > moduloPossibilidadeLadoBC) {
    resultado = true;
  } else if (lineB < possibilidadeLadoAC && lineB > moduloPossibilidadeLadoAC) {
    resultado = true;
  } else if (lineC < possibilidadeLadoAB && lineC > moduloPossibilidadeLadoAB) {
    resultado = true;
  } else{
    resultado = false;
  }
  return resultado;
}
console.log(triangleCheck(10,14,8));
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
