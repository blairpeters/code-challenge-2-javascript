# Javascript code challenge 2

## Description

#### Requirements

1. **Array: Maintain a JavaScript array to store shopping list items.**

2. **DOM Manipulation:**
   Create an HTML structure with an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".
   Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
   Update the list item visually to indicate purchased items (e.g., strikethrough text, different background color).

3. **Event Handling:**
   Attach event listeners to the "Add" button to capture user input and add items to the list.
   Attach event listeners to the list of items to allow users to mark them as purchased.
   Attach an event listener to the "Clear List" button to remove all items from the list.

addItemBtn.addEventListener("click", addItem);
clearListBtn.addEventListener("click", () => {
items = [];
createList();
});

4. **Bonus Features:**
   Allow users to edit existing list items.
   Implement persistence using local storage to save the list even after the page reloads.

## system requirements

- Node 18+
- A browser capable of running javascript (chrome, firefox).
- Operating system(Windows 10+, Macos, Linux, etc)
- A text editor capable of running javascript(vs code, Nano, Atom,etc)
- RAM space >= 4GB
- Disk space >= 1GB

## installation

1. Open your terminal/cli on your computer.
2. Clone the repository by running the following command:

`git clone https://github.com/blairpeters/code-challenge-2-javascript`

## Running the application

1. Once you open the project on your vs code you can go live.
2. visit the following deployed link `https://blairpeters.github.io/code-challenge-2-javascript/`

## Author

This project was done by Tony Blair Maina.
https://github.com/blairpeters
