function login (){
   var user = $("#usuario").val();
   if(user =="admin"){
      location.href="menu_admin.html"
   }
   if(user =="vendedor"){
      location.href="menu.html"
   }
   if(user =="asesor"){
      location.href="menu_asesor.html"
   }
}