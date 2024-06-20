import html  from "../components/main.html?raw";
/**
 * 
 * @param {elementHTML} elementId String
 */
export const App = (elementId) => {
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();
}