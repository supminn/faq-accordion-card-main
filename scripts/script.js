let questions = document.querySelectorAll(".faq-question");
let answer = document.querySelectorAll(".faq-answer");
let arrow = document.querySelectorAll(".img-arrow");

for(let i=0;i<questions.length;i++){
    questions[i].addEventListener('click',() => {
        questions[i].classList.toggle('faq-question-active');
        answer[i].classList.toggle('hidden');
        arrow[i].classList.toggle('img-arrow-active');
    })
}