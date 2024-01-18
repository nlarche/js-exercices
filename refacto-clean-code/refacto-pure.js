const itemList = [
  { id: 1, title: "title 1", content: "content 1", quantity: 1 },
  { id: 2, title: "title 2", content: "content 2", quantity: 4 },
  { is: 3, title: "title 3", content: "content 3", quantity: 1 },
  { id: 4, title: "title 4", content: "content 4", quantity: 2 },
];

const basket = [];

function addItemToBasketByTitle(itemList, basket, title) {
  let item = searchItemByTitle(itemList, title);
  if (isExistingInStock(item)) {
    updateStock(itemList, item);
    item.quantity--;
    addItemToBasket(basket, item);
  } else {
    console.log("stock vide", item.name);
  }
}

function removeItemFromBasketByTitle(itemList, basket, title) {
  const item = searchItemByTitle(itemList, title);
  if (item !== null && item !== undefined) {
    updateStock(item);
    item.nb++;
    removeItemFromBasket(basket, item);
  } else {
    console.log("article absent du panier");
  }
}

function isExistingInStock(item) {
  return item.quantity > 0;
}

function updateStock(itemList, item) {
  itemList.splice(itemList.indexOf(item), 1, item);
  console.log("stock mise a jour, stock restant", item.name, item.quantity);
  return itemList;
}

function addItemToBasket(basket, item) {
  basket.push(item);
  console.log("article ajouter au panier", item.name);
  return basket;
}

function removeItemFromBasket(basket, item) {
  basket.splice(basket.indexOf(item), 1);
  console.log("article supprimé du panier", item.name);
  return basket;
}

function searchItemByTitle(itemList, title) {
  let element;
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].title === title) {
      element = itemList[i];
    }
  }
  return element;
}

addItemToBasketByTitle(itemList, basket, "title 1");
addItemToBasketByTitle(itemList, basket, "title 2");
addItemToBasketByTitle(itemList, basket, "title 1");
addItemToBasketByTitle(itemList, basket, "title 2");
removeItemFromBasketByTitle(itemList, basket, "title 3");
removeItemFromBasketByTitle(itemList, basket, "title 2");

console.log("articles", JSON.stringify(itemList));
console.log("---------------------");
console.log("basket", JSON.stringify(p));
