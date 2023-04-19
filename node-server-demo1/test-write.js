const fs = require("fs");
const ws = require('ws')

let url = 'ws://172.22.93.1:9581/wss?token=hqBwnZeIiSdHzMwntSYhwFczxiExXE9T&IP=47.96.224.81&Port=9919&Token=3153586&dtc=true'
var sock  = new ws(url);

sock.on("open", function () {
	console.log("connect success !!!!");
});

sock.on("message", function(data) {
  fs.appendFileSync('./logs/test.WAV', data, () => {})
});

sock.on("error", function(err) {
	console.log("error: ", err);
});

sock.on("close", function() {
	console.log("close");
});

setTimeout(()=>{
  sock.close()
},20000)