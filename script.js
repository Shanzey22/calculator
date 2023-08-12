function handlekeypress(key)
{

  const inputScreen=document.getElementById("input");
  if(key=='=')
  {
  inputScreen.value =eval(inputScreen.value);
 
 }
 else if(key=="clear")
 {
  inputScreen.value=" ";
 }

 else { 

  inputScreen.value += key;
  }
}
