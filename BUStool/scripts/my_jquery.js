
/*function checkjQ () {
   // alert("my_jQuery file")
  
  $(document).ready(function(){  
    //var inputs = $(':input'); 
    //alert($(inputs[0]).val());
    //$('#result').append('Domain records setup instructions for '+$(inputs[1]).val()+'<br><br>');
    //$('#result').append('Hello '+$(inputs[0]).val()+'<br>').css('color','red');
    //$('#result').append('Hello '+$(inputs[0]).val()+'<br>').css('color','red');    
    //var wynik = $('#result');
    //alert(wynik.length);
    //var copyText = document.getElementById("result");
    //alert(copyText);
    //copyText.select();
    //document.execCommand("Copy");
    //alert("Copied the text: " + copyText.value);
    $('#result').css('color','red');
      copyText.select($('#result'));
    
    //document.getElementById("result").style.display='block';
    
  });};*/

function copyToClipboard(element) {
    $(document).ready(function(){  
      
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
      });
    };

 // $("#textsaver").click(function(){
 //       var btn = $(this);
 //       this.innerHTML="copied, try again?";
 //       this.css("background-color","#ff0000");
 //     }); 
$(document).ready(function(){  
  $("#dns_dedicated_btn").click(function(){
        polish_check("dedicated");
        selectText('result');
        $("#dns_dedicated_btn").addClass("active");
        $("#dns_shared_btn").removeClass("active");
        $("#dns_verification").removeClass("active");
        $("#dns_english_btn").removeClass("active");
        
  });

 $("#dns_shared_btn").click(function(){
        polish_check("shared");
        selectText('result');
        $("#dns_dedicated_btn").removeClass("active");
        $("#dns_shared_btn").addClass("active");
        $("#dns_verification").removeClass("active");
        $("#dns_english_btn").removeClass("active");
        });

 $("#dns_verification").click(function(){
        multiple(1);
        selectText('result');
        $("#dns_dedicated_btn").removeClass("active");
        $("#dns_shared_btn").removeClass("active");
        $("#dns_verification").addClass("active");
        $("#dns_english_btn").removeClass("active");
        });

 $("#dns_english_btn").click(function(){
        check();
        selectText('result');
        $("#dns_dedicated_btn").removeClass("active");
        $("#dns_shared_btn").removeClass("active");
        $("#dns_verification").removeClass("active");
        $("#dns_english_btn").addClass("active");
        });
$("#tr_en_transfer").click(function(){
        transfer();
        selectText('result');
        $("#tr_pl_transfer").removeClass("active");
        $("#tr_en_transfer").addClass("active");
        });
$("#tr_pl_transfer").click(function(){
        polish_transfer();
        selectText('result');
        $("#tr_en_transfer").removeClass("active");
        $("#tr_pl_transfer").addClass("active");
        });

$("#multiple_dns").click(function(){
        multiple(0);
        selectText('result');
        $("#multiple_dns").addClass("active");
        });

$("#warmup_btn").click(function(){
        warm_up();
        selectText('result');
        $("#warmup_btn").addClass("active");
        });
  
$("#emailMYSELF").click(function () {
                    debugger;
                    var email = 'konrad.korf@expertsender.com';
                    var subject = ('Your ExpertSender Business Unit is ready to be utilized ('+document.getElementById("domainName").value+')');
                    var emailBody = document.getElementById("result").innerHTML;
                    var button =document.getElementById("emailMYSELF");
                    button.href = 'mailto:'+email+"?subject="+encodeURI(subject)+"&body="+encodeURI(emailBody);
  
                    //alert("mailto:"+email+"?subject="+subject+"&body="+emailBody);
                    //window.location.href = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
                    });


  });