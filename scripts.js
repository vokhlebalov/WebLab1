let button = document.querySelector('button');
let input = document.querySelector('select');


let NEW_PRODUCTS = new Map([
    ['PS4 Slim', 'https://www.playstation.com/ru-ru/ps4/buy-ps4/'],
    ['PS4 Pro', 'https://www.playstation.com/ru-ru/ps4/buy-ps4/'],
    ['PS5', 'https://www.playstation.com/ru-ru/ps5/buy-now/'],
    ['PS5 Digital Edition', 'https://www.playstation.com/ru-ru/ps5/buy-now/'],
]);

input.addEventListener('change', () => {
    button.hidden = input.length === 0;
})

button.addEventListener('click', () => {
    let value = input.value;

    if (value.length === 0)  {
        alert('Вы не выбрали продукт для покупки!');
        return
    }


    if (!NEW_PRODUCTS.has(value)) {
        alert('К сожалению, данные консоли больше не продаются на официальном сайте');
        return;
    }

    document.location.href = NEW_PRODUCTS.get(value);
});