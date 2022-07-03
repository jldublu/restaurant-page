function getHomeContent() {
  const content = document.createElement('div');

  const header = document.createElement('h1');
  header.innerText = "Surfer Boy Pizza";
  content.appendChild(header);

  const logo = document.createElement('img');
  logo.setAttribute('src', '../src/images/surfer-boy-pizza-logo.jpeg');
  logo.setAttribute('alt', 'surfer boy pizza logo');
  logo.setAttribute('height', '150');
  logo.setAttribute('width', '150');
  content.appendChild(logo);

  const copy = document.createElement('p');
  copy.innerText = 'Enjoy our delicious pizza made with the freshest ingredients...except for the pineapple. That comes out of a can.';
  content.appendChild(copy);

  return content;
}

export { getHomeContent };
