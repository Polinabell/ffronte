// Маска для номера телефона
var phoneElement = document.getElementById('phone');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
};
var phoneMask = new IMask(phoneElement, maskOptions);

// Обработчик модального окна
var modal = document.getElementById("modal");
var openModalButtons = document.querySelectorAll('.open-modal');
var closeModal = document.querySelector(".close");

// Открытие модального окна
openModalButtons.forEach(button => {
    button.onclick = function () {
        var title = button.getAttribute("data-title"); // Получаем название из data-title
        
        // Добавляем название в форму
        const modalTitle = modal.querySelector("h3"); // Найти заголовок в модалке
        modalTitle.textContent = `Форма заказа: ${title}`; // Устанавливаем текст

        // Логируем в консоль
        console.log(`Открыта форма для: ${title}`);
        modal.style.display = "flex";
    };
});

// Закрытие модального окна
closeModal.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Обработчик отправки формы
function handleSubmit(event) {
    event.preventDefault(); // Останавливаем стандартное поведение

    // Получаем данные формы
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Логируем данные в консоль
    console.log("Данные формы:", data);

    // Сбрасываем форму и закрываем модальное окно
    event.target.reset();
    modal.style.display = "none";
}



// кнопка наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
}