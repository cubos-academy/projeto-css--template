const switchThemeElement = document.querySelector('.switch__theme');
switchThemeElement.addEventListener('change', () => {
    const bodyElem = document.querySelector('body');
    const lightImage = document.querySelector('.theme__light');
    const darkImage = document.querySelector('.theme__dark');
   
    if(!switchThemeElement.checked) {
        bodyElem.classList.remove('dark');
        lightImage.src = 'assets/sun-active.svg';
        darkImage.src = 'assets/moon.svg';
        return
    } 
    
    bodyElem.classList.add('dark');
    lightImage.src = 'assets/sun.svg';
    darkImage.src = 'assets/moon-active.svg';
})