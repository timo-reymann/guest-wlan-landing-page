const isGermanClient = () => navigator.language.startsWith("de");

const showContentInLang = (language) => {
    let contentElement = document.querySelector(`.${language}`);
    if (!contentElement) {
        throw 'Language is not supported';
    }
    document.querySelectorAll(".content-div")
        .forEach(el => el.classList.add("hidden"));
    contentElement.classList.remove("hidden");

    document.querySelectorAll(`.flag`)
        .forEach(el => {
            const flagLanguage = el.dataset.lang;
            if (language === flagLanguage) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
};

const getQueryParameters = () => new URLSearchParams(window.location.search);