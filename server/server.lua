--[[
--- Created: 11/09/2022 09:00
--- Author: Absolute
--]]

Qx = {}

---@param msg string message
---@param leftContent string icon/img icon de fontawesome ou image => icon: fa fa-icone, image: url de l'image
---@param notifLevel string success, info, warning, error
---@param timer number temps d'affichage
---@param isIcon boolean true si c'est une icone, false si c'est une image
Qx.notify = function(source,msg, leftContent, notifLevel, timer, isImage)
    TriggerClientEvent("qx_notify:showNotification", source, msg, leftContent, notifLevel, timer, isImage)
end