console.log("Hello World");

function buscar() {
    let section = document.getElementById("resultados-busca");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
   
  if (!campoPesquisa) {
    section.innerHTML = "<p>Digite algo para buscar</p>"
    return

  };

  campoPesquisa = campoPesquisa.toLowerCase();

    let buscados = "";
    let titulo = "";
    let experiencia = "";
    let tags = "";
    

    for( let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        experiencia = dado.experiencia.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || experiencia.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
            buscados += `
            
            <div class="item-buscado">
                <h2>
                    <a href=${dado.link} target="_blank"> ${dado.titulo} 
                    </a>
               </h2> 
            
               <p class="descricao-meta"> ${dado.experiencia} </p> 
            
              <img src=${dado.i1}>  <img src=${dado.i2}> <img src=${dado.i3}>
            
              </div>`
        }
        }

   if (!buscados) {
    buscados = "<p>Nada foi encontrado</p>"

   }   
    
section.innerHTML = buscados
    
}








let caixaAberta = false; // Variável para controlar o estado da caixa

function abrirfechar() {
    const apresentacao = document.getElementById("apresentacao");

    if (caixaAberta) {
        // Se a caixa estiver aberta, fecha
        apresentacao.style.display = 'none';
        caixaAberta = false;
    } else {
        // Se a caixa estiver fechada, abre
        apresentacao.innerHTML = `<h2>Bem vindo ao mundo compartilhado.
       </h2> 
    
       <p class="descricao-meta"> O Mundo Compartilhado é um blog gerenciado por Melqui e Mayara, um casal de marinheiros que decidiu largar tudo para trabalhar a bordo e viajar o mundo. Nesse blog iremos contar breves histórias de lugares onde passamos, dar dicas de roteiros, comidas e bebidas e outras informações relevantes. Aqui você pode interagir com os continentes para abrir a lista de países e cidades ou buscar por um destino específico na barra de busca. Nós também deixamos disponíveis campos de comentários, para que você conte sobre a SUA experiência e ou complemente nossas informações, afinal, o nosso Mundo é Compartilhado. </p> 
    
      <p class="ps">PS: Só colocamos três continentes porque, até o momento, são os únicos que visitamos.</p>`;
        apresentacao.style.display = 'block';
        caixaAberta = true;
    } }


    