const pizzaMenu = [
  {
    name: 'Supreme',
    ingredients: 'Pepperoni, Ham, Sausage, Onions, Green Peppers, Mushrooms, Black Olives',
    price: 'S-$12.00 M-$14.50 L-$17.00'
  },
  {
    name: 'Veggie',
    ingredients: 'Mushrooms, Green Peppers, Onions, Black Olives, Tomatoes',
    price: 'S-$11.00 M-$13.50 L-$16.00'
  },
  {
    name: 'Meat Lovers',
    ingredients: 'Pepperoni, Bacon, Ham, Sausage, Beef',
    price: 'S-$12.50 M-$15.00 L-$17.50'
  },
  {
    name: 'Hawaiian',
    ingredients: 'Ham, Bacon, Pineapple',
    price: 'S-$10.50 M-$13.00 L-$15.50'
  },
  {
    name: 'Seafood',
    ingredients: 'Shrimp, Crabmeat, Garlic, Pesto Sauce',
    price: 'S-$13.00 M-$15.50 L-$18.00'
  },
  {
    name: 'Build Your Own',
    ingredients: 'Available Toppings: Ham, Sausage, Pepperoni, Bacon, Beef, Mushroom, Onion, Green Pepper, Black Olives, Green Olives, Tomatoes, Pineapple, Banana Peppers',
    price: 'S-$9.00 M-$11.50 L-$14.00 + $0.50 per topping'
  }
];

function createPizzaMenu(element) {

  return element;
}

function getMenuContent() {
  let content = document.createElement('div');
  content.classList.add('menu-container');
  const header = document.createElement('h1');
  header.innerText = 'Menu';
  content.appendChild(header);

  content = createPizzaMenu(content);

  return content;
}

export { getMenuContent };
