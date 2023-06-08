import { home_page } from "./home_page";

function page_load() {
    const content = document.querySelector('#content');

    content.appendChild(home_page());

}

export { page_load };