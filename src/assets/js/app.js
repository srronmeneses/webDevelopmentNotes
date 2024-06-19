/**
 * 
 * @param {elementHTML} elementId String
 */
export const App = (elementId) => {
    (() => {
        const app = document.createElement('h1');
        app.innerText = 'Fundamentos de JS';
        document.querySelector(elementId).append(app);
    })();
}