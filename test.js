let userName=document.getElementById("name");
let userEmail=document.getElementById("email");
let userPhone=document.getElementById("phone");
let userAge=document.getElementById("age");
let userPass=document.getElementById("password");
let userRePass=document.getElementById("rePassword");
let submitBtn=document.getElementById("submitBtn");


userName.onkeyup=function(){
    let nameRejex=/^[a-zA-Z0-9]+$/;
     
     if(nameRejex.test(userName.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#namealert").css("display","none");
   userName.classList.add("is-valid");
   userName.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#namealert").css("display","block");
       userName.classList.add("is-invalid")
     }
   };

   userEmail.onkeyup=function(){
    let emailRejex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
     
     if(emailRejex.test(userEmail.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#emailalert").css("display","none");
   userEmail.classList.add("is-valid");
   userEmail.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#emailalert").css("display","block");
       userEmail.classList.add("is-invalid")
     }
   };




   userPhone.onkeyup=function(){
    let phonRejex=/^(002){0,1}[0125][0-9]{10}$/;
     
     if(phonRejex.test(userPhone.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#phonealert").css("display","none");
   userPhone.classList.add("is-valid");
   userPhone.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#phonealert").css("display","block");
       userPhone.classList.add("is-invalid")
     }
   };

   userAge.onkeyup=function(){
    let ageRejex=/^[1-9][0-9]?$|^100$/;
     
     if(ageRejex.test( userAge.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#agealert").css("display","none");
   userAge.classList.add("is-valid");
   userAge.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#agealert").css("display","block");
       userAge.classList.add("is-invalid")
     }
   };




   userPass.onkeyup=function(){
    let passRejex=/^[a-zA-Z0-9]{8,}$/;
     
     if(passRejex.test(userPass.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#passwordalert").css("display","none");
   userPass.classList.add("is-valid");
   userPass.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#passwordalert").css("display","block");
       userPass.classList.add("is-invalid")
     }
}
   userRePass.onkeyup=function(){
    let REPassRejex=/^[a-zA-Z0-9]{8,}$/;
     
    if(userRePass.value === userPass.value)
     {
   
   submitBtn.removeAttribute("disabled");
   $("#repasswordalert").css("display","none");
   userRePass.classList.add("is-valid");
   userRePass.classList.remove("is-invalid");
     }
    else
     {
       submitBtn.disabled="true"
       $("#repasswordalert").css("display","block");
       userRePass.classList.add("is-invalid")
     }
}







let getMoviesData=[];
async function getApiData() {
    movesApi = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=c11a6b82ac106b31c122ac806246c392");
    getMoviesData = await movesApi.json();
    response=await  getMoviesData.results
    console.log( getMoviesData.results);
    displayData();
};
  
getApiData();


function displayData(){
    var cartona=``;
    for(var i=0;i<response.length ;i++)
    {
        cartona+=`
        <div class="col-md-6 col-lg-4">
        <div class="img-fluid">
           <img src="https://image.tmdb.org/t/p/w500${response[i].poster_path}" class="w-100 "/>
           
           <div class="item-caption p-5">
           <h2>${response[i].original_title}</h2>
           <p>${response[i].overview}</p>
           <h4>rate: ${response[i].vote_average}</h4>
           <h5> ${response[i].release_date}</h5>
           </div>
           </div>
           </div>`


}
    document.getElementById("rowData").innerHTML= cartona;
};





$('.strip-toggel-menu span').click(function()
    {

        $("#mySidenav").css('width','250px');
        $("#main").css('marginLeft','250px');

    })

$("#mySidenav .closebtn").click(function(){
    $("#mySidenav").css('width','0px');
    $("#main").css("marginLeft","0px");
  })   





// !@#$%^&*!@#$%!@#$%!@#$%@#$%!@#$%!@#$%!@#$!@#$@#$%^&*!@#



function search(trm)
{
    
  var cartona=``;
  for(var i=0;i<response.length ;i++)
  {
      if(response[i].original_title.toLowerCase().includes(trm.toLowerCase()))
  {
    cartona+=`
      <div class="col-md-6 col-lg-4">
      <div class="img-fluid">
         <img src="https://image.tmdb.org/t/p/w500${response[i].poster_path}" class="w-100 "/>
         
         <div class="item-caption p-5">
         <h2>${response[i].original_title}</h2>
         <p>${response[i].overview}</p>
         <h4>rate: ${response[i].vote_average}</h4>
         <h5> ${response[i].release_date}</h5>
         </div>
         </div>
         </div>`

}
  }
  document.getElementById("rowData").innerHTML= cartona;
};

















