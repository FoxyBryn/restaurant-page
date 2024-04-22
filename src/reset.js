export default function reset() {
    const pageContent = document.querySelector('#content');
    pageContent.removeAttribute('class');
    pageContent.innerHTML = '';
}