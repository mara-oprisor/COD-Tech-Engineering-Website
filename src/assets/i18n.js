let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        key = el.getAttribute('data-i18n');
        if(translations[lang]?.[key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.getElementById('lang-toggle').textContent = lang === 'en' ? 'RO' : 'EN';
    localStorage.setItem('lang', lang);
    currentLang = lang;  
}

function toggleLang() {
    applyLang(currentLang === 'en' ? 'ro' : 'en');
}

applyLang(currentLang);