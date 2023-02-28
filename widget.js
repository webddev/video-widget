const widgetElement = document.querySelector('.widget');
const widgetBody = widgetElement.querySelector('.widget__body');
const widgetVideo = widgetElement.querySelector('.widget-video');
const closeVideoBtn = document.querySelector('.close-video-btn');
const FormBlock = widgetElement.querySelector('.widget__form-block');
const openFormBtn = widgetElement.querySelector('.open-form-btn');
const closeFormBtn = widgetElement.querySelector('.close-widget-form');

function openWidgetVideo() {
    if (!widgetBody.classList.contains('widget__body_active')) {
        widgetBody.classList.add('widget__body_active');
        widgetElement.classList.remove('hover-translate');
        openFormBtn.classList.add('open-form-btn_active');
        setTimeout(() => {
            widgetVideo.play();
            widgetVideo.muted = false;
            widgetVideo.volume = 0.7;
        }, 30);
    }
}

function closeWidgetVideo(event) {
    if (widgetBody.classList.contains('widget__body_active')) {
        widgetBody.classList.remove('widget__body_active');
        widgetElement.classList.add('hover-translate');
        openFormBtn.classList.remove('open-form-btn_active');
        widgetVideo.muted = true;
    }
    else widgetElement.remove();
    event.stopPropagation();
}

function openWidgetForm() {
    if (!widgetVideo.classList.contains('hidden')) {
        widgetVideo.classList.add('hidden');
        widgetVideo.pause();
        closeVideoBtn.style.display = 'none';
        FormBlock.classList.add('widget__form-block_active');
        openFormBtn.classList.remove('open-form-btn_active');
    }
}
function closeWidgetForm() {
    if (widgetVideo.classList.contains('hidden')) {
        widgetVideo.classList.remove('hidden');
        widgetVideo.play();
        closeVideoBtn.style.display = 'inline-block';
        FormBlock.classList.remove('widget__form-block_active');
        openFormBtn.classList.add('open-form-btn_active');
    }
}

function widgetInit() {
    widgetElement.classList.add('widget_active');
    widgetElement.addEventListener('click', openWidgetVideo);
    closeVideoBtn.addEventListener('click', (event) => {
        closeWidgetVideo(event);
    });
    openFormBtn.addEventListener('click', openWidgetForm);
    closeFormBtn.addEventListener('click', closeWidgetForm);
}

window.addEventListener('DOMContentLoaded', () => {
    widgetInit();
});
