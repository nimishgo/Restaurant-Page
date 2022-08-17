import homeContent from './home.js'
import contactContent from './contacts.js'
import menuContent from './menu.js'

import './styles/style.css';

const load = (() => {
    const content = document.getElementById("content");

    const header = document.createElement("h1");
    const navbar = document.createElement("div");
    const insideTab = document.createElement("div");
    const footer = document.createElement("div");

    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contacts = document.createElement("button");
    
    
    home.setAttribute('id','home');
    menu.setAttribute('id','menu');
    contacts.setAttribute('id','contacts');
    insideTab.setAttribute('id','insideTab');
    
    header.classList.add("heading");
    navbar.classList.add("navbar");
    footer.classList.add("footer");
    
    header.textContent = "The Stardrop Saloon";
    
    home.textContent = "Home";
    menu.textContent = "Menu";
    contacts.textContent = "Contacts";  
    footer.innerHTML = `<p>Created by <a href="https://github.com/nimishgo">nimishgo</a></p>`;
    
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contacts);
    
    content.appendChild(header);
    content.appendChild(navbar);
    content.appendChild(insideTab);
    content.appendChild(footer);
})();

init();
function other() {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contacts = document.getElementById("contacts");
        
    home.addEventListener("click",homeContent);
    menu.addEventListener("click",menuContent);
    contacts.addEventListener("click",contactContent);
}

function init() {
    homeContent();
    other();
}
