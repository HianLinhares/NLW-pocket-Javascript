// let metas = ["Sim", "Não"]
// console.log(metas[0] + " "+ metas[1])

// // const soma = (a,b) => {
// //     return a+b
// // }

let carro = {
    preco: 26000,
    financiamento: true,
    meunome: () => {
        return "Hian"
    }
}

console.log(carro.preco)


let metas = {
    value: "ler um livro",
    checked: true,
}

let metasArray = [ 
    {
        meta: "ir a academia 4 dias na semana",
        checked: false,
        data_limited: "10/09/2024"
    } ,
    {
        meta: "correr 4 dias na semana",
        checked: false,
        data_limited: "15/09/2024"
    } 
]


console.log(metasArray)
console.log(metas)

//npm install inquirer