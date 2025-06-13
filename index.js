// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const axios = require("axios");
const { token, serverIP } = require("./config.json");
const net = require("net");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
let playerOnline = 0;
let lastPlayerCount = 0;
let serverUpState = false;
let lastStatus = null;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("Getting info, wait", { type: "PLAYING" });
  startStatusCheck();
});

// Login to Discord with your client's token
client.login(token);

function checkConnection(host, port, timeout = 1000) {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection(port, host, () => {
      clearTimeout(timer);
      resolve();
      socket.destroy();
    });
    const timer = setTimeout(() => {
      reject("timeout");
      socket.destroy();
    }, timeout);
    socket.on("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

async function pingForPlayers() {
  try {
    const res = await axios.get(`https://api.mcsrvstat.us/3/${serverIP}`);
    playerOnline = res.data.online;
  } catch (err) {
    console.log("Error pinging api.mcsrvstat.us for data:", err);
    playerOnline = 0;
  }
}

async function checkServerStatus() {
  await pingForPlayers();
  try {
    await checkConnection(serverIP, 25565);
    if (!serverUpState || lastStatus !== "up") {
      serverUpState = true;
      lastStatus = "up";
      setServerUp();
    }
  } catch {
    if (serverUpState || lastStatus !== "down") {
      serverUpState = false;
      lastStatus = "down";
      setServerDown();
    }
  }

  if (lastPlayerCount !== playerOnline && serverUpState) {
    lastPlayerCount = playerOnline;
    setServerUp();
  }
}

function startStatusCheck() {
  checkServerStatus(); // Initial check
  setInterval(checkServerStatus, 60000);
}

function setServerUp() {
  client.user.setActivity(`Server Online ✅, Players online: ${playerOnline}`, {
    type: "PLAYING",
  });
  console.log("Server status: UP");
}

function setServerDown() {
  client.user.setActivity("Server Down ❌", { type: "PLAYING" });
  console.log("Server status: DOWN");
}
