export function home() {
    const contentElement = document.querySelector('#content');
    if (contentElement) {
        contentElement.innerHTML = `
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    `;
    }
}