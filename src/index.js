const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  handleShoppingItem(event.target.new_item_input.value);
  form.reset();
});
const submitItemButton = document.getElementById('submit_button');
const list = document.getElementById('items_list');

const clearListButton = document.getElementById('clear_list_button');
clearListButton.addEventListener('click', () => {
  list.remove();
  location.reload();
});

function handleShoppingItem(item) {
  let listedItem = document.createElement('li');
  listedItem.textContent = `${item}`;
  listedItem.style.marginTop = '5px';
  list.appendChild(listedItem);

  let markAsPurchasedButton = document.createElement('button');
  markAsPurchasedButton.style.marginLeft = '10px';
  markAsPurchasedButton.textContent = 'Mark As Purchased';
  listedItem.appendChild(markAsPurchasedButton);

  markAsPurchasedButton.addEventListener('click', () => {
    listedItem.style.textDecoration = 'line-through';
  });

  let unmarkAsPurchasedButton = document.createElement('button');
  unmarkAsPurchasedButton.textContent = 'Undo';
  listedItem.appendChild(unmarkAsPurchasedButton);

  unmarkAsPurchasedButton.addEventListener('click', () => {
    listedItem.style.textDecoration = 'none';
  });

  let deleteItemButton = document.createElement('button');
  deleteItemButton.style.marginLeft = '30px';
  deleteItemButton.textContent = 'X';
  deleteItemButton.style.color = 'red';
  listedItem.appendChild(deleteItemButton);

  deleteItemButton.addEventListener('click', () => {
    listedItem.remove();
  });
}
