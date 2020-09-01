function alerteJournalisation()
{
  let object = {};

  object['text'] = "C'est l'heure de la journalisation :eggplant: :peach: ";

  let json = JSON.stringify(object);

  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      console.log("L'envoi du message a bien été envoyé.");
    } else if (this.readyState == 4) {
      console.log("L'envoi a échoué.");
  } else{
    console.log("readyState n'est pas égal à 4.")
    }
  }

  req.open("POST", "https://hooks.slack.com/services/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");
  req.send(json);

  return


}

alerteJournalisation();

/*function compteur()
{
 const limit = 10;

 let valeur = document.querySelector('textarea').value;
 console.log(valeur);
 document.querySelector('p').innerHTML= limit - valeur.length;
if (valeur.length > limit){
  document.querySelector('button').disabled = true;
}else{
  document.querySelector('button').disabled = false;
}
}*/
