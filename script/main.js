function criarExperiencia(ano, cargo, lugar, descricao, competencias){
    const container = document.querySelector('.container_experiencias')

    const div = document.createElement('div');
    div.classList.add('experiencia');

    const header  = document.createElement("header");
    header.textContent = ano

    const h3  = document.createElement("h3");
    h3.textContent = cargo

    const span  = document.createElement("span");
    span.textContent = lugar

    const p  = document.createElement("p");
    p.textContent = descricao

    const ul = document.createElement('ul');
    competencias.forEach(competencia => {
        const li = document.createElement('li');
        li.textContent = competencia;
        ul.appendChild(li);
    });

    div.appendChild(header);
    div.appendChild(h3);
    div.appendChild(span);
    div.appendChild(p);
    div.appendChild(ul);

    container.appendChild(div)
}

document.addEventListener('DOMContentLoaded', function() {
    criarExperiencia('2022 - 2023', 'Tecnico em Desenvolivmento Sistemas', 'COTIL', 'OI' , ['HTML', 'CSS', 'JavaScript'])
    criarExperiencia('2022 - 2023', 'Tecnico em Desenvolivmento Sistemas', 'COTIL', 'OI' , ['HTML', 'CSS', 'JavaScript'])
});