
const {select} = 
require('@inquirer/prompts')

let metas = {
    value: 'Tomar água todos os dias',
    checked: false,
}


const cadastrarMeta = async () => {
    const meta = await input ({message: "Digite sua meta"})

    metas.push({value: meta, checked:false})

}

const start = async () =>{
    while(true){
        const opcao = await select({
            message: 'Menu >',
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "Cadastrar"
                },
                {
                    name: "Sair",
                    value: "Sair"
                },
            ]
        })

       
        switch(opcao){
            case "Cadastrar":
            console.log('Vamos cadastrar')
            break
            case "Listar":
            console.log('Vamos listar')
            break
            case "Sair":
            console.log('Até a próxima')
            break
        }
    }
 
}



start()