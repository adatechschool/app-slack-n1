# app-slack-n1
Installer Node.js sur la machine
installer npm dotenv : npm install dotenv
Initialiser un module (package.json) : npm init
Installer la bibliothèque XMLHttpRequest : npm install xmlhttprequest
(rajouter les fichier généré par cette manière dans le .gitignore pour aléger le dépot) 

pour exécuter le code avec node : $node fichier.js

mettre process.env au lieu de .env et mettre au format json les informations dans ce fichier.

1) Installer pm2 sur la machine : npm install pm2@latest -g .
2) Démarrer pm2 en utilisant la commande "pm2 start <nom du fichier>".
 - start : lance pm2 qui lance le fichier.js (reminder.js) en boucle
3) Arreter pm2 en utilisant la commande "pm2 stop".

- `pm2 start reminder.js --restart-delay=60000` : 