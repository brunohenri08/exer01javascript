let numberOne = Number(prompt (`Digite seu primeiro número:`))
let numberTwo = Number(prompt (`Digite seu segundo número:`))

let resultados = []

resultados.push(Number(numberOne+numberTwo))
resultados.push(Number(numberOne-numberTwo))
resultados.push(Number(numberOne*numberTwo))
resultados.push(Number(numberOne/numberTwo))
resultados.push(Number(numberOne%numberTwo))



alert (`A soma dos números digitos é ${resultados[0]}.`)
alert (`A subtração dos números digitos é ${resultados[1]}.`)
alert (`A multiplicação dos números digitos é ${resultados[2]}.`)
alert (`A divisão dos números digitos é ${Math.trunc(resultados[3])}.`)
alert (`O resto da divisão dos dois números é ${resultados[4]}.`)

if ( resultados[0] % 2 === 0) {
  alert (`A soma dos dois números digitos é ${resultados[0]} e esse número é par.`)
} else alert(`A soma dos dois números digitos é ${resultados[0]} e esse número é ímpar.`)

if ( numberOne == numberTwo) {
  alert(`Os dois números digitados são iguais.`)
} else alert(`Os números digitados são diferentes.`)
