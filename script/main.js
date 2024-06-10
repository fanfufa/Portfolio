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
    criarExperiencia('2022 - 2023', 'FormaÃ§Ã£o como Tecnico em Desenvolivmento Sistemas', 'ColÃ©gio TÃ©cnico de Limeira - COTIL', 'Meu inÃ­cio na Ã¡rea do programaÃ§aÃµ e desenvolvimento comeÃ§ou com essa formaÃ§Ã£o no ColÃ©gio TÃ©cnico de Limeira. Logo no primeiro ano pude comeÃ§ar a enteder a lÃ³gica da programaÃ§Ã£o  atravÃ©s da lingugaem C. Foram muitos exercÃ­cios e aulas para poder entender os princÃ­pios da programaÃ§Ã£o. AlÃ©m disso, tambÃ©m tive contato com o desenvolvimento WEB Front-end, aprendendo HTML, CSS e Bootstrap; e com o linguagem SQL de bancos de dados, utilizando o MySQL. Posteriormente, no segundo ano, consegui ampliar meu conhecimento com novas linguagens (como JAVA e C#) e algumas outras Ã¡reas como tratamento de dados com POWER BI e o desenvolvimento WEB (front e back). TambÃ©m pude colocar tudo isso em prÃ¡tica com meu TCC, no qual desenvolvi um sistema ERP para bares e restaurantes que contempla todas as partes aprendidas durante o curso (Minha contribuiÃ§Ã£o com o projeto foi na parte do aplicativo desktop, feito em C#) ' , ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'C#', 'Java', 'MySQL', 'PowerBI'])

    criarExperiencia('2021 - atualmente', 'FormaÃ§Ã£o em Hardware de Computadores', 'Academia do Hardware', 'Em 2021, em meio a pandemia, decedi começar a estudar um assunto que por muito tempo foi um grande desejo: Hardware de Computadores. Com isso, comprei o curso Academia do Hardware e pude começar a mergulhar nos estudos dos componentes das maquinas, entendendo como funcionam, para que serviam e como manuseá-las. Essa formação me ajudou muito para começar a fazer meus reparos técnicos e arrumar meu primeiro trabalho, por isso sou muito grato à esse ensinamento' , ['ManutenÃ§Ã£o hardwares', 'Componentes de hardware do computador', 'Limpeza de computadores', 'Rede Computadores'])

    criarExperiencia('2023', 'Tecnico em manutenÃ§Ã£o de computadores', 'LaboratÃ³rio dos Notebooks', 'Minha primeira experiÃªncia profissional foi trabalhando numa loja de manutenÃ§Ã£o de computadores, principalmente notebooks. JÃ¡ vinha estudando sobre isso hÃ¡ um tempo atravÃ©s de um curso, mas o trabalho foi Ã³timo para acostumar com a prÃ¡tica. Meu papel era, em grande parte,  realizar testes de performace nas mÃ¡quinas que chegavam, desmonta-las, lanÃ§ar chamados de acompanhamento do trabalho, limpar as mÃ¡quinas e trocar algumas peÃ§as.' , ['ManuntenÃ§Ã£o de notebooks', 'Teste de performace', 'FormataÃ§Ãµes', 'Limpezas', 'Trocas de telas, memorias RAMs e SSDs/HDs', 'Montagem e desmontagem de notebooks'])

    criarExperiencia('2023 - atualmente', 'Help Desk', 'Alfa Networks', 'A empresa que trabalho possui um sistema ERP e minha funÃ§Ã£o, junto com os demais suportes, Ã© de acompanhar os clientes no uso da plataforma. O atendimento acontece principalmente atravÃ©s do nosso CHAT e Whatsapp, mas tambÃ©m por ligaÃ§Ãµes e reuniÃµes pelo GOOGLE MEET. <br> O suporte busca ajudar os clientes com os problemas e dÃºvidas dentro do sistema, mas tambÃ©m auxiliar com impressoras, dispositivos SAT, algumas dÃºvidas de informÃ¡tica bÃ¡sica e Windows. Ademais, sempre Ã© necessÃ¡rio lanÃ§armos os chamados do que foi feito e tambÃ©m, quando identificamos algum erro de cÃ³digo no sistema, criamos o chamado para o pessoal do desenvovlimento ' , ['Atendimento ao cliente', 'Suporte de impressoras e dispostivos SAT', 'ConfiguraÃ§Ã£o de etiquetas PPLA e Zebra', 'ReuniÃ£o e treinamento com clientes'])
    
    criarExperiencia('2024', 'Desenvolvedor Front-End', 'Community Dreams Foundation', 'Esse foi um trabalho voluntÃ¡rio que participei no Ã­nicio de 2024. Nele eu era parte do time de desenvolvedores Front-end, onde nÃ³s desenvolviamos as telas com base naquilo que o time de Design havia projetado. Juntamente, faziamos reuniÃµes semanais para ir passando o andar dos projetos, alÃ©m de atribuir novos. Infelizmente nÃ£o pude ficar muito tempo, mas foi uma Ã³tima oportunidade para colocar alguns conhecimentos em prÃ¡tica, aprender o framework REACT, praticar meu ingles e entender como funcionaria a dinamica de um trabalho como esse' , ['React', 'HTML', 'CSS', 'JavaScript', 'Metodologia Sprint'])
});