function alerteJournalisation()
{
  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const env = require('./process.env');

  let object = {};
  
  object['text'] = " :moon: ";

  let json = JSON.stringify(object);

  var req = new XMLHttpRequest();
  

  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      console.log("L'envoi du message a bien été envoyé.");
    } else if (this.readyState == 4) {
      console.log("L'envoi a échoué.");
  } else{
    console.log("readyState est égal à : " + this.readyState)
    }
  }

  req.open("POST", URL); // mettre la bonne url et ça marchera
  req.send(json);

  return


}

alerteJournalisation();

