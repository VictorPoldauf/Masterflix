const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMobile = document.querySelector('.filtros.mobile');
const filmes = document.querySelectorAll('.cartao');
// const botoesFiltro = document.querySelectorAll('.btn');
const botoesAcao = document.querySelectorAll('.btn.acao');
const botoesTerror = document.querySelectorAll('.btn.terror');
const botoesComedia = document.querySelectorAll('.btn.comedia');
const botoesDrama = document.querySelectorAll('.btn.drama');
let filtroAtivo = false;
let ultimoFiltro = '';

// const ativarFiltro = (event) => {
//   const nomeClasse = event.target.classList[1];

//   for (const filme of filmes) {
//     if (filme.classList.contains(nomeClasse)){
//       filme.style.display = '';
//     }
//     else {
//       filme.style.display = 'none';
//     }
//   }
// };
const ativarFiltro = (nomeClasse) => {
  if (!filtroAtivo) {
    for (const filme of filmes) {
      if (filme.classList.contains(nomeClasse)){
        filme.style.display = '';
      }
      else {
        filme.style.display = 'none';
      }
    }  
  }
  else {
    if (nomeClasse === ultimoFiltro) {
      for (const filme of filmes) {
        filme.style.display = '';
      }
    }
    else {
      for (const filme of filmes) {
        if (filme.classList.contains(nomeClasse)){
          filme.style.display = '';
        }
        else {
          filme.style.display = 'none';
        }
      } 
    }
  }
  
  ultimoFiltro = nomeClasse;
  filtroAtivo = !filtroAtivo;
};

menuHamburguer.onclick = () => {
  menuHamburguer.classList.toggle('ativo');
  navMobile.classList.toggle('ativo');
}

// for (const botaoFiltro of botoesFiltro) {
//   botaoFiltro.onclick = ativarFiltro;
// }

for (const botaoAcao of botoesAcao) {
  botaoAcao.onclick = () => {
    ativarFiltro('acao');
  };
}

for (const botaoComedia of botoesComedia) {
  botaoComedia.onclick = () => {
    ativarFiltro('comedia');
  };
}

for (const botaoDrama of botoesDrama) {
  botaoDrama.onclick = () => {
    ativarFiltro('drama');
  };
}

for (const botaoTerror of botoesTerror) {
  botaoTerror.onclick = () => {
    ativarFiltro('terror');
  };
}