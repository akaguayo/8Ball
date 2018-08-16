document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
  console.log('Device Ready ...');
}

//function shake(e) {
//  document.getElementById('result').innerHTML = fortunes();
//}

function shake(e) {
  var randNumber = Math.floor(Math.random() * 20) + 1;
  var r = "";
  switch(randNumber){
    case 1: r = "It is certain"; break;
    case 2: r = "It is decidedly so"; break;
    case 3: r = "Without a doubt"; break;
    case 4: r = "Yes definitely"; break;
    case 5: r = "You may rely on it"; break;
    case 6: r = "As I see it, yes"; break;
    case 7: r = "Most likely"; break;
    case 8: r = "Outlook good"; break;
    case 9: r = "Yes"; break;
    case 10: r = "Signs point to yes"; break;
    case 11: r = "Reply hazy try again"; break;
    case 12: r = "Ask again later"; break;
    case 13: r = "Better not tell you now"; break;
    case 14: r = "Cannot predict now"; break;
    case 15: r = "Concentrate and ask again"; break;
    case 16: r = "Don't count on it"; break;
    case 17: r = "My reply is no"; break;
    case 18: r = "My sources say no"; break;
    case 19: r = "Outlook not so good"; break;
    case 20: r = "Very doubtful"; break;
  }
  document.getElementById('result').innerHTML = r;

  switch(randNumber){
    case 1: document.getElementById("ball").src= "img/itIsCertain.png"; break;
    case 2: document.getElementById("ball").src= "img/ItIsDecidedlySo.png"; break;
    case 3: document.getElementById("ball").src= "img/withoutADoubt.png"; break;
    case 4: document.getElementById("ball").src= "img/yesDefinitely.png"; break;
    case 5: document.getElementById("ball").src= "img/youMayRelyOnIt.png"; break;
    case 6: document.getElementById("ball").src= "img/asIseeItYes.png"; break;
    case 7: document.getElementById("ball").src= "img/mostLikely.png"; break;
    case 8: document.getElementById("ball").src= "img/outlookGood.png"; break;
    case 9: document.getElementById("ball").src= "img/Yes.png"; break;
    case 10: document.getElementById("ball").src= "img/signsPointToYes.png"; break;
    case 11: document.getElementById("ball").src= "img/replyHazyTryAgain.png"; break;
    case 12: document.getElementById("ball").src= "img/askAgainLater.png"; break;
    case 13: document.getElementById("ball").src= "img/betterNotTellYouNow.png"; break;
    case 14: document.getElementById("ball").src= "img/cannotPredictNow.png"; break;
    case 15: document.getElementById("ball").src= "img/concentrateAndAskAgain.png"; break;
    case 16: document.getElementById("ball").src= "img/dontCountOnIt.png"; break;
    case 17: document.getElementById("ball").src= "img/myReplyIsNo.png"; break;
    case 18: document.getElementById("ball").src= "img/mySourcesSayNo.png"; break;
    case 19: document.getElementById("ball").src= "img/outlookNotSoGood.png"; break;
    case 20: document.getElementById("ball").src= "img/veryDoubtful.png"; break;
  }
}
