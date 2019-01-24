import * as messaging from "messaging";
import { settingsStorage } from "settings";

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  restoreSettings();
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("Companion Socket Closed");
};

// A user changes settings
settingsStorage.onchange = evt => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
};

// Restore any previously saved settings and send to the device
function restoreSettings() {
  sendVal({key:'Label1', newValue:settingsStorage.getItem('Label1')})
  sendVal({key:'Label2', newValue:settingsStorage.getItem('Label2')})
  sendVal({key:'Label3', newValue:settingsStorage.getItem('Label3')})
}

// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`Phone received: ${JSON.stringify(evt.data)}`);
  let msg = evt.data.value
  sendVal({key:'Response', value:'Sending ' + msg + "..."})
  let label = ""
  try {label = JSON.parse(settingsStorage.getItem('Label'+msg)).name} catch(err) {} 
  let url = ""
  try {url = JSON.parse(settingsStorage.getItem('URL'+msg)).name} catch(err) {} 
  url = url.replace(/~Lbl/g,encodeURIComponent(label));
  let data = ""
  try {data = JSON.parse(settingsStorage.getItem('Data'+msg)).name} catch(err) {}
  let headers = ""
  try {headers = JSON.parse(settingsStorage.getItem('Headers'+msg)).name} catch(err) {}
  console.log("URL = "+ url)
  console.log("Data = " + data)
  console.log("Headers = " + headers)
  if (data == "")
    if (headers == "")
      fetch(url, {method: "GET"}) 
        .then(function(response) {sendVal({key:'Response', value:response.statusText})})
    else 
      fetch(url, {method: "GET", headers: JSON.parse(headers)})
        .then(function(response) {sendVal({key:'Response', value:response.statusText})})
  else {
    data = data.replace(/~Lbl/g,label);
    if (headers == "") 
      fetch(url, {method: "POST", body: data}) 
        .then(function(response) {sendVal({key:'Response', value:response.statusText})})
    else 
      fetch(url, {method: "POST", headers: JSON.parse(headers), body: data})
        .then(function(response) {sendVal({key:'Response', value:response.statusText})})
  }
};


