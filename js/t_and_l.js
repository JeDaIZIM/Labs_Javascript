var second=234245645335;
var hour=(second-second%3600)/3600;
var int_min=second-hour*3600;
var minutes=(int_min-int_min%60)/60;
var seconds=second-(hour*3600+minutes*60);
console.log("Hour = "+hour, "Minutes = "+minutes, "Seconds = "+seconds);
var s=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";
var arr=[];
for (i=0; i<s.length-1; i++) {
  if (s[i]=='a') {
    arr.push(i);
  }
}
console.log(arr);
