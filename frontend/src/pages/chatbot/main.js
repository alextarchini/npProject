const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Sorry, I did not understand that.";

  if (message.includes("how are you")) {
    speech.text = "I am fine, thanks. How are you?";
  }

  if (message.includes("thank you")) {
    speech.text = "You are very welcome! How can I help you today?";
  }

  if (message.includes("fine")) {
    speech.text = "Nice to hear that. How can I assist you today?";
  }

  if (message.includes("weather")) {
    speech.text = "Of course. Where are you currently?";
  }

  if (message.includes("Brussels")) {
    speech.text = "It is super freezing and pouring.";
  }

  if (message.includes("Rocky")) {
    speech.text = "Rocky is super handsome!";
  }

  if (message.includes("Alex")) {
    speech.text = "Alex is amazing!";
  }

  if (message.includes("date")) {
    speech.text = "Today is Wednesday, 4 December 2019";
  }

  if (message.includes("Mimi")) {
    speech.text =
      "Mimi is absolutely gorgeous! I love her absolutely, always and forever. Don't you like her?!";
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  var element = document.getElementById("container");
  element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log("Voice activated");
};

recorder.onresult = event => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener("click", () => {
  recorder.start();
});
