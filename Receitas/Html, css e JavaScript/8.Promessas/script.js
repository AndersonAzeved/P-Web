let cervejas = []  

//cs é um array de cervejas

const carregarDiv = cs => {
    const div = document.getElementById("cervejasDiv")
    const itensHtml = cs.map( 
        ({name,alcohol,brand,style,ibu}) => 
            `<div>
                <p>Nome: ${name}</p>
                <p>Teor: ${alcohol}</p>
                <hr>
            </div>` 
        ) 
    div.innerHTML = `${itensHtml.join("\n")}`
}

const carregarDivColor = cs => {
    const div = document.getElementById("color-div")
    const itensHtml = cs.map( 
        ({hex_value,color_name}) => 
            `<div>
                <p>Nome: ${color_name}</p>
                <div style="background-color:${hex_value}; height: 50px; width: 50px; text-align: center;"></div>
                <hr>
            </div>` 
        ) 
    div.innerHTML = `${itensHtml.join("\n")}`
}

async function carregarCervejas(){
    try{
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
        cervejas = await res.json()
        carregarDiv(cervejas)
    }catch(err){
        document.getElementById("cervejasDiv").innerHTML = "Fudeu..."
    }
}
    
function carregarCervejas2(){
    fetch("https://random-data-api.com/api/v2/beers?size=3").then(
        res => res.json()
    ).then( 
        json => carregarDiv(json) 
    ).catch(
        err => document.getElementById("cervejasDiv").innerHTML = `Fudeu... ${err}`
    )
    document.getElementById("cervejasDiv").innerHTML = `Fazendo requisição`          
}



function carregarCores(){
    fetch("https://random-data-api.com/api/color/random_color?size=3").then(
        res => res.json()
    ).then( 
        json => carregarDivColor(json) 
    ).catch(
        err => document.getElementById("color-div").innerHTML = `Fudeu... ${err}`
    )
    document.getElementById("color-div").innerHTML = `Fazendo requisição`          
}


/* ----------------- Questão 4*/
/*
const carregarDiv = (div_nome,json,cabecalho,propriedade,titulo) => {
    const div = document.getElementById(div_nome)

    const itensHtml = json.map(item => 
        `<tr>
            ${propriedade.map(p => 
                `<td>${item[p]}</td>`
            ).join("")}
        </tr>`
    )          

    const itensCabe = cabecalho.map(cabe => `<th>${cabe}</th>`)
    div.innerHTML = 
    `<h2 style="text-align:center; color: rgb(216, 29, 70);">${titulo}</h2>
    <table>
        <tr>
            ${itensCabe.join("\n")}
        </tr>
        ${itensHtml.join("\n")}
    </table>`
    
}   

async function carregar(api,div_nome,json,cabecalho,propriedade,titulo){
    try{
        let res = await fetch(api)
        json = await res.json()
        carregarDiv(div_nome,json,cabecalho,propriedade,titulo)
    }catch(err){
        document.getElementById(div_nome).innerHTML = "Fudeu..."
    }
}

*/


let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas2() )  

let color = document.getElementById("color")
color.addEventListener("click", () => carregarCores())