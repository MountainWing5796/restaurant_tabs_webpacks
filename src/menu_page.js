import Biryani from './biryani.jpg';
import Karhai from './karhai.jpg';
import Chicken_tikka from './chicken_tikka.jpg';
import Kabab from './kabab.jpg';

function menu_page() {
    const mp_div = document.createElement('div');
    // mp_div.id = 'active';

    const biryani_div = document.createElement('div');
    const karhai_div = document.createElement('div');
    const tikka_div = document.createElement('div');
    const kabab_div = document.createElement('div');

    const biryani_img = new Image();
    biryani_img.src = Biryani;
    biryani_img.classList.add('dish_img');

    const karhai_img = new Image();
    karhai_img.src = Karhai;
    karhai_img.classList.add('dish_img');

    const tikka_img = new Image();
    tikka_img.src = Chicken_tikka;
    tikka_img.classList.add('dish_img');

    const kabab_img = new Image();
    kabab_img.src = Kabab;
    kabab_img.classList.add('dish_img');

    mp_div.classList.add('menu_page');
    mp_div.id = 'inactive';

    biryani_div.classList.add('dish');
    biryani_div.id = 'biryani';
    biryani_div.innerHTML = 'Delicious Mutton Biryani <br><br>';
    biryani_div.appendChild(biryani_img);


    karhai_div.classList.add('dish');
    karhai_div.id = 'karhai';
    karhai_div.innerHTML = 'Delicious Chicken Karhai <br><br>';
    karhai_div.appendChild(karhai_img);

    tikka_div.classList.add('dish');
    tikka_div.id = 'tikka';
    tikka_div.innerHTML = 'Delicious Chicken Tikka <br><br>';
    tikka_div.appendChild(tikka_img);

    kabab_div.classList.add('dish');
    kabab_div.id = 'kabab';
    kabab_div.innerHTML = 'Delicious Beef Kabab <br><br>';
    kabab_div.appendChild(kabab_img);

    mp_div.appendChild(biryani_div);
    mp_div.appendChild(karhai_div);
    mp_div.appendChild(tikka_div);
    mp_div.appendChild(kabab_div);

    content.appendChild(mp_div);

    return mp_div;
}

export { menu_page };