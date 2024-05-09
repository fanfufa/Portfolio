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
    criarExperiencia('2022 - 2023', 'Formação como Tecnico em Desenvolivmento Sistemas', 'Colégio Técnico de Limeira - COTIL', 'Meu início na área do programaçaõ e desenvolvimento começou com essa formação no Colégio Técnico de Limeira. Logo no primeiro ano pude começar a enteder a lógica da programação  através da lingugaem C. Foram muitos exercícios e aulas para poder entender os princípios da programação. Além disso, também tive contato com o desenvolvimento WEB Front-end, aprendendo HTML, CSS e Bootstrap; e com o linguagem SQL de bancos de dados, utilizando o MySQL. <br> Posteriormente, no segundo ano, consegui ampliar meu conhecimento com novas linguagens (como JAVA e C#) e algumas outras áreas como tratamento de dados com POWER BI e o desenvolvimento WEB (front e back). Também pude colocar tudo isso em prática com meu TCC, no qual desenvolvi um sistema ERP para bares e restaurantes que contempla todas as partes aprendidas durante o curso (Minha contribuição com o projeto foi na parte do aplicativo desktop, feito em C#) ' , ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'C#', 'Java', 'MySQL', 'PowerBI'])
    criarExperiencia('2021 - atualmente', 'Formação em Hardware de Computadores', 'Academia do Hardware', 'DESCRIÇAO' , ['Manutenção hardwares', 'Componentes de hardware do computador', 'Limpeza de computadores', 'Rede Computadores'])
    criarExperiencia('2022 - atualmente', 'Linguagem Python', 'Curso em Vídeo e BroCode', 'DESCRIÇAO' , ['Python', 'PyAutoGUI'])
    criarExperiencia('2023', 'Tecnico em manutenção de computadores', 'Laboratório dos Notebooks', 'Minha primeira experiência profissional foi trabalhando numa loja de manutenção de computadores, principalmente notebooks. Já vinha estudando sobre isso há um tempo através de um curso, mas o trabalho foi ótimo para acostumar com a prática. Meu papel era, em grande parte,  realizar testes de performace nas máquinas que chegavam, desmonta-las, lançar chamados de acompanhamento do trabalho, limpar as máquinas e trocar algumas peças.' , ['Manuntenção de notebooks', 'Teste de performace', 'Formatações', 'Limpezas', 'Trocas de telas, memorias RAMs e SSDs/HDs', 'Montagem e desmontagem de notebooks'])
    criarExperiencia('2023 - atualmente', 'Help Desk', 'Alfa Networks', 'A empresa que trabalho possui um sistema ERP e minha função, junto com os demais suportes, é de acompanhar os clientes no uso da plataforma. O atendimento acontece principalmente através do nosso CHAT e Whatsapp, mas também por ligações e reuniões pelo GOOGLE MEET. <br> O suporte busca ajudar os clientes com os problemas e dúvidas dentro do sistema, mas também auxiliar com impressoras, dispositivos SAT, algumas dúvidas de informática básica e Windows. Ademais, sempre é necessário lançarmos os chamados do que foi feito e também, quando identificamos algum erro de código no sistema, criamos o chamado para o pessoal do desenvovlimento ' , ['Atendimento ao cliente', 'Suporte de impressoras e dispostivos SAT', 'Configuração de etiquetas PPLA e Zebra', 'Reunião e treinamento com clientes'])
    criarExperiencia('2024', 'Desenvolvedor Front-End', 'Community Dreams Foundation', 'Esse foi um trabalho voluntário que participei no ínicio de 2024. Nele eu era parte do time de desenvolvedores Front-end, onde nós desenvolviamos as telas com base naquilo que o time de Design havia projetado. Juntamente, faziamos reuniões semanais para ir passando o andar dos projetos, além de atribuir novos. Infelizmente não pude ficar muito tempo, mas foi uma ótima oportunidade para colocar alguns conhecimentos em prática, aprender o framework REACT, praticar meu ingles e entender como funcionaria a dinamica de um trabalho como esse' , ['React', 'HTML', 'CSS', 'JavaScript', 'Metodologia Sprint'])
});