fx_version 'cerulean' --https

game 'gta5'

version '4.0.0'

description 'Qx notify'

lua54 'yes'

ui_page 'client/html/index.html'

files{
    'client/html/**',
}

client_scripts {
    'client/client.lua',
}

server_scripts{
    'server/server.lua',
}
