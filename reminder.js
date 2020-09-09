function alerteJournalisation()
{
  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const env = require('./process.env');

  let object = {};
  
  object['text'] = "C'est l'heure de la journalisation :bell:";

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

function checkTime() 
{
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if(day == 4 || day == 1 || day == 2 || day == 3 || day == 5)
  {
    if(hour == 17 && minute == 20)
    {
      alerteJournalisation();
    }
  }
  else
  {
    console.log("zut");
  }
}

//while(true) {
  checkTime();
//}

