/* 0xgen code by Tanishq */
var ethers;
function generate(){
    const wallet = ethers.Wallet.createRandom();
    var address = wallet.address;
    var mnemonic = wallet.mnemonic.phrase;
    var private_key = wallet.privateKey;
    document.getElementById("address").value=address;
    document.getElementById("private_key").value=private_key;
    document.getElementById("mnemonic").value=mnemonic;
}
/* end of 0x gen */
/* some extra: $ETH ticker code by spellsmith */
var date = new Date();
function startTime() {
  const today = new Date();
  let calendar = today.toLocaleString('pt-BR'); document.getElementById('clock').innerHTML = calendar;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
var ws = new WebSocket("wss://api.bitfinex.com/ws");
ws.onopen = function(){
ws.send(JSON.stringify({"event":"subscribe", "channel":"ticker", "pair":"ETHUSD"}))
};

ws.onmessage = function(msg){
  var response = JSON.parse(msg.data);
    var hb = response[1];
    if(hb != "hb"){
document.getElementById("eth").innerHTML = response[1];
    }
};

function reload(){
    var container = document.getElementById("eth");
    var content = container.innerHTML;
    container.innerHTML= content;
}
/* end of $ETH ticker */