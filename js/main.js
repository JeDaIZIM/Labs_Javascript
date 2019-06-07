function changetext(id){
  id.value='Newtext';
}


function getInfo(){
  obj={};
  info=document.getElementById("new_form");
  for (let i=0; i<info.children.length; i++){
    console.log(info, '<br />', info[i]);
    if (info[i].type=='radio' && info[i].checked!=true){
      continue;
  }else{
    obj[info[i].name]=info[i].value;
  }}
  console.log('Without tags: ', obj);
  return true;
}

window.onload = function(){
  var button = document.getElementById('button');
  button.addEventListener("click", getInfo);
}
