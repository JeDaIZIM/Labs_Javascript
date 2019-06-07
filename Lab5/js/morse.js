function morseDecoder(morseCode){
  var output='';
  var alphabet={
     "-----":"0",
     ".----":"1",
     "..---":"2",
     "...--":"3",
     "....-":"4",
     ".....":"5",
     "-....":"6",
     "--...":"7",
     "---..":"8",
     "----.":"9",
     ".-":"a",
     "-...":"b",
     "-.-.":"c",
     "-..":"d",
     ".":"e",
     "..-.":"f",
     "--.":"g",
     "....":"h",
     "..":"i",
     ".---":"j",
     "-.-":"k",
     ".-..":"l",
     "--":"m",
     "-.":"n",
     "---":"o",
     ".--.":"p",
     "--.-":"q",
     ".-.":"r",
     "...":"s",
     "-":"t",
     "..-":"u",
     "...-":"v",
     ".--":"w",
     "-..-":"x",
     "-.--":"y",
     "--..":"z",
     "/":" ",
     "-·-·--":"!",
     "·-·-·-":".",
     "--··--":","
   };
   var m=morseCode.split(' ');
   while (m.indexOf("")!=-1) {
     m.splice(m.indexOf(""), 1, "/")
   }
   for (i of m) {
     output+=alphabet[i];
   }
   alert(output);
   return true;
}
// ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
try {
  var message=prompt('Enter your Morse-message');
  morseDecoder(message.toString());
}catch(e) {
  alert(e.name + ': ' + e.message);
};
