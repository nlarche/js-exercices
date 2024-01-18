const list = [
  { id: 1, title: "title 1", content: "content 1", nb: 1 },
  { id: 2, title: "title 2", content: "content 2", nb: 4 },
  { id: 3, title: "title 3", content: "content 3", nb: 1 },
  { id: 4, title: "title 4", content: "content 4", nb: 2 },
];

const p = [];

function add(name) {
  let element;
  for (let i = 0; i < list.length; i++) {
    if (list[i].title === name) {
      element = list[i];
    }
  }
  if (element.nb > 0) {
    p.push(element);
    element.nb--;
    list.splice(list.indexOf(element), 1, element);
  }
  return p;
}

function remove(name) {
  let element;
  for (let i = 0; i < p.length; i++) {
    if (p[i].title === name) {
      element = p[i];
    }
  }

  if (element !== null && element !== undefined) {
    p.splice(p.indexOf(element), 1);
    element.nb++;
    list.splice(list.indexOf(element), 1, element);
  }
  return p;
}

add("title 1");
add("title 2");
add("title 1");
add("title 2");
remove("title 3");
remove("title 2");

console.log(JSON.stringify(list));
console.log("---------------------");
console.log(JSON.stringify(p));
