function UserException(message) {
   this.message = message;
   this.name = "UserException";
}

function cycle() {
  c=0;
  for (;;) {
    c+=1
    if (c==10000){
      throw new UserException('There is infinity cycle!!!');
    }}
  }

try {
  cycle();
}catch(e) {
  alert(e.name + ': ' + e.message);
};
