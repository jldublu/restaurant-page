import { getHomeContent } from "./home";
import { getMenuContent } from "./menu";
import { getContactContent } from "./contact";
import './main.css';

const content = document.getElementById('content');
const main = document.createElement('main');

function createHeader() {
  const header = document.createElement('header');
  header.appendChild(createNav());
  content.appendChild(header);
}

function createMain() {
  loadMain(getHomeContent());
  content.appendChild(main);
}

function createNav() {
  const nav = document.createElement('nav');

  const navItems = document.createElement('ul');
  navItems.classList.add('nav-menu');

  const homeItem = document.createElement('li');
  homeItem.classList.add('nav-item');
  homeItem.innerText = 'Home';
  homeItem.addEventListener('click', () => {
    loadMain(getHomeContent());
  });
  navItems.appendChild(homeItem);

  const menuItem = document.createElement('li');
  menuItem.classList.add('nav-item');
  menuItem.innerText = 'Menu';
  menuItem.addEventListener('click', () => {
    loadMain(getMenuContent());
  });
  navItems.appendChild(menuItem);

  const contactItem = document.createElement('li');
  contactItem.classList.add('nav-item');
  contactItem.innerText = 'Contact';
  contactItem.addEventListener('click', () => {
    loadMain(getContactContent());
  });
  navItems.appendChild(contactItem);

  nav.appendChild(navItems);

  return nav;
}

function loadMain(mainContent) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  main.appendChild(mainContent);
}

function init() {
  createHeader();
  createMain();
}

init();
