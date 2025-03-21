

const toggle = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add('currentTheme');

}

toggle.addEventListener('click', () => {

    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', "")
    } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme')
    }
})