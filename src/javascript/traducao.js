function getUserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    return language;
}

function loadLanguageFile() {
    const language = getUserLanguage().toLowerCase();

    if (language.startsWith('en')) {
        window.location.href = './en.html'; 
    } else if (language.startsWith('pt-br')) {
        window.location.href = './pt-br.html';  
    } else {
        window.location.href = './en.html';  
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadLanguageFile();
});
