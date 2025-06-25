let socket;
export async function main() {
  socket = await io();

  socket.on("connect", () => {
    console.log(socket.id);
    socket.emit("messageToServer", `Hello`);
    socket.on("messageFromServer", function (msg) {
      console.log(msg);
    });
    socket.on("LogIn", function (username) {
      localStorage.setItem("currentUsername", username);
      window.location.href = "./chat.html";

      socket.emit("Get-Messages");
    });
    socket.on("Incorrect-Password", function (username) {
      document.getElementById("Dynamic-Text-Register").textContent = `User with name "${username}" already exists, but password is incorrect. Please try another password.`;
    });
    socket.on("Print-Messages", function (messages) {
      let text = document.getElementById("Dynamic-Text")

      for (let msg of messages) {
        const item = document.createElement('li');
        let string = `${msg.Username} (${msg.Time[0]}.${msg.Time[1]}): ${msg.Message}`
        item.textContent = string;
        text.appendChild(item);
        console.log(string);
      }
    });
    socket.on("Get-Message", (username, message, time) => {
      /* let message = document.getElementById("Dynamic-Text");

      while (message.firstChild) {
        message.removeChild(message.firstChild);
      } */

      /* let text = document.getElementById("Dynamic-Text")

      for (let msg of messages) {
        const item = document.createElement('li');
        let string = `${msg.Username} (${msg.Time[0]}.${msg.Time[1]}): ${msg.Message}`
        item.textContent = string;
        text.appendChild(item);
        console.log(string);
      } */

      let messages = document.getElementById("Dynamic-Text")
      const item = document.createElement('li');
      let string = `${username} (${time[0]}.${time[1]}): ${message}`
      item.textContent = string;
      messages.appendChild(item);
      console.log(`Got message from another client`)
    });
    socket.on("Clear-Chat", function () {
      let message = document.getElementById("Dynamic-Text");

      while (message.firstChild) {
        message.removeChild(message.firstChild);
      }
    });

    let messageInput = document.getElementById("message");

    if (messageInput != null) {
      messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          document.getElementById("message button").click();
        }
      })
    };
  });

  socket.on("disconnect", () => {
    console.log(socket.id);
  });
}

export function clientAddNewUser(username, password) {
  socket.emit("messageToServer", "Try to create new user");
  socket.emit("Register-New-User", username, password);
}

export function requestMessages() {
  socket.emit("Get-Messages");
}

export function clientSendMessage(username, message, time) {
  socket.emit("Send-A-Message", username, message, time);

  /* let messages = document.getElementById("Dynamic-Text")
  const item = document.createElement('li');
  let string = `${username} (${time[0]}.${time[1]}): ${message}`
  item.textContent = string;
  messages.appendChild(item); */
}

export function clientSaveHistory() {
  socket.emit("Save-History");
  console.log("Trying to save the history");
}

export function clientClearHistory() {
  socket.emit("Clear-History");
  console.log("Trying to clear the history");
}
