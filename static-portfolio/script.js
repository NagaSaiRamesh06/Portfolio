// Navigation Logic
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll Handler
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('glass', 'py-3', 'shadow-2xl');
        navbar.classList.remove('bg-transparent', 'py-5');
    } else {
        navbar.classList.add('bg-transparent', 'py-5');
        navbar.classList.remove('glass', 'py-3', 'shadow-2xl');
    }

    // Active Section Highlight
    let current = 'home';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-500');
        link.classList.add('text-gray-400');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-blue-500');
            link.classList.remove('text-gray-400');
        }
    });
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Change icon
    const iconPath = mobileMenuBtn.querySelector('path');
    if (mobileMenu.classList.contains('hidden')) {
        iconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); // Menu icon
    } else {
        iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Close icon
    }
});

// Close mobile menu on clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.querySelector('path').setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
    });
});

// Contact Form Logic (Mailto)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:nagasairameshkunapalli@gmail.com?subject=${subject}&body=${body}`;
});

// AI Assistant UI Logic (Demo Mode)
const aiToggle = document.getElementById('ai-toggle');
const aiChat = document.getElementById('ai-chat');
const aiClose = document.getElementById('ai-close');
const aiMessages = document.getElementById('ai-messages');
const aiInput = document.getElementById('ai-input');
const aiSend = document.getElementById('ai-send');

aiToggle.addEventListener('click', () => {
    aiChat.classList.remove('hidden');
    aiToggle.classList.add('hidden');
});

aiClose.addEventListener('click', () => {
    aiChat.classList.add('hidden');
    aiToggle.classList.remove('hidden');
});

function addMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = `flex ${isUser ? 'justify-end' : 'justify-start'}`;

    div.innerHTML = `
        <div class="max-w-[80%] px-4 py-2 rounded-2xl text-sm ${isUser ? 'bg-blue-600 text-white rounded-tr-none' : 'glass text-gray-200 rounded-tl-none'
        }">
            ${text}
        </div>
    `;
    aiMessages.appendChild(div);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

function handleAiSend() {
    const text = aiInput.value.trim();
    if (!text) return;

    addMessage(text, true);
    aiInput.value = '';

    // Simulate AI response
    const thinkingDiv = document.createElement('div');
    thinkingDiv.id = 'ai-thinking';
    thinkingDiv.className = 'flex justify-start';
    thinkingDiv.innerHTML = '<div class="glass px-4 py-2 rounded-2xl text-sm italic text-gray-500">AI is thinking...</div>';
    aiMessages.appendChild(thinkingDiv);
    aiMessages.scrollTop = aiMessages.scrollHeight;

    setTimeout(() => {
        document.getElementById('ai-thinking').remove();
        addMessage("This is a static demo version. For the full AI experience, please view the React version of this portfolio!");
    }, 1500);
}

aiSend.addEventListener('click', handleAiSend);
aiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAiSend();
});
