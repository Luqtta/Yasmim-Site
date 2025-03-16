function getUserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    return language;
}

function loadLanguageFile() {
    const language = getUserLanguage().toLowerCase();

    if (language.startsWith('en')) {
        window.location.href = '/en';
    } else if (language.startsWith('pt')) {
        window.location.href = '/pt';
    } else {
        window.location.href = '/en';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadLanguageFile();
});
