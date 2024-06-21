import html  from "../components/html/main.html?raw";
/**
 * 
 * @param {elementHTML} elementId String
 */
export const App = (elementId) => {
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        app.classList.add('w-8/12','m-auto', 'h-screen', 'shadow-2xl', 'shadow-zinc-500', 'p-6', 'min-w-[450px]');
        document.querySelector(elementId).append(app);
    })();
}