const flagElement = document.getElementById('flag');
const menuElement = document.getElementById('language-menu');
const ptOption = document.getElementById('pt');
const enOption = document.getElementById('en');

flagElement.addEventListener('click', () => {
    menuElement.style.display = menuElement.style.display === 'none' ? 'block' : 'none';
});

function switchLanguage(language) {
    if (language === 'pt') {
        flagElement.src = 'images/Brazil.png';
        flagElement.alt = 'Bandeira do Brasil';
        document.documentElement.lang = 'pt';
        ptOption.classList.add('active');
        enOption.classList.remove('active');

        // Mudança de linguagem do menu
        document.querySelector('nav ul li a[href="index.html"]').innerText = 'Início';
        document.querySelector('nav ul li a[href="about.html"]').innerText = 'Sobre';
        document.querySelector('nav ul li a[href="work.html"]').innerText = 'Trabalho';
        document.querySelector('nav ul li a[href="contato.html"]').innerText = 'Contato';

        // Mudança de linguagem do index.html
        if (document.querySelector('.profile-section')) {
            document.querySelector('.profile-section .strong-home').innerText = 'Olá,';
            document.querySelector('.profile-section p').innerText = 'Eu sou Raul Paradeda. Possuo graduação em Ciência da Computação pela Universidade Católica de Pelotas (2004), tenho mestrado em Sistemas e Computação pela Universidade Federal do Rio Grande do Norte (2007) e doutorado em Engenharia Informática e de Computadores pelo Instituto Superior Técnico da Universidade de Lisboa (2020).';
            document.querySelector('.about-home-link').innerText = 'Sobre';
        }

        // Mudança de linguagem do work.html
        if (document.querySelector('.projetos')) {
            document.querySelector('.projetos h2').innerText = 'Projetos';
            document.querySelectorAll('.project').forEach(project => {
                if (project.dataset.title && project.dataset.summary) {
                    project.querySelector('.project-title p').innerText = project.dataset.title;
                    project.setAttribute('data-summary', project.dataset.summary);
                }
            });
        }

        // Mudança de linguagem do about.html
        if (document.querySelector('.about')) {
            document.querySelector('.about h1').innerText = 'Vida Pessoal';
            document.querySelector('.about p:nth-of-type(1)').innerText = 'Seja bem-vindo ao meu espaço! Aqui você encontrará mais do que apenas um professor — descobrirá alguém apaixonado por uma variedade de interesses que vão além da sala de aula.';
            document.querySelector('.about p:nth-of-type(2)').innerText = 'Sou aficionado por coisas de nerd, devorador ávido de livros, mestre nos universos virtuais dos videogames e estrategista em jogos de tabuleiro e cartas.';
            document.querySelector('.about p:nth-of-type(3)').innerText = 'Sou apaixonado por futebol, ratinho de academia, aprecio a elegância da dança de salão e encontro disciplina nas artes marciais como muay thai, krav maga e kung fu. Além disso, aprecio a adrenalina e a precisão do automobilismo.';
            document.querySelector('.about br + h1').innerText = 'Vida Profissional';
            document.querySelector('.about p:nth-of-type(4)').innerText = 'Atualmente, sou Professor Adjunto da Universidade do Estado do Rio Grande do Norte (UERN), onde compartilho meu conhecimento e paixão pela ciência da computação com os alunos. Meu trabalho é minha vocação, e sou dedicado a inspirar a próxima geração de profissionais da tecnologia. Navegue pelo site e descubra mais sobre meu trabalho, projetos e interesses.';

            document.querySelector('.timeline-title').innerText = 'Formação Acadêmica';
            document.querySelectorAll('.timeline-item .date').forEach(date => {
                date.innerText = date.dataset.pt;
            });
            document.querySelectorAll('.timeline-item .info').forEach(info => {
                info.innerText = info.dataset.pt;
            });
        }

        // Mudança de linguagem do contato.html
        if (document.querySelector('.contact-sections')) {
            document.querySelector('.map-section .professional-address').innerText = 'Endereço profissional:';
            document.querySelector('.contact-info h2').innerText = 'Contatos';
            document.querySelectorAll('.contact-item span')[0].innerText = '@paradeda';
            document.querySelectorAll('.contact-item span')[1].innerText = 'Raul Paradeda';
        }

        // Mudança de linguagem do project-container e modais
        if (document.querySelector('.projetos')) {
            document.querySelector('.projetos h2').innerText = 'Projetos';
            document.querySelectorAll('.project').forEach(project => {
                project.querySelector('.project-title p').innerText = project.dataset.title;
            });
            document.querySelectorAll('.project').forEach(project => {
                project.querySelector('.project-title p').innerText = project.dataset.title;
                project.setAttribute('data-summary', project.dataset.summary);
            });
        }

        // Mudança de linguagem do modal
        if (document.querySelector('.modal-content')) {
            const modalTitle = document.getElementById('modal-title');
            const modalSummary = document.getElementById('modal-summary');

            const updateModalContent = (title, summary) => {
                modalTitle.innerText = title;
                modalSummary.innerText = summary;
            };

            document.querySelectorAll('.project').forEach(project => {
                project.addEventListener('click', () => {
                    const title = project.querySelector('.project-title p').innerText;
                    const summary = project.getAttribute('data-summary');
                    updateModalContent(title, summary);
                });
            });
        }

        // Mudança de linguagem do footer
        document.querySelector('footer .no-link').innerText = 'Universidade do Estado do Rio Grande do Norte (UERN)';
        document.querySelector('footer p').innerHTML = '&copy; 2024. Desenvolvido por <a href="https://github.com/nathalianoemia" class="no-link-github">Nathália Noemia</a>.';

    } else if (language === 'en') {
        flagElement.src = 'images/USA.png';
        flagElement.alt = 'USA Flag';
        document.documentElement.lang = 'en';
        enOption.classList.add('active');
        ptOption.classList.remove('active');

        // Change language of menu
        document.querySelector('nav ul li a[href="index.html"]').innerText = 'Home';
        document.querySelector('nav ul li a[href="about.html"]').innerText = 'About';
        document.querySelector('nav ul li a[href="work.html"]').innerText = 'Work';
        document.querySelector('nav ul li a[href="contato.html"]').innerText = 'Contact';

        // Change language of index.html
        if (document.querySelector('.profile-section')) {
            document.querySelector('.profile-section .strong-home').innerText = 'Hello,';
            document.querySelector('.profile-section p').innerText = "I'm Raul Paradeda. I have a degree in Computer Science from the Catholic University of Pelotas (2004), a Master's in Systems and Computing from the Federal University of Rio Grande do Norte (2007), and a PhD in Computer Engineering from the Instituto Superior Técnico at the University of Lisbon (2020).";
            document.querySelector('.about-home-link').innerText = 'About';
        }

        // Change language of work.html
        if (document.querySelector('.projetos')) {
            document.querySelector('.projetos h2').innerText = 'Projects';
            document.querySelectorAll('.project').forEach(project => {
                project.querySelector('.project-title p').innerText = project.dataset.title;
            });
        }

        // Change language of about.html
        if (document.querySelector('.about')) {
            document.querySelector('.about h1').innerText = 'Personal Life';
            document.querySelector('.about p:nth-of-type(1)').innerText = 'Welcome to my space! Here you will find more than just a teacher — you will discover someone passionate about a variety of interests beyond the classroom.';
            document.querySelector('.about p:nth-of-type(2)').innerText = 'I am a nerd, an avid book reader, a master in the virtual universes of video games, and a strategist in board and card games.';
            document.querySelector('.about p:nth-of-type(3)').innerText = 'I am passionate about soccer, a gym enthusiast, I appreciate the elegance of ballroom dancing, and I find discipline in martial arts such as muay thai, krav maga, and kung fu. Additionally, I enjoy the adrenaline and precision of motorsport.';
            document.querySelector('.about br + h1').innerText = 'Professional Life';
            document.querySelector('.about p:nth-of-type(4)').innerText = 'Currently, I am an Adjunct Professor at the Universidade do Estado do Rio Grande do Norte (UERN), where I share my knowledge and passion for computer science with students. My work is my vocation, and I am dedicated to inspiring the next generation of technology professionals. Browse the site and discover more about my work, projects, and interests.';

            document.querySelector('.timeline-title').innerText = 'Academic Background';
            document.querySelectorAll('.timeline-item .date').forEach(date => {
                date.innerText = date.dataset.en;
            });
            document.querySelectorAll('.timeline-item .info').forEach(info => {
                info.innerText = info.dataset.en;
            });
        }

        // Change language of contato.html
        if (document.querySelector('.contact-sections')) {
            document.querySelector('.map-section .professional-address').innerText = 'Professional Address:';
            document.querySelector('.contact-info h2').innerText = 'Contact Information';
            document.querySelectorAll('.contact-item span')[0].innerText = '@paradeda';
            document.querySelectorAll('.contact-item span')[1].innerText = 'Raul Paradeda';
        }

        // Change language of project-container and modals
        if (document.querySelector('.projetos')) {
            document.querySelector('.projetos h2').innerText = 'Projects';
            document.querySelectorAll('.project').forEach(project => {
                project.querySelector('.project-title p').innerText = project.dataset.title;
            });
        }

        // Change language of modal
        if (document.querySelector('.modal-content')) {
            const modalTitle = document.getElementById('modal-title');
            const modalSummary = document.getElementById('modal-summary');

            const updateModalContent = (title, summary) => {
                modalTitle.innerText = title;
                modalSummary.innerText = summary;
            };

            document.querySelectorAll('.project').forEach(project => {
                project.addEventListener('click', () => {
                    const title = project.querySelector('.project-title p').innerText;
                    const summary = project.getAttribute('data-summary');
                    updateModalContent(title, summary);
                });
            });
        }

        // Change language of footer
        document.querySelector('footer .no-link').innerText = 'Universidade do Estado do Rio Grande do Norte (UERN)';
        document.querySelector('footer p').innerHTML = '&copy; 2024. Developed by <a href="https://github.com/nathalianoemia" class="no-link-github">Nathália Noemia</a>.';
    }
}
