// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

function createSum() {
    let total = 0;

    function sum(num) {
        total += num;
        return total;
    }

    return sum;
}

const sum = createSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));