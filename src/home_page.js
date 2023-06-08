import Tikka from './Tikka.jpg';

function home_page() {
    const hp_div = document.createElement('div');

    const home_img = new Image();

    hp_div.classList.add('home_page');
    home_img.src = Tikka;
    console.log(hp_div);
    // hp_div.id = 'active';
    hp_div.innerText = 'Quality Guaranteed';
    hp_div.appendChild(home_img);
    content.appendChild(hp_div);

    return hp_div;
}

export { home_page };