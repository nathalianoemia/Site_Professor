document.addEventListener('DOMContentLoaded', function () {
    const text = 'Raul Paradeda';
    let index = 0;
    const typingSpeed = 150; 

    function type() {
        if (index < text.length) {
            document.getElementById('typing-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                document.getElementById('typing-text').innerHTML = '';
                index = 0;
                type();
            }, 3000);
        }
    }

    type();
});

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

// Função para adicionar a classe 'active' ao item clicado
function setActiveNavItem(event) {
    // Remove a classe 'active' de todos os itens
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Adiciona a classe 'active' ao item clicado
    event.currentTarget.classList.add('active');
}

// Adiciona o evento de clique a todos os itens da barra de navegação
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', setActiveNavItem);
});

// Função para definir o item ativo com base na URL atual
function setActiveNavItemByURL() {
    const path = window.location.pathname;
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (path.includes(itemPath)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Define o item ativo com base na URL atual ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSummary = document.getElementById('modal-summary');
    const closeBtn = document.getElementById('close-btn');

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            const title = project.getAttribute('data-title');
            const summary = project.getAttribute('data-summary');
            modalTitle.textContent = title;
            modalSummary.textContent = summary;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

