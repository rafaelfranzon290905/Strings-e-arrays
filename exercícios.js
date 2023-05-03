let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

// a primeira vai mostrar um array indefinido
// a segunda vai mostrar um array nulo
// a terceira irá mostrar [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// a quarta irá mostrar 3 pois é a posição 0 do array
// a quinta irá mostrar [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// a sexta irá mostrar 9 pois é a 7 posição do array

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
// ele irá printar SUBI NUM ONIBUS EM MIRROCOS 27

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

let nome = prompt("Nome:")
let email = prompt("email:")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//     a) Imprima no console o array completo
    
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

let comidas = ["carbonara", "pizza", "rondele", "frango com mostarda e mel", "sopa de capeletti"]

console.log(comidas)
console.log(`Essas são minhas comidas favoritas: \n ${comidas[0]}\n ${comidas[1]} \n ${comidas[2]} \n ${comidas[3]} \n ${comidas[4]}`)

let nova = prompt("Me diga uma comida")
comidas[1] = nova
console.log(comidas)

// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
//     c) Imprima o array no console
    
//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//     e) Remova da lista o item de índice que o usuário escolheu.
    
//     f) Imprima o array no console

let listaDeTarefas = []
let tarefas = prompt("Indique 3 tarefas, separadas por espaço").split(' ')
listaDeTarefas= [...tarefas]
console.log(listaDeTarefas)
let indice = prompt("Indique o índice de uma tarefa que já realizou, 0, 1 ou 2")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)
