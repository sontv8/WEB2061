export async function reRender(elementId, content) {
    if (elementId) {
        document.getElementById(elementId).innerHTML = await content.render();
    }
    if (content.afterRender) content.afterRender();
}
