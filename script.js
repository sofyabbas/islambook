function resetCounter(element) {
    const parentDiv = element.closest('.counters');
    const counterElement = parentDiv.querySelector('.counter .countP');
    const maxCounterElement = parentDiv.querySelector('.zeker_repeat .max-counter');

    let maxCounterValue = parseInt(maxCounterElement.innerText) + 1;

    counterElement.innerText = "0" + maxCounterValue.toString();

}

const counters = document.querySelectorAll('.counters');

counters.forEach(counter => {
    const counterElement = counter.querySelector('.counter .countP');

    counter.addEventListener('click', function () {
        let counterValue = parseInt(counterElement.innerText);
        if (counterValue > 0) {
            counterValue--;
            counterElement.innerText ="0" +counterValue.toString();
        }
    });
});