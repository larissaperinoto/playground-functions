// Desafio 11
function numeroRepetido(array) {
  let numeros = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  }

  for (let index of array) {
    numeros[index] = numeros[index] + 1;
  }
  for (let index = 0; index <= 9; index += 1 ) {
    if (numeros[index] >= 3) {
      return false;
    }
  }
  return true;
}

function verificaArray(array) {
  let verificaArray = array;
  if (array.length !== 11){
    verificaArray = 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 | array[index] > 9 | numeroRepetido(array) === false) {
        verificaArray = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return verificaArray;
}

function generatePhoneNumber(array) {
  let arrayTelefone = '';
  if (verificaArray(array) === array) {
    let arrayDDD = array.slice(0,2);
    arrayDDD = arrayDDD.join('');
    let arrayPrimeiraParte = array.slice(2,7);
    arrayPrimeiraParte = arrayPrimeiraParte.join('');
    let arraySegundaParte = array.slice(7,11);
    arraySegundaParte = arraySegundaParte.join('');
    arrayTelefone = '(' + arrayDDD + ')' + ' ' + arrayPrimeiraParte + '-' + arraySegundaParte;
  } else {
    arrayTelefone = verificaArray(array);
  }
  return arrayTelefone;
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
