
$("#Sbtn").click(function(e) //Sbtn is id of button
{
  e.preventDefault();
  let a=document.getElementById("field").value;
  var patt = /[a-Z][a-z][a-z][a-z]/i;
  var result = str.match(patt);
  if(a.match(result)!=a)
  {
  }
    
}
