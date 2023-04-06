
function getModalFeedback() {
  document.getElementById("modal-feedback__btn").addEventListener("click", function() {
    document.getElementById("modal-feedback").classList.add("show")
})

document.getElementById("feedback-close-btn").addEventListener("click", function() {
    document.getElementById("modal-feedback").classList.remove("show")
    console.log('close')
})

document.querySelector("#modal-feedback .feedback__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-feedback").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('show');
});
}

export default getModalFeedback();
