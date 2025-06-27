function exe(){
  // let num=prompt("Enter a number: ");
  let result3="Wrong password";
  var result= document.getElementById('input').value;
  var result1= document.getElementById('cp').value;
  if (result==result1){
     document.getElementById('output').innerText="Password match";
}else{
    document.getElementById('output').innerText=result3;
}
}

function mypassword(){
  var x=document.getElementById('input');
  if(x.type==="password"){
    x.type="text";
  }else{
    x.type="password";
  }
}

function mypasswordcp(){
  var x=document.getElementById('cp');
  if(x.type==="password"){
    x.type="text";
  }else{
    x.type="password";
  }
}