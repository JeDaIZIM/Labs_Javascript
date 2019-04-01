var new_object={
solt:"cobo",
init: [43,"jungle"],
neow: true};

function isEmpty(obj){
tt=Object.getOwnPropertyNames(obj);
if(tt.length>0) return true;
else return false;
}
isEmpty(new_object);