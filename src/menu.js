function getMenuContent() {
  const content = document.createElement('div');
  const menu = document.createElement('p');
  menu.innerText = 'Menu coming soon!';
  content.appendChild(menu);

  return content;
}

export { getMenuContent };
