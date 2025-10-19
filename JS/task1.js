function displayLabExecutorInfo() {
    const executor = {
        fullName: "Ваше прізвище ім'я", // Замініть на своє ПІБ
        group: "4ОК", // Замініть на назву вашої групи
        labNumber: 8,
        topic: "Робота з об'єктною моделлю документа (DOM)"
    };

    console.log("=========================================");
    console.log("===== ІНФОРМАЦІЯ ПРО ВИКОНАВЦЯ ЛР =====");
    console.log("=========================================");
    console.log(`Виконавець: ${executor.fullName}`);
    console.log(`Група: ${executor.group}`);
    console.log(`Лабораторна робота №: ${executor.labNumber}`);
    console.log(`Тема: ${executor.topic}`);
    console.log("=========================================");
}

// Виклик функції для відображення інформації
displayLabExecutorInfo();
