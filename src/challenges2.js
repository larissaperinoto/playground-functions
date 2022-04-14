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
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 13
function contaCoposCerveja(string) {
  let arrayString = string.split('');
  let somaCoposCerveja = 0;
  for (let index = 0; index < arrayString.length; index += 1) {
    for (let numero = 1; numero <= 9; numero += 1) {
      if (parseInt(arrayString[index]) == numero)
      somaCoposCerveja += parseInt(arrayString[index]);
    }
  }
  return somaCoposCerveja;
}

function hydrate(string) {
  let coposCerveja = contaCoposCerveja(string);
  let stringCoposAgua = '';
  if (coposCerveja === 1) {
    stringCoposAgua = coposCerveja + " " + 'copo de água';
  } else {
    stringCoposAgua = coposCerveja + " " + 'copos de água';
  }
  
  return stringCoposAgua;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
