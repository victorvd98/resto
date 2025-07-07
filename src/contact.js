export function contact() {
    const contentElement = document.querySelector('#content');
    if (contentElement) {
        contentElement.innerHTML = `
            <h1>Contact Page</h1>
            <p>Welcome to the contact page!</p>
            `;
    }
}