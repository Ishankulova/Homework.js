let title = prompt("Как тебя зовут?").toLowerCase()

if (title.charAt(0)=== 'a') {
    console.log( `Проходи`);
}else { 
    console.log( `Отвали `);
}

let second_title = prompt("Введите число!")

if (second_title % 2 === 0) {
    console.log('Четное');
}else {
    console.log('Нечетное');
}

let third_title = prompt("Имя сказал/а быстро")

if (third_title.length % 2 ===0) {
    console.log(`Проходи`);
}else {
    console.log(`Отвали ублюдок `);
}