const itemList = [
  { id: 1, title: "title 1", content: "content 1", quantity: 1 },
  { id: 2, title: "title 2", content: "content 2", quantity: 4 },
  { is: 3, title: "title 3", content: "content 3", quantity: 1 },
  { id: 4, title: "title 4", content: "content 4", quantity: 2 },
];

const basket = [];


function pureFunction(a, b){
  return a + b;
}

pureFunction(1, 2); // 3
pureFunction(1, 2); // 3 

const c = Math.random();
function impureFunction(a){
  return a + c;
}

impureFunction(1); // ?
impureFunction(1); // ?

function addItemToBasketByTitle(title) {
  let item = searchItemByTitle(title);
  if (isExistingInStock(item)) {
    addItemToBasket(item);
    item.quantity--;
    updateStock(item);
  } else {
    console.log("stock vide", item.name);
  }
  return basket;
}

function removeItemFromBasketByTitle(title) {
  const item = searchItemByTitle(title);
  if (item !== null && item !== undefined) {
    removeItemFromBasket(item);
    item.nb++;
    updateStock(item);
  } else {
    console.log("article absent du panier");
  }
  return basket;
}

function isExistingInStock(item) {
  return item.quantity > 0;
}

function updateStock(item) {
  itemList.splice(itemList.indexOf(item), 1, item);
  console.log("stock mise a jour, stock restant", item.name, item.quantity);
}

function addItemToBasket(item) {
  basket.push(item);

  console.log("article ajouter au panier", item.name);
}

function searchItemByTitle(title) {
  let element;
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].title === title) {
      element = itemList[i];
    }
  }
  return element;
}

addItemToBasketByTitle("title 1", itemList, basket);
addItemToBasketByTitle("title 2");
addItemToBasketByTitle("title 1");
addItemToBasketByTitle("title 2");
removeItemFromBasketByTitle("title 3");
removeItemFromBasketByTitle("title 2");

console.log("articles", JSON.stringify(itemList));
console.log("---------------------");
console.log("basket", JSON.stringify(p));
function removeItemFromBasket(item) {
  basket.splice(basket.indexOf(item), 1);
  console.log("article supprimé du panier", item.name);
}
