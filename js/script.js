$(document).ready(function(){
    $("#design").click(function(){
    $("#d-content").show();
    $("#design").hide();
    });
    $("#d-content").click(function(){
    $("#design").show();
    $("#d-content").hide();
    })

    $("#development").click(function(){
    $("#de-content").show();
    $("#development").hide();
    });
    $("#de-content").click(function(){
    $("#development").show();
    $("#de-content").hide();
    })

    $("#product").click(function(){
    $("#p-content").show();
    $("#product").hide();
    });
    $("#p-content").click(function(){
    $("#product").show();
    $("#p-content").hide();
    })

    $(".table").hover(function(){
        $(this).css("background", "images/background/image1.jpg");
      });

})


function validation(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("mail").value;

      confirm( name +" "+ "we have received your message.Thank you for reaching out to us");
}
