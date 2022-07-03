function getContactContent() {
  const content = document.createElement('div');
  const contactInfo = document.createElement('p');
  contactInfo.innerText = 'Contact info coming soon!';
  content.appendChild(contactInfo);

  return content;
}

export { getContactContent };
