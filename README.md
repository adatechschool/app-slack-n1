# app-slack-n1
Installer Node.js sur la machine
Initialiser un module (package.json) : npm init
Installer la bibliothèque XMLHttpRequest : npm install xmlhttprequest

Dans cette version du projet, le bot va servir à automatiser une action qui est faite régulièrement par des membres actuel·les de notre espace Slack.
Il pourra par exemple :

faire un rappel tous les jours à 17:20 pour indiquer que c’est l’heure de la journalisation - et rappeler ce qu’apporte le fait de tenir un journal
rappeler régulièrement pendant les horaires de la journée de faire une pause, boire de l’eau et s’étirer
Nous allons pour cela utiliser les « webhooks » proposés par Slack, afin de pouvoir poster des messages sur le channel Slack de notre choix sans avoir besoin de gérer la notion d’authentification.

Etapes possibles pour se lancer :
1 - Comprendre les webhooks Slack
En utilisant la documentation donnée en ressource et en faisant des recherches sur Internet, essayez de comprendre comment fonctionnent les webhooks par rapport à une API.

2 - Tester la publication sur Slack
En utilisant des outils comme curl ou Postman, essayez d’envoyer une publication vers le channel Slack de test mentionné dans les ressources. Comment pouvez-vous mettre en forme votre publication, y ajouter des emojis, des images ?

3 - Ecrire un programme
Il s’agit désormais d’écrire du code qui reproduise l’action que vous avez fait manuellement à l’étape (2). Quelles sont les contraintes que vous avez dans le choix du langage et de l’environnement ? Comment ce code devra-t-il être exécuté ?

4 - Automatiser le programme
Votre programme désormais écrit et fonctionnel, il faudra que celui-ci puisse se lancer à l’intervalle et dans la tranche horaire que vous avez choisis : selon le langage et l’environnement que vous avez choisi, cherchez sur internet comment vous pouvez automatiser cette tâche pour qu’elle se lance automatiquement.
