const http = require("http");
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const MongoClient = require("mongodb").MongoClient;
const { Server } = require("socket.io");
const fs = require("fs").promises;

const app = express();
const port = 8002;

function myMiddleware(req, res, next) {
    console.log(`Request for: ${req.url}`);
    next()
}

let url, client, connection, databaseName, database, collectionUsers, collectionMessages;

async function initDB() {
    try {
        url = "mongodb://localhost:27017";
        client = new MongoClient(url);
        connection = await client.connect();
        databaseName = "UsersDB";
        database = connection.db(databaseName);
        collectionUsers = database.collection("Users");
        collectionMessages = database.collection("Messages");
    } catch (error) {
        console.error(error);
    }
}

async function clearDB() {
    const result = await collectionMessages.deleteMany({});
    console.log(result);
}

async function addNewUser(username, password) {
    let inDB = await collectionUsers.find({ Username: username }).toArray();
    if (inDB.length == 0 || inDB[0].Password == password) {
        const result = await collectionUsers.insertOne({ Username: username, Password: password });
        console.log(result);
        io.emit("LogIn", username);
    }
    else {
        io.emit("Incorrect-Password", username)
    }
}

async function sendMessage(username, message, time) {
    const result = await collectionMessages.insertOne({ Message: message, Username: username, Time: time });
    console.log(result);
}

async function getMessages(socket) {
    const messages = await collectionMessages.find().toArray();
    socket.emit("Print-Messages", messages)
}

async function saveHistoryToFile() {
    try {
        const messages = await collectionMessages.find().toArray();

        fs.writeFile("history.txt", "Chat history\n");
        for (let msg of messages) {
            let data = `Username: ${msg.Username}\nMessage: ${msg.Message}\nTime: ${msg.Time[0]}.${msg.Time[1]}\n\n`
            fs.appendFile("history.txt", data);
        }
        console.log("Smth was written into file");
    } catch (error) {
        console.error(error);
    }
}

async function clearHistory() {
    clearDB();
    try {
        fs.writeFile("history.txt", '');
        console.log("File was successfully cleared");
    } catch (error) {
        console.error(error);
    }
    io.emit("Clear-Chat");
}

app.use(logger("dev"));
app.use(cookieParser());
app.use(myMiddleware);
app.use(express.static("."))

const server = http.createServer(app);
const io = new Server(server);

let clients = []

io.on("connection", (socket) => {
    clients.push(socket);
    console.log(`Client connected with id: ${socket.id}`);

    socket.on("messageToServer", (msg) => {
        console.log(msg);

        for (client of clients) {
            client.emit("messageFromServer", `Message from client ${socket.id} was ${msg}`);
        }
    });
    socket.on("disconnect", () => {
        console.log(`Client disconnected with id: ${socket.id}`);
        const index = clients.indexOf(socket);
        if (index > -1) {
            clients.splice(index, 1);
        }
    });
    socket.on("Register-New-User", (username, password) => {
        console.log(`Try to register: ${username}, ${password}`);
        addNewUser(username, password);
    });
    socket.on("Send-A-Message", (username, message, time) => {
        console.log(`Sending a message: "${message}" by ${username}`);
        /* const hours = (new Date()).getHours();
        const minutes = (new Date()).getMinutes();
        const time = [hours, minutes]; */

        sendMessage(username, message, time);
        //console.log(result);
        //sendMessage(message, username);

        for (let client of clients) {
            if (client.Username != username) {
                client.emit("Get-Message", username, message, time);
            }
        }
    });
    socket.on("Get-Messages", () => {
        getMessages(socket);
    });
    socket.on("Save-History", () => {
        saveHistoryToFile();
    });
    socket.on("Clear-History", () => {
        clearHistory();
    });
});

app.get("/", (req, res) => {
    fs.readFile("index.html", "utf8").then((contents) => {
        res.send(contents)
    });
});

server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

initDB();
