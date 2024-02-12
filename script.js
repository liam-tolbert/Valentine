// script.js

let timesClicked = 0;
const pleas = ["Please don't say no :)",
  "Why did you click No? You were supposed to click Yes...",
  "If you press Yes, I'll be as happy as a kid in a candy store. Clicking No would be like taking candy from that kid... Please don't take my candy.",
  "Come onnnnnn.... stop clicking no already!",
  "Come on...click yes for me! Don't you love me?",
  "Please?",
  "Pleease?",
  "Pleeease?",
  "Pleeeease?",
  "Pleeeeease? :( *puppy dog eyes*",
  "That thing is so small you couldn't possibly click it anymore! Look! That Yes button is so large! Go ahead and click it for me!!",
  "Okay...fine! I hid it. You can't find it anymore >:)",
  "How did you find that?!",
  "How about now?",
  "Hmph. I've hidden it too well this time.",
  "Hah! I've deleted the No button entirely! Now you have to click Yes!",
  "Ok, THIS time it's deleted. For sure. Totally not there anymore. Yup.",
  "You little... fine, third time's the charms I guess.",
  "Oh, woe is me! If only I could be loved by the person who is repeatedly clicking the No button instead of accepting my love! Oh! Woe is me, woe is me...",
  "Boo hoo hoo...",
  "Boo hoo! boo HOOO! BOOOOO HOOOO! (Are they paying attention yet? Wait what? They don't care at all?)"];

function isOnEdge(x, y, offsetx, offsety){
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  console.log("Hello");
  // on x edge or y edge (and I think or both) it will return true
  return x <= offsetx || x + offsetx >= screenWidth - offsetx || y <= offsety || y + offsety >= screenHeight - offsety;
}

document.getElementById('noButton').addEventListener('click', function () {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const plea = document.getElementById('plea');
  const yesButtonSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
  let noButtonSize = window.getComputedStyle(noButton).getPropertyValue('font-size');
  let noButtonPadding = window.getComputedStyle(noButton).getPropertyValue('padding');

  timesClicked++;

  // Increase the size of the Yes button
  yesButton.style.fontSize = `${parseFloat(yesButtonSize) + 5}px`;

  // Decrease the size of the No button
  noButtonSize = parseFloat(noButtonSize) - 5;
  noButton.style.fontSize = `${Math.max(noButtonSize, 1)}px`;

  // Change what the message says
  plea.textContent = pleas[Math.min(timesClicked, pleas.length) - 1];

  // Randomize button positions after the 11th message
  if (timesClicked >= 11) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    var randomX = Math.random() * screenWidth;
    var randomY = Math.random() * screenHeight;
    while (!isOnEdge(randomX, randomY, noButton.wid, noButton.offsetHeight)){
      console.log("dsgsdlk");
      randomX = Math.random() * screenWidth;
      randomY = Math.random() * screenHeight;
    }
    console.log("Bye");
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  }

});

