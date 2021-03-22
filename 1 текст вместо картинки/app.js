'use strict';

// 1. получите все кнопки и сохраните в переменную
const btns=document.querySelectorAll('button');
// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick
for(let btn of btns)
    btn.addEventListener('click', handleClick);

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(event) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    // const cardNode =  ;
    const cardNode = event.target.parentElement;
    //const cardNodeChilds=cardNode.children;
    // 3. создайте литерал объекта со следующими свойствами:
    

    // 4. получаем текст на кнопке, которая внутри .product
    
    
    if (event.target.innerHTML=="Подробнее") { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        let card = {
                wrap: cardNode, // здесь элемент с классом .product
                productName: cardNode.children[0], // здесь .productName, который внутри .product
                img: cardNode.children[1], // здесь картинка внутри .product
                
                button: cardNode.children[2] // здесь button, который внутри .product
            };
        showMoreText(card);
    } else if (event.target.innerHTML=="Отмена") { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        let card = {
            wrap: cardNode, // здесь элемент с классом .product
            productName: cardNode.children[0], // здесь .productName, который внутри .product
            img: cardNode.children[1], // здесь картинка внутри .product
            
            button: cardNode.children[3] // здесь button, который внутри .product
        };
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    card.img.style.display='';
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.wrap.querySelector('div.desc').remove();
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.innerHTML='Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    //console.dir(card);
    // 6. картинке внутри .product ставим display: none
    card.img.style.display='none';
    // 6.1 сохраняем произвольный текст в переменную
    
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.img.insertAdjacentHTML('afterend','<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vero commodi labore, quidem veritatis atque, ducimus rem corporis voluptatibus vel ipsum eligendi, eos voluptatum perspciatis hic? Id maiores soluta tempora.</div>');
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.innerHTML='Отмена';
}
