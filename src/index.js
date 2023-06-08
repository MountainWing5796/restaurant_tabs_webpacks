import "./style.css"
import { home_page } from "./home_page";
import { menu_page } from "./menu_page";
import { page_load } from "./pageload";

page_load();


const content = document.querySelector('#content');


const btn_home = document.querySelector('#home');
const btn_menu = document.querySelector('#menu');
const btn_about = document.querySelector('#about');
const btn_contact = document.querySelector('#contact');

// const home_page = document.querySelector('.home_page');
// const menu_page = document.querySelector('.menu_page');

btn_menu.addEventListener('click', ()=> {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(menu_page());
})

btn_home.addEventListener('click', ()=> {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(home_page());
})