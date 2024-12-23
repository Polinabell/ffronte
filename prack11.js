// 1. Найти заголовок H1 и изменить его текст
const h1 = document.querySelector('h1');
if (h1) {
    h1.textContent = "Добро пожаловать на наш сайт!";
}

// 2. Изменить цвет текста H2 на красный
const h2 = document.querySelector('h2');
if (h2) {
    h2.style.color = 'red';
}

// 3. Изменить текст первого абзаца
const firstParagraph = document.getElementById("p1");
if (firstParagraph) {
    firstParagraph.textContent = "Это новый текст абзаца.";
}

// 4. Скрыть встроенное видео
const iframe = document.querySelector('iframe');
if (iframe) {
    iframe.style.display = 'none';
}




// Создать объект formData
const formData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    comment: "",
    printData() {
        console.log(`Имя: ${this.name}`);
        console.log(`Электронная почта: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

// Функция для отправки формы
function submitForm(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получить данные формы
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const date = document.querySelector('#date').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    // Проверки
    if (!name || !email || !comment) {
        alert("Поля имя, электронная почта и комментарий обязательны для заполнения!");
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert("Телефон должен содержать только цифры!");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Введите корректный email!");
        return;
    }

    // Заполняем объект formData
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    // Выводим данные в консоль
    formData.printData();

    alert("Форма успешно отправлена!");
}

// Добавляем обработчик события на форму
document.querySelector('#form').addEventListener('submit', submitForm);
