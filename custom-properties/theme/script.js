function setTheme(){
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    document.querySelector(".theme-name").textContent = newTheme;   
    // theme-name ki jagah newTheme variable me stored value aa jayegi: light ya dark
    // matlab jis element ki class "theme-name" thi uski class ab "light" ya "dark" ho jayegi
}

document.querySelector('.theme-toggle').addEventListener("click", setTheme)