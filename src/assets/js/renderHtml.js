/**
 * 
 * @param {ELementId} elementId String
 * @param {ElementHTML} html 
 */
export const renderHtml = (elementId, html) => {
    const notes = document.createElement('section');
    notes.innerHTML = html;
    document.querySelector(elementId).append(notes);
}