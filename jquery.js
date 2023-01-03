

  jQuery(document).ready(function ($){
   
   
    // when we click on header option
    //header 1
$("#h1").click(function(){
  $(".klik img  ").hide();
  
  $(".klik .bold b").hide();
  

  $(".bold").css({"display":"flex","flex-direction":"column"});
var t=$(".klik .bold").html();
  console.log("tr:",t);
    $(".girl").fadeOut();
    $(".boy").fadeIn("slow");
   
  });



  //header 2
  $("#h2").click(function(){
    $(".klik img  ").hide();
  
    $(".klik .bold b").css({"display":"none"});
   $(".klik .bold b").css({"display":"none"});
   $(".bold").css({"display":"flex","flex-direction":"column"});
    $(".boy").fadeOut();
    $(".girl").fadeIn("slow");
   
  });

// when we click on any image 
  $("img").click(function (e) {
        check=false;
      // e.preventDefault();
   

      $(".klik div").hide();
      let txt=$(this).attr("src");
   
      

   
          var className=$(this).parent().attr("class"); // parent is used to get the parent of it 
         console.log("className:",className);
          var text=$(`.${className}`).html(); // use . after getting the class
       console.log(text);
         $(".klik").append(text);

       
       

         $(".boy").hide();
         $(".girl").hide();


      })
      

    
       
      
      


  });





  // conditon unable to apply 

  
