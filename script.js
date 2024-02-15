// script.js

let timesNoClicked = 0;
let timesYesClicked = 0;


const pleas = ["Please don't click No again :)",
  "Why did you click No again? You were supposed to click Yes...",
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
  "Boo hoo! boo HOOO! BOOOOO HOOOO! (Are they paying attention yet? Wait what? They don't care at all?)",
];

const sadMessages = [
  "Guess 'No' is becoming my new normal. Thanks for nothing.",
  "Another 'No'... surprise, surprise. Guess I'll just be alone again.",
  "Should've known better than to hope for a 'Yes'. Another 'No' for the collection.",
  "Why bother asking? 'No' is the only answer I seem to get.",
  "Cool, another rejection. Guess I'll just add it to the pile.",
  "Honestly, I'm getting used to this. 'No' is the only response I ever get.",
  "Great, another rejection. Feels like I'm collecting them at this point.",
  "Getting real tired of this game. 'No' seems to be the only card in your deck.",
  "Not even sure why I bother anymore. 'No' is the only answer I ever get.",
  "Honestly, I'm starting to forget what a 'Yes' feels like.",
  "Looks like 'No' is my Valentine again this year. What a surprise.",
  "Another day, another rejection. Story of my life.",
  "Guess I'll just add this 'No' to my collection of disappointments.",
  "Why do I even bother asking anymore? 'No' is like a broken record.",
  "Was really hoping for a change this time. Silly me.",
  "The more I ask, the more 'No's I collect. Quite the hobby.",
  "Starting to think 'No' is the universe's way of telling me something.",
  "Maybe I should start a 'No' support group. I'd have plenty of members.",
  "Not sure what's more predictable: the sunrise or another 'No' from you.",
  "Well, well, well, another 'No' in my inbox. Starting to think I should frame them.",
  "If 'No' was a flavor, I'd have a lifetime supply. Anyone want to trade for 'Yes'?",
  "If I got a dollar for every 'No' I received, I could probably afford a therapist.",
  "Starting to think 'No' is the new 'Yes'. I'm just ahead of the trend.",
  "Considering hiring a 'No' therapist. Do you think they offer group rates?",
  "Thinking of creating a 'No' calendar. Just to keep track of all the times I've been rejected."
]

const celebrations = ["Wait, you actually clicked Yes?",
  "I never expected you to do that...did you really mean to?",
  "So...what are we gonna do now? Go off galavantin'?",
  "Uh... so you're actually my Valentine now? Um...",
  "Well, I should at least show my thanks. The link below will show you a personalized love letter. I love you!!!!"];
function isOnEdge(x, y, offsetx, offsety) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  // on x edge or y edge (and I think or both) it will return true
  return x <= offsetx || x + offsetx >= screenWidth - offsetx || y <= offsety || y + offsety >= screenHeight - offsety;
}

document.addEventListener("DOMContentLoaded", function () {
  const linkButton = document.getElementById('linkButton');
  const video = document.getElementById('video');
  linkButton.hidden = true;
  video.hidden = true;
});

document.getElementById('yesButton').addEventListener('click', function () {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const plea = document.getElementById('plea');
  const otherText = document.getElementById('otherText');
  const linkButton = document.getElementById('linkButton');
  timesYesClicked++;
  otherText.hidden = true;
  noButton.hidden = true;
  console.log("gfdgs");
  plea.textContent = celebrations[Math.min(timesYesClicked, celebrations.length) - 1];
  if (timesYesClicked >= celebrations.length) {
    yesButton.hidden = true;
    linkButton.hidden = false;
  }
});

document.getElementById('linkButton').addEventListener('click', function(){
  const linkButton = document.getElementById('linkButton');
  const video = document.getElementById('video');
  linkButton.hidden = true;
  video.hidden = false;
});

document.getElementById('noButton').addEventListener('click', function () {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const plea = document.getElementById('plea');
  const otherText = document.getElementById('otherText');
  const yesButtonSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
  let noButtonSize = window.getComputedStyle(noButton).getPropertyValue('font-size');

  timesNoClicked++;
  otherText.hidden = true;

  // Randomize button positions after the 12th message
  if (timesNoClicked >= 11) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    var randomX = Math.random() * screenWidth;
    var randomY = Math.random() * screenHeight;
    while (!isOnEdge(randomX, randomY, noButton.width, noButton.offsetHeight)) {
      randomX = Math.random() * screenWidth;
      randomY = Math.random() * screenHeight;
    }
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  }
  if (timesNoClicked > pleas.length - 1) {
    plea.textContent = sadMessages[Math.round((Math.random() * sadMessages.length - 1))];
  } else {
    plea.textContent = pleas[timesNoClicked];
    // Increase the size of the Yes button
    yesButton.style.fontSize = `${parseFloat(yesButtonSize) + 10}px`;

    // Decrease the size of the No button
    noButtonSize = parseFloat(noButtonSize) - 10;
    noButton.style.fontSize = `${Math.max(noButtonSize, 1)}px`;
  }
});