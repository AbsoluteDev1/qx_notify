const notifyCenter = $(".notify");

/**
 * Afficher une notification avec une icon
 * @param icon
 * @param message
 * @param notifLevel
 * @param timer
 */
function showNotificationWithIcon(icon,message,notifLevel,timer){
    createNotification(`<i class="${icon}"></i>`,message,notifLevel,timer)
}

function showNotificationWithImage(image,message,notifLevel,timer){
    createNotification(`<img src="${image}">`,message,notifLevel,timer)
}

function createNotification(html,message,notifLevel,timer){
    // Créer une notification
    const notify = $(`<div class="notify-item notify-${notifLevel}">
            <div class="notify-icon">
                ${html}
            </div>
            <div class="notify-message">
                ${message}
                            
            </div>
            <div class="notify-progress">
                <div class="notify-progress-inner active"></div>
            </div>
            <div class="notify-alert-level">
            </div>

       </div>`);
    notify.find('.notify-progress-inner').css("transition",`${timer}ms linear`);
    notifyCenter.append(notify);
    notify.removeClass("active");
    setTimeout(()=>{
        notify.find('.notify-progress-inner').removeClass("active");
        notify.addClass('active');
    },1);
    setTimeout(()=>{
        notify.removeClass('active');
        setTimeout(()=>{
            notify.remove();
        },500)
    },timer + 100);
}


showNotificationWithIcon("fas fa-check","Notification avec une icon","success",50000);
showNotificationWithImage("https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs","Notification avec une icon","warning",50000);
showNotificationWithIcon("fas fa-check","Notification avec une icon","error",50000);
showNotificationWithIcon("fas fa-check","Notification avec une icon","info",50000);
// On ajoute un évènement pour afficher une notification
window.addEventListener('message', (event) => {
    const data = event.data;
    switch(data.type){
        case "showNotification":
            if(!data.isImage){
                showNotificationWithImage(data.leftContent,data.msg,data.notifLevel,data.time);
            }else if(!data.isImage){
                showNotificationWithIcon(data.leftContent,data.msg,data.notifLevel,data.timer);
            }
            break;
            //TODO Ajouter un cas pour afficher une notification avec une image
    }
});