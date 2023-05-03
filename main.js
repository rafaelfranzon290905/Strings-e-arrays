array = {}

let nome = "José"

console.log(`Meu nome é ${nome}`)

nome = prompt("Diigte seu nome")
let cor = prompt("Digite sua cor")

console.log(`A cor favorita de ${nome} é ${cor}`)
console.log("A cor favorita de", nome, "é", cor)

console.log(nome.length)
nome.length === 0 ? //gera uma pergunta como um mini if
console.log("Você não escreveu nada") :
console.log(`Seu nome é ${nome}`);
console.log(nome.toLowerCase()) //transforma em letras maiúsculas
console.log(nome.toUpperCase()) //transforma em letras maiúsculas
console.log(nome.trim()) // remove todo o espaço em branco antes e depois da string, mas não no meio
console.log(nome.includes("morbius")) //Procura se na string há um elemento "morbius", responde true caso sim e false caso não
console.log(nome.replaceAll("o","i")) //Substitui todos os "o" por "i"


let frase = prompt("Digite uma frase:")
console.log(frase.toUpperCase())
console.log(frase.replaceAll("o", "i"))
console.log(frase.length)


let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
console.log(numeros[0])

let indice = Number(prompt("Digite o número do índice"))
console.log(numeros[indice-1])

let cachorros = ["bull terrier", "bulldog francês", "caramelo", "golden retriever", "salsicha"]
let indiceCachorro = Number(prompt("Digite um número de 0 a 4"))
cachorros[indiceCachorro] === undefined ?
console.log("Digite um número válido"):
console.log(cachorros[indiceCachorro])

console.log(cachorros.length)
console.log(cachorros.includes("caramelo"))

let sugestao = prompt("Diga uma nova raça de cachorro")

sugestao === "" || sugestao === undefined ?
console.log("Digite alguma raça válida"):
cachorros.push(sugestao) && console.log(cachorros);

let listinha = [1, 2, 3, 4, 5, 6]

console.log(listinha.length)
listinha.push(7)
listinha.splice(3,2)
console.log(listinha.length)



