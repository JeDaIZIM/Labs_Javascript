function isEmpty(object){
  if(Object.keys(object).length==1){
    alert('There is ' + Object.keys(object).length + ' preference! ' + "False")
  }
  else if (Object.keys(object).length>1) {
      alert('There are ' + Object.keys(object).length + ' preferences! ' + "False")
  }
  else{
    alert('Object is empty! True')
  }
}



var obj1={};
var obj2={'key1': 12, 'key2': 20};

isEmpty(obj1);
isEmpty(obj2);
