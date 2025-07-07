export function menu() {
    const contentElement = document.querySelector('#content');
    if (contentElement) {
        contentElement.innerHTML = `
        <h1>Menu Page</h1>
        <p>Welcome to the menu page!</p>
        `;
    }
}