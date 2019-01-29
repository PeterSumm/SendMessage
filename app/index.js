import document from "document";
import * as messaging from "messaging";
import { vibration } from "haptics";

console.log(`Setting up...`);
let background1 = document.getElementById("clickbg1");
let background2 = document.getElementById("clickbg2");
let background3 = document.getElementById("clickbg3");
let Label1 = document.getElementById("Label1");
let Label2 = document.getElementById("Label2");
let Label3 = document.getElementById("Label3");
let responseDisplay = document.getElementById("responseDisplay");

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "Label1" && evt.data.newValue)
    Label1.text = JSON.parse(evt.data.newValue).name;
  if (evt.data.key === "Label2" && evt.data.newValue)
    Label2.text = JSON.parse(evt.data.newValue).name;
  if (evt.data.key === "Label3" && evt.data.newValue)
    Label3.text = JSON.parse(evt.data.newValue).name;
  if (evt.data.key === "Response" && evt.data.value) {
    console.log("Response = " + evt.data.value)
    responseDisplay.style.display = "inline"
    responseDisplay.text = evt.data.value;
  }
  if (Label1.text == "" && Label2.text == "" && Label3.text == "") {
    Label1.text = "            Please"
    Label2.text = "               set"
    Label3.text = "    configuration."
  }
};


  // Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};

background1.onclick = function(evt) {
  sendVal({key:'msg', value:'1'})
  console.log("Click Label 1");
  vibration.start("confirmation");
}

background2.onclick = function(evt) {
  sendVal({key:'msg', value:'2'})
  console.log("Click Label 2");
  vibration.start("confirmation");
}

background3.onclick = function(evt) {
  sendVal({key:'msg', value:'3'})
  console.log("Click Label 3");
  vibration.start("confirmation");
}

responseDisplay.onclick = function(evt) {
  responseDisplay.style.display = "none"
  console.log("Click Response");
  vibration.start("confirmation");
}

Label1.onclick = background1.onclick
Label2.onclick = background2.onclick
Label3.onclick = background3.onclick

// Send data to device using Messaging API
function sendVal(data) {
  console.log(JSON.stringify(data))
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }  else {
    responseDisplay.style.display = "inline"
    responseDisplay.text = "Phone?";
  }
}

