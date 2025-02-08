const dummy = document.getElementById("dummy");
const healthDisplay = document.querySelector(".arena__background_hp");
const currentHealthBar = document.getElementById("current-health");
const logList = document.getElementById("log-list");
const damageLog = document.getElementById("damage-log");
const upDmg = document.querySelector(".btn__blocks_one"); // Кнопка для Math.ceil
const downDmg = document.querySelector(".btn__blocks_two"); // Кнопка для Math.floor


let dummyHealth = 1000;
let totalDamage = 0; // Загальний урон
let useCeil = false; // Початковий метод 

// Створення елемента для сумарного урону
const totalDamageDiv = document.createElement("div");
totalDamageDiv.id = "total-damage";
totalDamageDiv.textContent = "Total damage: 0";
damageLog.append(totalDamageDiv);

// Обробка кліків на манекені
dummy.addEventListener("click", (event) => {
    event.preventDefault();

    // Генерація випадкового урону з обраним методом округлення
    const damage = useCeil
        ? Math.ceil(Math.random() * (150 - 100 + 1) / 10) * 10 + 100
        : Math.floor(Math.random() * (150 - 100 + 1)) + 100;

    // Оновлення здоров'я манекена
    dummyHealth = Math.max(dummyHealth - damage, 0);
    healthDisplay.textContent = `${dummyHealth}/1000`;
    currentHealthBar.style.width = `${(dummyHealth / 1000) * 100}%`;

    // Додавання до сумарного урону
    totalDamage += damage;
    totalDamageDiv.textContent = `Total damage: ${totalDamage}`;

    // Лог урону
    const logItem = document.createElement("li");
    logItem.textContent = `${damage}`;
    logList.prepend(logItem);

    // Перевірка на знищення
    if (dummyHealth === 0) {
        alert("Танк знищено!");
    }
});

// Math.ceil
upDmg.addEventListener("click", () => {
    useCeil = true 
    & (upDmg.textContent = "Підкрутка Включена!!!")
    & (downDmg.textContent = "Відкрутка");
/*     alert("Підкрутка"); */
    console.log("+");
});


// Math.floor
downDmg.addEventListener("click", () => {
    useCeil = false 
    & (downDmg.textContent = "Відкрутка Включена!!!")
    & (upDmg.textContent = "Підкрутка"); 
/*     alert("Відкрутка"); */
    console.log("-");
});

console.log(`По замовчуванні: Відкрутка ${useCeil}`);