// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true){
    return true;
  } else if (parametro1 === false && parametro2 === false){
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  let concatena = arrayString[arrayString.length - 1] + ", " + arrayString[0];
  return concatena;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let posicaoInicial = arrayNumeros[0]; 
  let contador = 0;
  for (let index = 0; index< arrayNumeros.length; index += 1) { 
    if (arrayNumeros[index] > posicaoInicial) { 
      posicaoInicial = arrayNumeros[index];
    }
  }
  for (let index = 0; index< arrayNumeros.length; index += 1){
    if(posicaoInicial === arrayNumeros[index]){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = mouse - cat1;
  let gato2 = mouse - cat2;
  if(gato1 < 0){
    gato1 = gato1 * (-1);
  }
  if (gato2 < 0){
    gato2 = gato2 * (-1);
  }
  let resultado = "";
  if(gato1 < gato2){
    resultado = "cat1";
  } else if (gato1 === gato2) {
    resultado = "os gatos trombam e o rato foge";
  } else{
    resultado = "cat2";
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  for(let index = 0; index <arrayNumeros.length; index+=1){
    if(arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0){
      arrayNumeros[index] = "fizzBuzz";
    } else if(arrayNumeros[index] % 5 === 0){
      arrayNumeros[index] = "buzz";
    } else if (arrayNumeros[index] % 3 === 0){
      arrayNumeros[index] = "fizz";
    } else{
      arrayNumeros[index] = "bug!";
    }
  }
  return arrayNumeros;
}

// Desafio 9
function encode(string) {
  let arrayString = string.split("");
  for(let index = 0; index < arrayString.length; index += 1){
    if(arrayString[index] === "a"){
      arrayString[index] = 1;
    } else if(arrayString[index] === "e"){
      arrayString[index] = 2;
    } else if (arrayString[index] === "i"){
      arrayString[index] = 3;
    } else if (arrayString[index] === "o"){
      arrayString[index] = 4;
    } else if (arrayString[index] === "u"){
      arrayString[index] = 5;
    }
  }
  arrayString = arrayString.join(""); 
  return arrayString;
}

function decode(string) {
  let arrayString = string.split("");
  for(let index = 0; index < arrayString.length; index += 1){
    if(arrayString[index] === '1'){
      arrayString[index] = "a";
    } else if(arrayString[index] === '2'){
      arrayString[index] = "e";
    } else if (arrayString[index] === '3'){
      arrayString[index] = "i";
    } else if (arrayString[index] === '4'){
      arrayString[index] = "o";
    } else if (arrayString[index] === '5'){
      arrayString[index] = "u";
    }
  }
  arrayString = arrayString.join(""); 
  return arrayString;
}

// Desafio 10
function techList(array,name) {
  array.sort();
  let novoArray = [];
  if(array.length > 0){
    for(let valor in array){
      let objeto = {
        tech: array[valor],
        name: name,
      }
      for(let posicao in array){
        if(posicao === valor){
          posicao = novoArray.push(objeto);
        }
      }
    } 
  } else {
    novoArray.join("");
    novoArray = 'Vazio!';
  }
  return novoArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
