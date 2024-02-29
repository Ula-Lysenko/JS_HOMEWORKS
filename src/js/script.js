const bodyDoc = document.body;
const bodyChildren = bodyDoc.children;
const ul = bodyChildren[0];

for (const elem of ul.children) {
  console.log(elem);
}

//

const arrFromUl = Array.from(ul.children);
console.log(arrFromUl.length);

//

const arrTextContent = [];
for (let i = 0; i < ul.children.length; i++) {
  arrTextContent.push(ul.children[i].textContent);
}
console.log(arrTextContent);
