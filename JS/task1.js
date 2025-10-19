function displayLabExecutorInfo() {
    const executor = {
        fullName: "Ваше Прізвище Ім'я", // Замініть на своє ПІБ
        group: "КИ-31", // Замініть на назву вашої групи
        labNumber: 2,
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