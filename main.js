   var etat = document.getElementById("etat_civile");
   var nom = document.getElementById("nom");
   var pnom = document.getElementById("prenom");
   var ncomplet = document.getElementById("nom_complet");
   var range = document.getElementById("niveau");
   var rangevalue = document.getElementById("rangevalue");
   var password = document.getElementById("pwd");
   var confirmpassword = document.getElementById("pwd2");
   var reset = document.getElementById("b1");
   reset.addEventListener("click",function(){
      document.getElementById('form').reset();
      nom.style.backgroundColor="white";
      pnom.style.backgroundColor="white";
      password.style.backgroundColor="white";
      confirmpassword.style.backgroundColor="white";
      rangevalue.innerHTML="50";


   })

   range.addEventListener("input",function(){
      rangevalue.innerHTML=range.value;
   })
   etat.addEventListener("input",function(){
      ncomplet.value=etat.value+" "+nom.value+" "+pnom.value;

   });
   
   nom.addEventListener("input",function(){
       if (nom.value=="") {nom.style.backgroundColor="red"}
        else {
      ncomplet.value=etat.value+" "+nom.value+" "+pnom.value;
      nom.style.backgroundColor="green";
   }
   });
   pnom.addEventListener("input",function(){
      if (pnom.value=="") {pnom.style.backgroundColor="red"}
        else {
      ncomplet.value=etat.value+" "+nom.value+" "+pnom.value;
      pnom.style.backgroundColor="green";
   }
   })
   password.addEventListener("input", function(){
      if(password.value.length<8){
         password.style.backgroundColor="red";
      }
      else{
         password.style.backgroundColor="green";
      }
   })
   confirmpassword.addEventListener("input",function(){
      if(password.value.length>=8 && password.value==confirmpassword.value){
         confirmpassword.style.backgroundColor="green";
      }
      else (confirmpassword.style.backgroundColor="red");
   })
function validateform(){
if(nom.value!=="" && pnom.value!=="" && password.value.length>=8 && confirmpassword.value==password.value){
   alert("Ca marche");

}
else {
   console.log("not validated")
}}