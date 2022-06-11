export async function reRender(elementId, content) {
    if (elementId) {
        document.querySelector(`#${elementId}`).innerHTML = await content.render();
    }
    if (content.afterRender) content.afterRender();
}
