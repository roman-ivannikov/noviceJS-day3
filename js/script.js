window.addEventListener('DOMContentLoaded', function() {
	// Получаем элементы страницы для работы
	let products = document.querySelectorAll('.product'),
		buttons  = document.querySelectorAll('button'),
		open     = document.getElementsByClassName('open')[0];

	// Функция для создания корзины
	function createCard() {
		// Элементы корзины
		let cart    = document.createElement('div'),    // Внешний блок
			field   = document.createElement('div'),    // Блок товара
			heading = document.createElement('h2'),     // Заголовок товара
			close   = document.createElement('button'); // Кнопка закрытия корзины

		// Назначение классов созданным элементам
		cart.classList.add('cart');
		field.classList.add('cart-field');
		close.classList.add('close');

		// Наполнение созданные элементы содержимым
		heading.textContent = 'В нашей корзине:';
		close.textContent   = 'Закрыть';

		// Добавление элементов в конец документа
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close)
	};

	createCard();

	let field = document.querySelector('.cart-field'),
		cart  = document.querySelector('.cart'),
		close = document.querySelector('.close');

	for (let i = 0; i < buttons.length; i++) {
		// Назначение событие для каждой кнопки в карточке товара
		buttons[i].addEventListener('click', function() {
			// Создаем копию карточки товара
			let item = products[i].cloneNode(true),
				btn  = item.querySelector('button');
			// Удалем кнопку
			btn.remove();
			// Добавляем товар в корзину
			field.appendChild(item);
			// Удаляем карточку товара
			products[i].remove()
		})
	};

	// Функция открытия корзины
	function openCart() {
		cart.style.display = 'block'
	};

	// Функция закрытия корзины
	function closeCart() {
		cart.style.display = 'none'
	};

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);
});