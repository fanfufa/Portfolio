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
    criarExperiencia('2022 - 2023', 'Formação como Tecnico em Desenvolivmento Sistemas', 'Colégio Técnico de Limeira - COTIL', 'DESCRIÇAO' , ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'C#', 'Java', 'MySQL', 'PowerBI'])
    criarExperiencia('2021 - atualmente', 'Formação em Hardware de Computadores', 'Academia do Hardware', 'DESCRIÇAO' , ['Manutenção hardwares', 'Conhecimento dos componentes de hardware do computador', 'Limpeza de computadores', 'Rede Computadores'])
    criarExperiencia('2022 - atualmente', 'Linguagem Python', 'Curso em Vídeo e BroCode', 'DESCRIÇAO' , ['Python', 'PyAutoGUI'])
    criarExperiencia('2023', 'Tecnico em manutenção de computadores', 'Laboratório dos Notebooks', 'DESCRIÇAO' , ['Manuntenção de notebooks', 'Teste de performace nos computadores', 'Formatações', 'Limpezas', 'Trocas de telas, memoria RAM e SSD/HD', 'Montagem e desmontagem de notebooks'])
    criarExperiencia('2023 - atualmente', 'Help Desk', 'Alfa Networks', 'DESCRIÇAO' , ['Atendimento ao cliente', 'Suporte de impressoras e dispostivos SAT', 'Configuração de etiquetas PPLA e Zebra', 'Reunião e treinamento com clientes'])
    criarExperiencia('2024', 'Desenvolvedor Front-End', 'Community Dreams Foundation', 'DESCRIÇAO' , ['React', 'HTML', 'CSS', 'JavaScript', 'Metodologia Sprint'])
});