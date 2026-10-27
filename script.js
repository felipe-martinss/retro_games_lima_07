const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('formJogo')
const lista = document.getElementById('listarJogos')
const mensagemVazia = document. getElementById('mensagemVazia')

btnCadastrar.addEventListener("click", () =>{
    modal.showModal();
})

btnCancelar.addEventListener("click", ()=>{
    modal.close();
})

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    const jogo = document.getElementById("jogo").value.trim()
    const desenvolvedor = document.getElementById("desenvolvedor").value.trim()
    const plataforma = document.getElementById("plataforma").value.trim()
    const imagem = document.getElementById("imagem").value.trim()
    const preco = Number(document.getElementById("preco").value)

    criarCard(jogo, desenvolvedor, plataforma, imagem, preco)
    form.reset()
    modal.close()
})
function criarCard(jogo, desenvolvedor, plataforma, imagem, preco){
    mensagemVazia.hidden = true;
    const card = document.createElement("article")
    card.classList.add("card-jogo")

    const capa = document.createElement("div")
    capa.classList.add("capa")

    const imagemCapa = document.createElement("img")
    imagemCapa.src=imagem
    capa.appendChild(imagemCapa)

    const info = document.createElement("div")
    info.classList.add("info-jogo")

    const titulo = document.createElement("h3")
    titulo.textContent = jogo

    const nomeDesenvolvedor = document.createElement("p")
    nomeDesenvolvedor.textContent = "Desenvolvedor: " + desenvolvedor

    const nomePlataforma = document.createElement("p")
    nomePlataforma.textContent = "Gênero: " + plataforma;

    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-Br",{style:"currency", currency:"BRL"})
    card.append(titulo, nomeDesenvolvedor, nomePlataforma, valor)
    card.append(capa, info)
    lista.append(card)
}
