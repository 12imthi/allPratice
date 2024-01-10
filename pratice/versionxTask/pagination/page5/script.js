// selection

const startBtn  = document.querySelector('#startBtn');
const endBtn  = document.querySelector('#endBtn');
const prevNext  = document.querySelectorAll('#prevNext');
const numbers  = document.querySelectorAll('.link');

// console.log(startBtn,endBtn,prevNext,number);

let currentStep = 0;

const updateBtn = () => {
    if(currentStep === 4) {
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    }
    else if(currentStep === 0 ) {
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    }
    else {
        endBtn.disabled = false;
        prevNext[1].disabled = false; 
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
}

console.log(numbers);

numbers.forEach((number,numIndex) => {
    number.addEventListener("click", () => {
        currentStep = numIndex;
        console.log(currentStep);

        document.querySelector('.active').classList.remove('active');
        number.classList.add('active')
        updateBtn()
    });
});

prevNext.forEach( button => {

    button.addEventListener('click', (e) =>{
        currentStep += e.target === 'next' ? 1 : 1 ;
        console.log(currentStep);
        numbers.forEach((number,numIndex) => {
            console.log( numIndex, currentStep);
            number.classList.toggle('active',numIndex === currentStep)
            updateBtn()
        })
    })
})

startBtn.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');

    numbers[0].classList.add('active');

    currentStep = 0;
    updateBtn();
    startBtn.disabled = true;
        prevNext[0].disabled = true;
})

endBtn.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');

    numbers[4].classList.add('active');

    currentStep = 4;
    updateBtn();
    endBtn.disabled = true;
        prevNext[1].disabled = true;
})




// let age = 18 ;

// const stat = age >= 18 ? "adult" : "minor";


// console.log(stat);

let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    console.log(this);
});

btn.addEventListener('click', () => {
    console.log(this);
})