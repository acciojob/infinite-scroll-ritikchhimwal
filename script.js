//your code here!

const list = document.getElementById('infi-list');

// Function to add list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

// Initial load: Add 10 list items by default
addListItems(10);

// Infinite scrolling logic
list.addEventListener('scroll', () => {
  // Check if the user scrolled to the bottom of the list
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addListItems(2); // Add 2 more items when the end is reached
  }
});
