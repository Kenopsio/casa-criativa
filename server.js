
// usei o express pra criar e configurar o meu servidor
const express = require("express")
const server = express()

const ideas = [
 {
    img: "https://image.flaticon.com/icons/svg/2728/2728980.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod officiis eaque quo labore",
    url: "https://google.com"
},

{
    img: "https://image.flaticon.com/icons/svg/2738/2738809.svg",
    title: "Exercícios",
    category: "Saúde",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod officiis eaque quo labore",
    url: "https://google.com"
},

{
    img: "https://image.flaticon.com/icons/svg/2729/2729002.svg",
    title: "Meditação",
    category: "Mentalidade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod officiis eaque quo labore",
    url: "https://google.com"
},

{
    img: "https://image.flaticon.com/icons/svg/1941/1941070.svg",
    title: "Karaokê",
    category: "Diversão em família",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod officiis eaque quo labore",
    url: "https://google.com"
},

]

//configurar arquivos estáticos (ccs, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks 
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server, 
    noCache: true,
})

// criei uma rota "/"
//capturo o pedido do cliente para responder
server.get("/", function(req, res) { 

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }

    }

    return res.render("index.html", {ideas: lastIdeas})
})





server.get("/ideias", function(req, res) {  

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", {ideas: reversedIdeas})
})








// liguei server na porta 3000
server.listen(3000)