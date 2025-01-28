const allFaqParent = document.querySelectorAll('.faq-parent')
const faqOpenKey = document.querySelectorAll('.faq-question');
const faqOpenAnswer = document.querySelectorAll('.faq-answer');

faqOpenKey.forEach((faqQuestion) => {
    faqQuestion.addEventListener('click', function(){
        allFaqParent.forEach((parentActiveRemove) => {
            parentActiveRemove.classList.remove('active');
        })
        this.parentElement.classList.toggle('active');
    })
})
