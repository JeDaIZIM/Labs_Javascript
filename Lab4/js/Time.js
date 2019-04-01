function sendQuestion(){

var inputs, index;

inputs = document.getElementsByTagName('input');
for (index = 0; index < inputs.length; ++index) {
    console.log(inputs[index].value);
    }  

}