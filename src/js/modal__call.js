function getModalCall() {
  document.getElementById("modal-call__btn").addEventListener("click", function() {
    document.getElementById("modal-call").classList.add("show")
})

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("modal-call").classList.remove("show")
})

document.querySelector("#modal-call .call__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-call").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('show');
});
}
export default getModalCall();
