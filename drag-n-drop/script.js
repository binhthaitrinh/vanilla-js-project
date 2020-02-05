const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bernard Arnault',
  'Bill Gates',
  'Warren Buffett',
  'Mark Zuckerberg',
  'Amancio Ortega',
  'Larry Ellison',
  'Larry Page',
  'Carlos Slim Helu',
  'Sergey Brin'
];

// store list items
const listItems = [];

var dragStartIndex;

createList();

function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort(function(a, b) {
      return a.sort - b.sort;
    })
    .forEach((person, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
        <p class="person-name"> ${person.value}</p>
        <i class="fas fa-grip-lines"></i>
    </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
