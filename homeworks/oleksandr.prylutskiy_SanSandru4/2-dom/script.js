const chat = document.querySelector('.messages');
const input = document.querySelector('.input-message');
const btnSub = document.querySelector('.btn-send');
let message = '';

btnSub.addEventListener('click', () => {
    chatMessage();
    chatScroll(chat);
});

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        chatMessage();
        chatScroll(chat);
    }
});

function chatMessage() {
    message = input.value;
    chat.innerHTML += `<div class="message-box">${message}</div>`;
    input.value = '';
}

function chatScroll (inValue) {
    const scr = inValue.scrollHeight;
    inValue.scrollTop = scr;
}