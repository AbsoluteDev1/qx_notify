---
--- Notification très simple utilisable par export(exports.qx_notify:showNotification(msg, icon, notifLevel, duration))
--- Ou par triggerEvent('qx_notify:showNotification', source, msg, icon, notifLevel, duration)
--- Created by Absolute.
--- DateTime: 03/09/2022 14:19
---

Qx = {}
---@param msg string message
---@param leftContent string icon/img icon de fontawesome ou image
---@param notifLevel string success, info, warning, error
---@param timer number temps d'affichage
---@param isIcon boolean true si c'est une icone, false si c'est une image
Qx.notify = function(msg, leftContent, notifLevel, timer, isImage)
    SendNUIMessage({
        type = "showNotification",
        msg = msg,
        leftContent = leftContent,
        notifLevel = notifLevel,
        timer = timer,
        isImage = isImage
    })
end

AddEventHandler('qx_notify:showNotification', function(msg, leftContent, notifLevel, timer, isImage)
    Qx.notify(msg, leftContent, notifLevel, timer, isImage)
end)

RegisterNetEvent('qx_notify:showNotification',function(msg, leftContent, notifLevel, timer, isImage)
    Qx.notify(msg, leftContent, notifLevel, timer, isImage)
end)

exports('showNotification',  function(msg, icon, notifLevel, duration,isImage)
    Qx.notify(msg, icon, notifLevel, duration,isImage);
end)