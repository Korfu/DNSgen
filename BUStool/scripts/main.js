/*eslint-env browser*/
function check() {
      
      var first_name = document.forms[0].elements[0].value;            
      var main_domain= document.forms[0].elements[1].value;
      var link_domian= document.forms[0].elements[2].value;
      var first_IP= document.forms[0].elements[3].value;
      var second_IP= document.forms[0].elements[4].value;
      var third_IP= document.forms[0].elements[5].value;
      var fourth_IP= document.forms[0].elements[6].value;
      var spf_tag= document.forms[0].elements[7].value;
      //var service= document.forms[0].elements[8].value;
      //var country= document.forms[0].elements[9].value;
      var google_site_verification=document.forms[0].elements[16].value;
      var dkim=document.forms[0].elements[17].value;  
      var mailbox = document.getElementById("mailbox_type").value;
      //alert(mailbox);
     
      var part1="";
      var part2="";
      var part3="";
      var part4="";
      var part5="";
      var part6="";
      var part7="";
      var part8="";
      switch(mailbox){
        case "IQ":
          part1="IQ mail server<br>" 
          part2="s"
          part3="mail server login panel and "
          part4="new CNAME record for mail."+main_domain+" pointing to: roundcube.iq.pl<br>"
          part5="mail server, "
          part6="new MX record (priority 5) for "+main_domain+" pointing to: mail.iq.pl<br>new MX record (priority 1) for "+main_domain+" pointing to: mx1.iq.pl<br>"
          part7="mx a ip4:86.111.240.0/21"
          break;  
        case "Own":
          part1="your own mail server<br>"
          part8="<span class='bold'>Mail server:</span><br>a. We need all emails to be forwarded from abuse@"+main_domain+" and postmaster@"+main_domain+" to delivery@expertsender.com<br>b. We also need to have a direct access to delivery@"+main_domain+"<br><br>"
          break;
      }
      document.getElementById("result").innerHTML = "<div>Domain records setup instructions for "+main_domain+"<br><br>"+
      
      "Hello, "+first_name+"<br><br>"+
      
      "At ExpertSender we put the reputation ownership in your hands. This means you will need to configure the DNS records of your sending and <span class='purple'>link masking ("+link_domian+")</span> domains at your domain hosting company.<br><br>"+
      
      "The setup requires a little bit of work with adjusting the domain records<br>but shouldn't take more than 10 minutes, even for a non-technical person.<br><br>"+
      "Please follow these instructions, including "+part1+"<br>"+'Every DNS record should be checked at <a href="http://www.dnswatch.info/">http://www.dnswatch.info/</a><br><br>'+
      
      " <span class='red'>A) Domain records setup</span><br>"+
      "<span class='bold'>A records (bounce, Feedback Loop and dedicated IP setup):</span>"+"<br>"+
      "new A record for e."+main_domain+" pointing to: "+first_IP+"<br>"+
      "new A record for f."+main_domain+" pointing to: "+first_IP+"<br>"+
      "new A record for"+" "+"ip1."+main_domain+" pointing to:"+" "+first_IP+"<br>"+
      "new A record for"+" "+"ip2."+main_domain+" pointing to:"+" "+second_IP+"<br>"+
      "new A record for"+" "+"ip3."+main_domain+" pointing to:"+" "+third_IP+"<br>"+
      "new A record for"+" "+"ip4."+main_domain+" pointing to:"+" "+fourth_IP+
      
      "<br><br><span class='bold'>CNAME record"+part2+" ("+part3+"link masking setup):</span><br>"+
      part4+
      "new CNAME record for <span class='purple'>links."+link_domian+"</span> pointing to: click-s"+document.forms[0].elements["OutputId"].value+"-"+document.forms[0].elements["country"].value+".esv2.com.<br><br>"+
      
      "<span class='bold'>MX records ("+part5+"bounce and Feedback Loop setup):</span><br>"+
      part6+
      "new MX record for e."+main_domain+" pointing to: e."+main_domain+"<br>"+
      "new MX record for f."+main_domain+" pointing to: f."+main_domain+"<br><br>"+
      
      "<span class='bold'>TXT records (SPF, Postmaster Tools and DKIM setup):</span><br>"+
      "new TXT record for e."+main_domain+" pointing to: v=spf1 include:"+spf_tag+" -all<br>"+
      "new TXT record for "+main_domain+" pointing to: v=spf1 "+part7+" include:"+spf_tag+" -all<br>"+
      "new TXT record for "+main_domain+" pointing to: "+google_site_verification+"<br>"+
      "new TXT record for default1k._domainkey."+main_domain+" pointing to: <div id='dkim_out'>"+dkim+"</div><br>"+
        
      part8+

      "<span class='red'>B) Time zone selection</span><br>"+
      "Choose the time zone for the Unit. Use the following format: UTC +/- x (e.g. UTC -4)."+"<br>"+
      "<span class='bold'>IMPORTANT!</span> Unit's time zone cannot be changed after the setup.<br><br>"+

      "<span class='red'>C) Questionnaire for FBL/whitelisting/future unblock procedures</span><br>"+
      "<span class='bold'>1.</span> What is the full company name and postal address?<br>"+
      "<span class='bold'>2.</span> What is the contact phone number? (ISPs never call it)<br>"+
      "<span class='bold'>3.</span> What is the company website URL?<br>"+
      "<span class='bold'>4.</span> What is the website at which subscribers sign up? (please describe, if other means of opt-in are used)<br>"+
      "<span class='bold'>5.</span> What is the link to the Privacy Policy?<br>"+
      "<span class='bold'>6.</span> How would you describe the business that will involve sending emails from your business unit? (please be creative)<br>"+
      "<span class='bold'>7.</span> What physical address will be used in the footer of the email messages? (requirement for many email laws around the world, e.g. CAN-SPAM in US)"+"<br>"+
      "<span class='bold'>8.</span> What is the database type? (own, managed, other*)<br>"+
      "<span class='bold'>9.</span> What is the database permission level? (double opt-in, confirmed opt-in, single opt-in, co-registration, opt-out, other*)<br>"+
      "*please describe<br><br>"+

      "In case of any doubts do not hesitate to ask.</div>";
    
      if (dkim.length<225 || dkim.length>227) {
        document.getElementById("dkim_out").style.backgroundColor='yellow';
      };
      
  
      document.getElementById("result").style.display='block';
      return false;
 }

function multiple(x) {
           
      var main_domain= document.forms[0].elements[0+x].value;
      var link_domian= document.forms[0].elements[1+x].value;
      var first_IP= document.forms[0].elements[2+x].value;
      var second_IP= document.forms[0].elements[3+x].value;
      var third_IP= document.forms[0].elements[4+x].value;
      var fourth_IP= document.forms[0].elements[5+x].value;
      var spf_tag= document.forms[0].elements[6+x].value;
      //var service= document.forms[0].elements[7].value;
      //var country= document.forms[0].elements[8].value;
      var google_site_verification=document.forms[0].elements[15+x].value; 
      var dkim=document.forms[0].elements[16+x].value;
     
  
      document.getElementById("result").innerHTML = 
       "e."+main_domain+", A, "+first_IP+"<br><br>"
      +"f."+main_domain+", A, "+first_IP+"<br><br>"
      +"ip1."+main_domain+", A, "+first_IP+"<br><br>"
      +"ip2."+main_domain+", A, "+second_IP+"<br><br>"
      +"ip3."+main_domain+", A, "+third_IP+"<br><br>"
      +"ip4."+main_domain+", A, "+fourth_IP+"<br><br>"
      +"mail."+main_domain+", CNAME, roundcube.iq.pl.<br><br>"
      +"links."+link_domian+", CNAME, click-s"
      +document.forms[0].elements["OutputId"].value
      +"-"+document.forms[0].elements["country"].value
      +".esv2.com.<br><br>"
      +main_domain+", MX, 5 mail.iq.pl.<br><br>"
      +main_domain+", MX, 1 mx1.iq.pl.<br><br>"
      +"e."+main_domain+", MX, e."+main_domain+".<br><br>"
      +"f."+main_domain+", MX, f."+main_domain+".<br><br>"
      +"e."+main_domain+', TXT, "v=spf1 include:'+spf_tag+' -all"<br><br>'
      +main_domain+', TXT, "v=spf1 mx a ip4:86.111.240.0/21 include:'+spf_tag+' -all"<br><br>'
      +main_domain+', TXT, "'+google_site_verification+'"<br><br>'
      +"default1k._domainkey."+main_domain+', TXT, "'+dkim+'"<br><br>';
      document.getElementById("result").style.display='block';
      return false;
}

function transfer() {
      var first_name = document.forms[0].elements[0].value;
      var customer_mail= document.forms[0].elements[1].value;
      var main_domain= document.forms[0].elements[2].value;
      var ExS_pass= document.forms[0].elements[3].value;
      var IQ_pass= document.forms[0].elements[4].value;
      var warmup = document.getElementById("tr_bustype").value+document.getElementById("tr_country").value;    
      var table="TABLE";
  switch(warmup) {
  /* Affiliate */
    case "A_PL":
          table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>WP/o2</td><td>wp.*/o2.pl/tlen.pl</td><td>500</td></tr><tr><td>Onet</td><td>onet.*/op.pl/vp.pl</td><td>500</td></tr><tr><td>Interia</td><td>interia.*</td><td>500</td></tr><tr><td>Other</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>5 000</td></tr></tfoot></table><br>"
          break;
    case "A_US":
    case "A_UK":
    case "A_DE":
          table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>AOL</td><td>aol.*/aim.com/verizon.net</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Other</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>5 000</td></tr></tfoot></table><br>"
          break;
    case "A_FR":
         table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Orange</td><td>orange.fr/wanadoo.fr</td><td>500</td></tr><tr><td>Free</td><td>free.fr/aliceadsl.fr</td><td>500</td></tr><tr><td>SFR</td><td>sfr.fr/neuf.fr/cegetel.net/club-internet.fr</td><td>500</td></tr><tr><td>La Poste</td><td>laposte.net</td><td>500</td></tr><tr><td>Other</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>6 500</td></tr></tfoot></table><br>"
         break;
    case "A_RU":
         table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Mail.Ru</td><td>mail.ru/my.com</td><td>500</td></tr><tr><td>Yandex</td><td>yandex.ru</td><td>500</td></tr><tr><td>Rambler</td><td>rambler.ru</td><td>500</td></tr><tr><td>Other</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>5 000</td></tr></tfoot></table><br>"
         break;
    case "A_IT":
          table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Telecom Italia</td><td>alice.it/aliceposta.it/tin.it</td><td>500</td></tr><tr><td>Italiaonline</td><td>libero.it</td><td>500</td></tr><tr><td>Other</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>5 500</td></tr></tfoot></table><br>"
          break;
    case "A_CH":
         table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tfoot><tr class='bold'><td>All</td><td>All</td><td>5 500</td></tr></tfoot><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Tencent QQ</td><td>qq.com</td><td>500</td></tr><tr><td>NetEase</td><td>163.com/netease.com</td><td>500</td></tr><tr><td>Other</td><td>*.*</td><td>3 000</td></tr></table><br>"
        break;
    case "A_CZ":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Seznam</td><td>seznam.cz</td><td>500</td></tr><tr><td>Other</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>4 000</td></tr></tfoot></table><br>"
        break;
    case "A_IN":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Other</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>4 500</td></tr></tfoot></table><br>"
        break;
/* ECOMMERCE */
    case "E_PL":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1000</td></tr><tr><td>WP/o2</td><td>wp.*/o2.pl/tlen.pl</td><td>1000</td></tr><tr><td>Onet</td><td>onet.*/op.pl/vp.pl</td><td>1000</td></tr><tr><td>Interia</td><td>interia.*</td><td>1000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>10 000</td></tr></tfoot></table><br>"
          break;
    case "E_US":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>AOL</td><td>aol.*/aim.com/verizon.net</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>10 000</td></tr></tfoot></table><br>"
        break;
    case "E_UK":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>AOL</td><td>aol.*/aim.com/verizon.net</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>10 000</td></tr></tfoot></table><br>"
        break;
    case "E_FR":
       table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Orange</td><td>orange.fr/wanadoo.fr</td><td>1 000</td></tr><tr><td>Free</td><td>free.fr/aliceadsl.fr</td><td>1 000</td></tr><tr><td>SFR</td><td>sfr.fr/neuf.fr/cegetel.net/club-internet.fr</td><td>1 000</td></tr><tr><td>La Poste</td><td>laposte.net</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>13 000</td></tr></tfoot></table><br>"
        break;
    case "E_RU":
       table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><tr><td>Mail.Ru</td><td>mail.ru/my.com</td><td>1 000</td></tr><tr><td>Yandex</td><td>yandex.ru</td><td>1 000</td></tr><tr><td>Rambler</td><td>rambler.ru</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>10 000</td></tr></tfoot></table><br>"
        break;
    case "E_IT":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Telecom Italia</td><td>alice.it/aliceposta.it/tin.it</td><td>1 000</td></tr><tr><td>Italiaonline</td><td>libero.it</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td><tfoot><tr class='bold'><td>All</td><td>All</td><td>11 000</td></tr></tfoot></tr></table><br>"
        break;
    case "E_CH":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Tencent QQ</td><td>qq.com</td><td>1 000</td></tr><tr><td>NetEase</td><td>163.com/netease.com</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>11 000</td></tr></tfoot></table><br>"
        break;
    case "E_DE":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>AOL</td><td>aol.*/aim.com/verizon.net</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>10 000</td></tr></tfoot></table><br>"
        break;
    case "E_CZ":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Seznam</td><td>seznam.cz</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>8 000</td></tr></tfoot></table><br>"
        break;
    case "E_IN":
         table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Domain Family</th><th width=320px>Domain</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Other</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>All</td><td>All</td><td>9 000</td></tr></tfoot></table><br>"
        break;
      }
  
      document.getElementById("result").innerHTML = 
        "<pt>Your ExpertSender Business Unit is ready to be utilized ("+main_domain+")<br><br>"
  
        +"Hello "+first_name+",<br><br>"
        
        +"The FBL requests have been approved. Your Business Unit can start sending.<br><br>"

        +"<span class='red'>Kindly confirm your receipt of these instructions and recommendations<br>"
        +"from ExpertSender. This will at the same time acknowledge the Service<br>"
        +"Transfer Date that marks the start of your mailing and billing cycle.</span><br><br>"
  
        +"<h5><span class='bold'>LOGIN</span></h5>"
        
        +"To log into your ExpertSender account please use the following credentials:<br>" +
        "<a class='bold' href=https://service"+document.forms[0].elements['OutputId'].value+".esv2.com> https://service"+document.forms[0].elements['OutputId'].value+".esv2.com</a><br>"
        
        +"<span class='bold'>Email: "+customer_mail+"</span><br>" 
        +"<span class='bold'>Password: "+ExS_pass+"</span><br> (Settings > User account > Change Password)<br><br>"
        +"Whenever you need more logins go to the Settings > Business unit > Users tab<br>" 
        +"where you can also set the roles for each account (configure their access rules).<br><br>"
        
        +"<h5><span class='bold'>MAILBOX</span></h5>"

        +"We created a mailbox (catch-all) which you can use in the From/Reply-To field:<br>"
        +"<a href=https://mail."+main_domain+" >https://mail."+main_domain+"</a><br>"
        +"<span class='bold'>Username: info@"+main_domain+"</span><br>"
        +"<span class='bold'>Password: "+IQ_pass+"</span><br><br>"

        +"<div class='text-info'>Please make sure to log into and revise the Reply-To mailbox daily in order<br>to answer all unsubscribe requests from your subscribers. Being responsive<br>to such messages is an important factor in maintaining high deliverability.</div><br>" 

        +"<h5><span class='bold'>WARM-UP</span></h5>"

        +"What is important during the initial warm-up period is to pull a batch of subscribers<br>"
        +"from your master list. This batch should consist of the recently signed up subscribers<br>" 
        +"who already received at least 2-3 mailings and generated some opens without issuing<br>"
        +"any complaints or opt-outs. Below are the recommended volumes for the first mailing:<br><br>"
        
        +table
  
        +"<h5><span class='bold'>1) Volume control</span></h5>"
        +"When the delivery performance is satisfactory you can send more messages. Otherwise<br>"
        +"the throttling time should be extended. If this does not help and the soft bounces stay<br>"
        +"at a high level we advise to reduce the size of your campaigns. Here is a cheat sheet:<br><br>"
  
        +"<table class='table table-bordered table-nonfluid'><thead><tr><th width=150px>Delivered ratio</th><th width=520px>Action</th></tr></thead><tbody><tr><td>> 90%</td><td>Increase the volume by 10-50% based on the existing size limit.</td></tr><tr><td>10-90%</td><td>Decrease the volume by 10-90% based on the bounces ratio.</td></tr><tr><td>&#60 10% </td><td>Stop sending. Your account manager will escalate to the ISP.</td></tr></tbody></table>"
        
        +"<h5><span class='bold'>2) Data quality</span></h5>"+
        "The email addresses which hard bounced from your previous mailings should be added<br>"
        +"to the blacklist or a suppression list in your ExpertSender Business Unit. Moreover, you<br>"
        +"should better stop sending messages to the subscribers who did not open any of your<br>"
        +"newsletters for 6 months after being added to the subscriber list. If you would like to<br>" 
        +"import an old list, you should check it with an email validation vendor first. All these<br>" 
        +"practices will significantly reduce the risk of sending to user unknown and spamtraps<br>" 
        +"which can severely damage the reputation of your dedicated IP addresses.<br><br>" 

        +"<h5><span class='bold'>3) Segmentation</span></h5>"
        +"To control the daily volume, use the segments with adjustable size limits which can be<br>" 
        +"created in the Subscribers > Segments section. For instance, you can have one segment<br>"
        +'for each domain family. To do that select the field restriction "Email belongs to domain<br>'
        +'family [please select]" and specify the max segment size.<br><br>'

        +"<h5><span class='bold'>4) Throttling</span></h5>"
        +"Many ISP limit the maximum amount of messages which are allowed to be sent during<br>"
        +"every hour. The throttling lengthens the delivery time and allows you to avoid reaching<br>"
        +"the limit. We advise to throttle every 10k messages for 1 hour. Later this value can be<br>" 
        +"decreased or increased depending on the delivered ratio. By default, all the messages<br>" 
        +"you send to multiple recipients are configured to use the automatic throttling option.<br>" 
        +"To adjust it visit the Settings > Business unit > General tab.<br><br>"

        +"<h5><span class='bold'>GENERAL GUIDELINES</span></h5>"
  
        +"<h5><span class='bold'>1) Header/Footer</span></h5>"
        +"They can be created in the Messages > Templates section. All saved templates will be<br>"
        +"selectable in the HTML editor. In the header you could include a request to add your<br>"
        +"From email address to the recipient's address book and the <span class='bold'>*[link_viewinbrowser]*</span><br>"
        +"personalization tag which always helps in getting the additional clicks.<br><br>" 

        +"In the footer place your company details. Filling the respective fields in the Settings<br>" 
        +"> Business Unit > Sender Address tab or in the Subscribers > Lists > Settings (each<br>"
        +"list lets you input a different data) will allow you to make use of the personalization<br>" 
        +"tags such as <span class='bold'>*[customer_company]*,</span>,<span class='bold'> *[customer_street]*</span> or <span class='bold'>*[customer_zip]*</span>.<br>" 
        +"You should remember to place a merge word for the unsubscription purposes which<br>" 
        +"is <span class='bold red'>*[link_unsubscribe]* </span>(its enhanced version will also redirect each unsubscriber to<br>" 
        +"the chosen URL that has to be specified inside the<span class='bold red'> ${UnsubscribeLink('URL')}</span> tag).<br>"  
        +"Below you can find each version's example to place in the message footer's code:<br>" 
        +'<span class="font-italic">&#60a href="*[link_unsubscribe]*">Unsubscribe&#60/a&#62</span><br>' 
        +'<span class="font-italic">&#60a href="${UnsubscribeLink("URL")}">Unsubscribe&#60/a&#62</span><br>' 
        +"Finally the presence of <span class='bold'>*[link_preferencecenter]*</span> gives every subscriber a chance<br>" 
        +"to edit their subscription details through the Preference Center. However, keep in<br>"  
        +"mind to also check the visibility settings in the Subscribers > Custom fields section.<br><br>" 

        +"<h5><span class='bold'>2) IP channels</span></h5>"
        +"The default settings distribute your volume across the dedicated IP addresses evenly.<br>"
        +"In the Reports section you can see how each of the channels has been performing.<br>" 
        +"Select a date range, limit the scope to a domain family and group by the IP address.<br>"
        +"If you notice that any IP address is performing better (or worse) than the others you<br>"
        +"can favor (or disfavor) it in your sends. Visit the Settings > Business unit > Channels<br>" 
        +"section and adjust the settings accordingly.<br><br>"
  
        +"<h5><span class='bold'>3) Blacklist check</span></h5>"
        +"We strongly recommend that you always click the button called 'Blacklist check' in<br>"
        +"the HTML editor during the message creation process. The system will perform checks<br>" 
        +"against blacklists. In case of any issues you will see the respective details. Every URL<br>" 
        +"listed on a major blacklist should be either removed or replaced. SPAMHAUS, URIBL,<br>" 
        +"SURBL are just a few examples of the worst listings which can hurt the delivery ratio.<br><br>"
        
        +"<h5><span class='bold'>4) Spam check</span></h5>"
        +"In the HTML editor you can click the 'Send to seed list' button and send the edited<br>"
        +"message to the 'SpamAssassin' list. After a while you should receive a corresponding<br>" 
        +"authentication report to the From email address used in the message which was sent.<br>" 
        +"Inside there will be paragraphs with various check results including the SpamAssassin.<br>" 
        +"The lower the score the better for your inbox placement rate.<br><br>"
        
        +"<h5><span class='bold'>API</span></h5>"
        +"To utilize API calls for managing your lists and campaigns please follow this link:<br>"
        +"<a href= https://sites.google.com/a/expertsender.com/api-documentation/>https://sites.google.com/a/expertsender.com/api-documentation</a><br>"
        +"You will need the API key. It can be found inside Settings > Business unit > API.<br>" 
        +"All of the ID numbers are available in the respective sections of your account.<br><br>"

        +"<h5><span class='bold'>DYNAMIC CONTENT</span></h5>"
        +"Please find our dynamic content documentation below:<br>"
        +"<a href=https://sites.google.com/a/expertsender.com/dynamic-content-documentation/home>https://sites.google.com/a/expertsender.com/dynamic-content-documentation/home</a><br><br>"
        
        +"<h5><span class='bold'>WORKFLOWS</span></h5>"
        +"User Guide on Workflows (a marketing automation feature that allows designing<br>" 
        +"chains of marketing events in any type of campaign: lead nurturing, reactivation,<br>" 
        +"abandoned shopping cart, etc.) is accessible through the following link:<br>"
        +"<a href=http://resources.expertsender.com/workflow-user-guide/>http://resources.expertsender.com/workflow-user-guide</a><br><br>"

        +"<h5><span class='bold'>CONTACT</span></h5>"
        +"If you can't find the required answers at <a href=http://resources.expertsender.com/qa/ >http://resources.expertsender.com/qa/</a><br>" 
        +"please reach out to us via <a href='mailto:experts@expertsender.com'>experts@expertsender.com</a> or in case of very urgent<br>"+ 
        "situations via <a href='mailto:alert@expertsender.com'>alert@expertsender.com</a>(e.g. being unable to access the platform).<br><br>"
        
        +"Good luck!</pt><br>";
 
      document.getElementById("result").style.display='block';

      return false;
        

}

function polish_check(y) {      
      var first_name = document.forms[0].elements[0].value;            
      var main_domain= document.forms[0].elements[1].value;
      var link_domian= document.forms[0].elements[2].value;
      var first_IP= document.forms[0].elements[3].value;
      var second_IP= document.forms[0].elements[4].value;
      var third_IP= document.forms[0].elements[5].value;
      var fourth_IP= document.forms[0].elements[6].value;
      var spf_tag= document.forms[0].elements[7].value;
      //var service= document.forms[0].elements[8].value;
      //var country= document.forms[0].elements[9].value;
      var google_site_verification=document.forms[0].elements[16].value;
      var dkim= document.forms[0].elements[17].value;
      var mailbox = document.getElementById("mailbox_type").value;
      //alert(mailbox);
     
      var part1="";
      var part2="";
      var part3="";
      var part4="";
      var part5="";
      var part6="";
      var part7="";
      var part8="";
      var partMX="";
      switch(mailbox){
        case "IQ":
          part1="serwerem pocztowym IQ<br>" 
          part2="y"
          part3="panel logowania i "
          part4="nowy rekord CNAME dla mail."+main_domain+" wskazujący: roundcube.iq.pl<br>"
          part5="serwer pocztowy"
          part6="nowy rekord MX (priorytet 5) dla "+main_domain+" wskazujący: mail.iq.pl<br>nowy rekord MX (priorytet 1) dla "+main_domain+" wskazujący: mx1.iq.pl<br>"
          part7="mx a ip4:86.111.240.0/21"
          partMX="<br><span class='bold'>Rekordy MX (serwer pocztowy):</span><br>"
          break;  
        case "Own":
          part1="Waszym serwerem pocztowym<br>"
          part8="<span class='bold'>Serwer pocztowy:</span><br>a. Potrzebujemy automatycznych przekierowań wszystkich wiadomości ze skrzynek<br> abuse@"+main_domain+" i postmaster@"+main_domain+" na skrzynkę delivery@expertsender.com<br>b. Potrzebny będzie również bezpośredni dostęp do skrzynki delivery@"+main_domain+"<br><br>"
          partMX="";
          break;
      }
  
      //alert(y);
      if (y =="dedicated") {
      document.getElementById("result").innerHTML = "<div>Instrukcje konfiguracji domeny "+main_domain+"<br><br>"+
      
      "Dzień dobry, "+first_name+" "+"<br><br>"+
      
      "Zanim jednostka biznesowa będzie gotowa do rozpoczęcia wysyłek, trzeba odpowiednio skonfigurować domenę wysyłającą.<br>Wszystkie rekordy DNS należy ustawić w panelu rejestracyjnym domeny, zgodnie z poniższymi wskazówkami.<br><br>"+
      
      "Cały proces nie powinien zająć więcej niż 10 minut.<br><br>"+
      "Prosimy o dokładne wykonanie instrukcji w wersji z "+part1+'Propagacja rekordów DNS powinna zostać sprawdzona na stronie <a href="http://www.dnswatch.info/">http://www.dnswatch.info/</a><br><br>'+
      
      " <span class='red'>A) Konfiguracja rekordów domeny</span><br>"+
      "<span class='bold'>Rekordy A (zwrotki, Feedback Loops i dedykowane adresy IP):</span>"+"<br>"+
      "nowy rekord A dla e."+main_domain+" wskazujący: "+first_IP+"<br>"+
      "nowy rekord A dla f."+main_domain+" wskazujący: "+first_IP+"<br>"+
      "nowy rekord A dla"+" "+"ip1."+main_domain+" wskazujący:"+" "+first_IP+"<br>"+
      "nowy rekord A dla"+" "+"ip2."+main_domain+" wskazujący:"+" "+second_IP+"<br>"+
      "nowy rekord A dla"+" "+"ip3."+main_domain+" wskazujący:"+" "+third_IP+"<br>"+
      "nowy rekord A dla"+" "+"ip4."+main_domain+" wskazujący:"+" "+fourth_IP+
      
      "<br><br><span class='bold'>Rekord"+part2+" CNAME ("+part3+"maskowanie linków):</span><br>"+
      part4+
      "nowy rekord CNAME dla <span class='purple'>links."+link_domian+"</span> wskazujący: click-s"+document.forms[0].elements["OutputId"].value+"-"+document.forms[0].elements["country"].value+".esv2.com.<br><br>"+
      
      "<span class='bold'>Rekordy MX ("+part5+", zwrotki i Feedback Loops):</span><br>"+
      part6+
      "nowy rekord MX dla e."+main_domain+" wskazujący: e."+main_domain+"<br>"+
      "nowy rekord MX dla f."+main_domain+" wskazujący: f."+main_domain+"<br><br>"+
      
      "<span class='bold'>Rekordy TXT (SPF, Gmail Postmaster Tools i DKIM):</span><br>"+
      "nowy rekord TXT dla e."+main_domain+" wskazujący: v=spf1 include:"+spf_tag+" -all<br>"+
      "nowy rekord TXT dla "+main_domain+" wskazujący: v=spf1 "+part7+" include:"+spf_tag+" -all<br>"+
      "nowy rekord TXT dla "+main_domain+" wskazujący: "+google_site_verification+"<br>"+
      "nowy rekord TXT dla default1k._domainkey."+main_domain+" wskazujący: <div id='dkim_out'>"+dkim+"</div><br>"+
        
      part8+

      "<span class='red'>B) Kwestionariusz dla dostawców skrzynek pocztowych (w razie problemów z dostarczalnością)</span><br>"+
      "<span class='bold'>1.</span> 1. Nazwa oraz adres pocztowy firmy<br>"+
      "<span class='bold'>2.</span> Numer telefonu (dostawcy nigdy go nie używają)<br>"+
      "<span class='bold'>3.</span> Adres internetowy firmy<br>"+
      "<span class='bold'>4.</span> Adres internetowy strony, na której użytkownicy dokonują subskrypcji (prośba o opis czy występują inne formy subskrypcji)<br>"+
      "<span class='bold'>5.</span> Adres internetowy strony z polityką prywatności<br>"+
      "<span class='bold'>6.</span> Opis czego dotyczą wysyłki prowadzone poprzez domenę wysyłającą (prośba o szczegółową odpowiedź)<br>"+
      "<span class='bold'>7.</span> Adres pocztowy, który będzie używany w stopce wiadomości"+"<br>"+
      "<span class='bold'>8.</span> Typ listy subskrybentów (własna, zarządzana, inna - prośba o opis<br>"+
      "<span class='bold'>9.</span> Rodzaj subskrypcji przy dodawaniu nowych subskrybentów do listy (podwójny zapis, potwierdzony zapis, pojedynczy zapis, inna - prośba o opis)<br>"+
      "*please describe<br><br>"+

      "W razie wszelkich wątpliwości służę pomocą.<br><br>Pozdrawiam serdecznie,</div>";
      
      //if (mailbox="Own"){result="wersja 1";} else {result="wersja 2";}
  
      }
      else
      {document.getElementById("result").innerHTML = "<div>Instrukcje konfiguracji domeny "+main_domain+"<br><br>"+
      
      "Dzień dobry, "+first_name+" "+"<br><br>"+
      
      "Zanim jednostka biznesowa będzie gotowa do rozpoczęcia wysyłek, trzeba odpowiednio skonfigurować domenę wysyłającą.<br>Wszystkie rekordy DNS należy ustawić w panelu rejestracyjnym domeny, zgodnie z poniższymi wskazówkami.<br><br>"+
      
      "Cały proces nie powinien zająć więcej niż 10 minut.<br><br>"+
      "Prosimy o dokładne wykonanie instrukcji w wersji z "+part1+'Propagacja rekordów DNS powinna zostać sprawdzona na stronie <a href="http://www.dnswatch.info/">http://www.dnswatch.info/</a><br><br>'+
      
      " <span class='red'>A) Konfiguracja rekordów domeny</span><br>"+
      "<span class='bold'>Rekord"+part2+" CNAME ("+part3+"maskowanie linków):</span><br>"+
      part4+
      "nowy rekord CNAME dla <span class='purple'>links."+link_domian+"</span> wskazujący: click-s"+document.forms[0].elements["OutputId"].value+"-"+document.forms[0].elements["country"].value+".esv2.com.<br>"+
      
      partMX+part6+"<br>"
      
      +"<span class='bold'>Rekordy TXT (SPF, Gmail Postmaster Tools i DKIM):</span><br>"+
      "nowy rekord TXT dla "+main_domain+" wskazujący: v=spf1 "+part7+" include:"+spf_tag+" -all<br>"+
      "nowy rekord TXT dla "+main_domain+" wskazujący: "+google_site_verification+"<br>"+
      "nowy rekord TXT dla default1k._domainkey."+main_domain+" wskazujący: <div id='dkim_out'>"+dkim+"</div><br>"+
        
      part8+

      "<span class='red'>B) Kwestionariusz dla dostawców skrzynek pocztowych (w razie problemów z dostarczalnością)</span><br>"+
      "<span class='bold'>1.</span> 1. Nazwa oraz adres pocztowy firmy<br>"+
      "<span class='bold'>2.</span> Numer telefonu (dostawcy nigdy go nie używają)<br>"+
      "<span class='bold'>3.</span> Adres internetowy firmy<br>"+
      "<span class='bold'>4.</span> Adres internetowy strony, na której użytkownicy dokonują subskrypcji (prośba o opis czy występują inne formy subskrypcji)<br>"+
      "<span class='bold'>5.</span> Adres internetowy strony z polityką prywatności<br>"+
      "<span class='bold'>6.</span> Opis czego dotyczą wysyłki prowadzone poprzez domenę wysyłającą (prośba o szczegółową odpowiedź)<br>"+
      "<span class='bold'>7.</span> Adres pocztowy, który będzie używany w stopce wiadomości"+"<br>"+
      "<span class='bold'>8.</span> Typ listy subskrybentów (własna, zarządzana, inna - prośba o opis<br>"+
      "<span class='bold'>9.</span> Rodzaj subskrypcji przy dodawaniu nowych subskrybentów do listy (podwójny zapis, potwierdzony zapis, pojedynczy zapis, inna - prośba o opis)<br>"+
      "*please describe<br><br>"+

      "W razie wszelkich wątpliwości służę pomocą.<br><br>Pozdrawiam serdecznie,</div>";
        
      }
  
       if (dkim.length<225 || dkim.length>227 ) {
        document.getElementById("dkim_out").style.backgroundColor='yellow';
      };
  
      document.getElementById("result").style.display='block';
      return false;
}

function polish_transfer () {
      var first_name = document.forms[0].elements[0].value;
      var customer_mail= document.forms[0].elements[1].value;
      var main_domain= document.forms[0].elements[2].value;
      var ExS_pass= document.forms[0].elements[3].value;
      var IQ_pass= document.forms[0].elements[4].value;
      var warmup = document.getElementById("tr_bustype").value+document.getElementById("tr_country").value;
     // alert(warmup);
  
  var table="TABLE";
  switch(warmup) {
  /* Affiliate */
    case "A_PL":
          table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>WP/o2</td><td>wp.*/o2.pl/tlen.pl</td><td>500</td></tr><tr><td>Onet</td><td>onet.*/op.pl/vp.pl</td><td>500</td></tr><tr><td>Interia</td><td>interia.*</td><td>500</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>5 000</td></tr></tfoot></table><br>"
          break;
    case "A_US":
    case "A_UK":
    case "A_DE":
          table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>AOL</td><td>aol.*/aim.com/verizon.net</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>5 000</td></tr></tfoot></table><br>"
          break;
    case "A_FR":
         table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Orange</td><td>orange.fr/wanadoo.fr</td><td>500</td></tr><tr><td>Free</td><td>free.fr/aliceadsl.fr</td><td>500</td></tr><tr><td>SFR</td><td>sfr.fr/neuf.fr/cegetel.net/club-internet.fr</td><td>500</td></tr><tr><td>La Poste</td><td>laposte.net</td><td>500</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>6 500</td></tr></tfoot></table><br>"
         break;
    case "A_RU":
         table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Mail.Ru</td><td>mail.ru/my.com</td><td>500</td></tr><tr><td>Yandex</td><td>yandex.ru</td><td>500</td></tr><tr><td>Rambler</td><td>rambler.ru</td><td>500</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>5 000</td></tr></tfoot></table><br>"
         break;
    case "A_IT":
          table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Telecom Italia</td><td>alice.it/aliceposta.it/tin.it</td><td>500</td></tr><tr><td>Italiaonline</td><td>libero.it</td><td>500</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>5 500</td></tr></tfoot></table><br>"
          break;
    case "A_CH":
         table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Tencent QQ</td><td>qq.com</td><td>500</td></tr><tr><td>NetEase</td><td>163.com/netease.com</td><td>500</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>5 500</td></tr></tfoot></table><br>"
        break;
    case "A_CZ":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Seznam</td><td>seznam.cz</td><td>500</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>4 000</td></tr></tfoot></table><br>"
        break;
    case "A_IN":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>500</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>500</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>500</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>3 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>4 500</td></tr></tfoot></table><br>"
        break;
/* ECOMMERCE */
    case "E_PL":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1000</td></tr><tr><td>WP/o2</td><td>wp.*/o2.pl/tlen.pl</td><td>1000</td></tr><tr><td>Onet</td><td>onet.*/op.pl/vp.pl</td><td>1000</td></tr><tr><td>Interia</td><td>interia.*</td><td>1000</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>10 000</td></tr></tfoot></table><br>"
          break;
    case "E_US":
    case "E_UK":
    case "E_DE":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>AOL</td><td>aol.*/aim.com/verizon.net</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>10 000</td></tr></tfoot></table><br>"
        break;
    case "E_FR":
       table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Orange</td><td>orange.fr/wanadoo.fr</td><td>1 000</td></tr><tr><td>Free</td><td>free.fr/aliceadsl.fr</td><td>1 000</td></tr><tr><td>SFR</td><td>sfr.fr/neuf.fr/cegetel.net/club-internet.fr</td><td>1 000</td></tr><tr><td>La Poste</td><td>laposte.net</td><td>1 000</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>13 000</td></tr></tfoot></table><br>"
        break;
    case "E_RU":
       table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><tr><td>Mail.Ru</td><td>mail.ru/my.com</td><td>1 000</td></tr><tr><td>Yandex</td><td>yandex.ru</td><td>1 000</td></tr><tr><td>Rambler</td><td>rambler.ru</td><td>1 000</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>10 000</td></tr></tfoot></table><br>"
        break;
    case "E_IT":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Telecom Italia</td><td>alice.it/aliceposta.it/tin.it</td><td>1 000</td></tr><tr><td>Italiaonline</td><td>libero.it</td><td>1 000</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>11 000</td></tr></tfoot></table><br>"
        break;
    case "E_CH":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Tencent QQ</td><td>qq.com</td><td>1 000</td></tr><tr><td>NetEase</td><td>163.com/netease.com</td><td>1 000</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>11 000</td></tr></tfoot></table><br>"
        break;
    case "E_CZ":
        table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Seznam</td><td>seznam.cz</td><td>1 000</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>8 000</td></tr></tfoot></table><br>"
        break;
    case "E_IN":
         table="<table class='table table-bordered table-nonfluid'><thead><tr><th width=300px>Rodzina domen</th><th width=320px>Domena</th><th width=100px>Max</th></tr></thead><tr><td>Gmail</td><td>gmail.com</td><td>1 000</td></tr><tr><td>Yahoo</td><td>yahoo.*/ymail.com/rocketmail.com</td><td>1 000</td></tr><tr><td>Outlook.com</td><td>outlook.*/hotmail.*/msn.*/live.*</td><td>1 000</td></tr><tr><td>Pozostałe</td><td>*.*</td><td>6 000</td></tr><tfoot><tr class='bold'><td>Wszystkie</td><td>Wszystkie</td><td>9 000</td></tr></tfoot></table><br>"
        break;
      }
    //alert(warmup_gmail);

      document.getElementById("result").innerHTML = 
        "<pt>Jednostka biznesowa jest gotowa do rozpoczęcia wysyłek ("+main_domain+")<br><br>"
  
        +"Dzień dobry, "+first_name+"<br><br>"
        
        +"Wszystkie ustawienia oraz uwierzytelnianie działają prawidłowo. Możemy zaczynać!<br><br>"

        +"<span class='red'>Uprzejmie prosimy o potwierdzenie odbioru niniejszych instrukcji i rekomendacji.<br>"
        +"Dzień przekazania danych dostępowych wyznacza start okresu rozliczeniowego.</span><br><br>"
  
        +"<h5><span class='bold'>KONTO UŻYTKOWNIKA</span></h5>"
        
        +"Logowanie jest możliwe pod następującym adresem:<br>" +
        "<a class='bold' href=https://service"+document.forms[0].elements['OutputId'].value+".esv2.com> https://service"+document.forms[0].elements['OutputId'].value+".esv2.com</a><br>"
        
        +"<span class='bold'>Email: "+customer_mail+"</span><br>" 
        +"<span class='bold'>Hasło: "+ExS_pass+"</span><br> (Ustawienia > Konto użytkownika > Zmiana hasła)<br><br>"
        +"W celu utworzenia dodatkowych kont należy udać się do zakładki Ustawienia<br> > Jednostka biznesowa > Użytkownicy," 
        +"gdzie można skonfigurować reguły<br> dostępu do poszczególnych sekcji systemu dla każdego konta użytkownika.<br><br>"
        
        +"<h5><span class='bold'>SKRZYNKA ODBIORCZA</span></h5>"

        +"Utworzyliśmy skrzynkę (catch-all) do wykorzystania w polach 'Od'/'Odpowiedz do':<br>"
        +"<a href=https://mail."+main_domain+" >https://mail."+main_domain+"</a><br>"
        +"<span class='bold'>Login: info@"+main_domain+"</span><br>"
        +"<span class='bold'>Hasło: "+IQ_pass+"</span><br><br>"

        +"<div class='text-info'>Sugerujemy regularnie sprawdzać skrzynkę odbiorczą adresu email, który ma<br>być używany w polu 'Odpowiedz do', w celu niezwłocznego odpowiadania na<br>pisemne żądania wypisu z listy oraz na pozostałe zapytania subskrybentów. <br> Wysoka responsywność wpływa na zapewnienie właściwej dostarczalności. </div><br>" 

        +"<h5><span class='bold'>PROWADZENIE WYSYŁEK</span></h5>"

        +"Przed rozpoczęciem pierwszej kampanii sugerujemy wybór odpowiednich odbiorców<br>"
        +"wiadomości z dostępnej bazy. Na odbiorców powinni składać się niedawno dodani<br>" 
        +"subskrybenci, którzy otrzymali wcześniej przynajmniej 2-3 kampanie wysyłkowe,<br>"
        +"a także otworzyli niektóre z nich bez zgłaszania skarg lub żądania usunięcia z listy.<br><br>"
        +"Poniżej znajdują się propozycje początkowych wolumenów do wybranych dostawców:<br>"

        +table
  
        +"<h5><span class='bold'>1) Kontrola wolumenu</span></h5>"
        +"Zadowalająca dostarczalność jest dobrym momentem na zwiększenie wolumenu.<br>"
        +"W przeciwnym razie należy rozciągnąć czas wysyłki, aby zredukować liczbę zwrotek.<br>"
        +"Jeśli liczba odbitych wiadomości nadal będzie duża, polecamy zmniejszyć wolumen:<br><br>"
  
        +"<table class='table table-bordered table-nonfluid'><thead><tr><th width=150px>Dostarczalność</th><th width=520px>Działanie</th></tr></thead><tbody><tr><td>> 90%</td><td>Zwiększenie wolumenu o 10-50% bieżącego limitu wysyłek.</td></tr><tr><td>10-90%</td><td>Zmniejszenie wolumenu o 10-90% zależnie od wskaźnika zwrotek.</td></tr><tr><td>&#60 10% </td><td>Wstrzymanie wysyłek. Twój opiekun skontaktuje się z dostawcą.</td></tr></tbody></table><br>"

        +"<h5><span class='bold'>2) Jakość danych</span></h5>"
        +"Wszystkie adresy email, które w przeszłości (przed rozpoczęciem wysyłek z platformy<br>"
        +"ExpertSender) zwróciły twarde zwrotki, należy dodać albo do czarnej listy albo do listy<br>" 
        +"wykluczeń w Jednostce Biznesowej. Ponadto, warto rozważyć zaprzestanie wysyłek do<br>"
        +"tych subskrybentów, którzy nie otworzyli żadnej wiadomości przez co najmniej sześć<br>"
        +"miesięcy od daty dodania do listy. W rezultacie umożliwi to spore zmniejszenie ryzyka <br>"
        +'wysłania wiadomości do nieistniejących adresów email, "spamtrapów", a także do<br>'
        +"niezainteresowanych odbiorców. Regularna wysyłka do tych ostatnich ma negatywny<br>"
        +"miesięcy od daty dodania do listy. W rezultacie umożliwi to spore zmniejszenie ryzyka <br>"
        +"wpływ na dostarczalność (np. do Gmaila).<br><br>"
  
        +"<h5><span class='bold'>3) Segmentacja</span></h5>"
        +"Kontrola dziennego wolumenu jest możliwa dzięki segmentom, które można stworzyć<br>"
        +"w sekcji Subskrybenci > Segmenty. Przykładowo, każdy segment może odpowiadać<br>" 
        +"innej rodzinie domen. Wystarczy dodać wyrażenie dla atrybutu 'Email należy do <br>" 
        +"rodziny domen [wybierz wartość]' i ograniczyć liczbę subskrybentów w segmencie.<br><br>" 
  
        
       
        
        +"<h5><span class='bold'>4) Rozciąganie czasu wysyłki</span></h5>"
        +"Wielu dostawców skrzynek pocztowych ogranicza maksymalną liczbę wiadomości,<br>"
        +"które dany nadawca może dostarczyć do skrzynek odbiorczych w ciągu godziny.<br>"
        +"Dzięki rozciąganiu czasu wysyłki, można te limity ominąć. Nasza rada, to wysyłka<br>"
        +"maksymalnie 10 tysięcy wiadomości w ciągu godziny. Po pierwszych kampaniach,<br>"
        +"bazując na wskaźniku dostarczonych wiadomości, można tę wartość zwiększyć<br>"
        +"lub zmniejszyć. Domyślnie, wszystkie wiadomości są skonfigurowane do używania<br>"
        +"automatycznego rozciągania czasu wysyłki. Zmiana wartości domyślnej jest<br>"
        +"możliwa w zakładce Ustawienia > Jednostka biznesowa > Ustawienia Ogólne."
        +"<br><br>"
  
        +"<h5><span class='bold'>OGÓLNE WSKAZÓWKI</span></h5>"
        +"<h5><span class='bold'>1) Nagłówek/Stopka</span></h5>"
        +"Można je stworzyć w sekcji Wiadomości > Szablony. Wszystkie zapisane szablony<br>"
        +"są dostępne do wyboru w edytorze HTML. W nagłówku warto zamieścić prośbę<br>"
        +"o dodanie adresu email z pola From wiadomości do książki adresowej odbiorcy<br>"
        +"oraz tag personalizacyjny <span class='bold'>*[link_wprzegladarce]*</span>, który na pewno wygeneruje<br>"
        +"dodatkowe kliknięcia.<br><br>"
  
        +"W stopce należy umieścić dane adresowe nadawcy. Wypełnienie odpowiednich<br>"
        +"pól w zakładce Ustawienia > Jednostka biznesowa > Adres nadawcy lub w sekcji<br>"
        +"Subskrybenci > Listy > Ustawienia (każda lista umożliwia wpisanie innych danych),<br>"
        +"pozwala na wykorzystanie tagów personalizacyjnych, takich jak <span class='bold'>*[klient_firma]*</span>, <br>"
        +"<span class='bold'>*[klient_ulica]*</span> lub <span class='bold'>*[klient_kod]*</span>. Należy pamiętać o umieszczeniu znacznika,<br>"
        +"który umożliwi wypisanie z listy, czyli <span class='bold red'>*[link_wypisz]</span>* (jego rozszerzona wersja<br>"
        +"może dodatkowo przekierować każdego wypisanego subskrybenta na stronę,<br>"
        +"która zostanie wpisana jako 'URL' wewnątrz tagu <span class='bold red'>${UnsubscribeLink('URL')})</span>).<br>"
        +"Poniżej znajdują się przykłady dla każdej wersji do umieszczenia w kodzie stopki:<br>"
        +"&#60a href='*[link_wypisz]*'>Wypisz&#60/a&#62<br>"
        +"&#60a href='${UnsubscribeLink('URL')}'>Wypisz&#60/a&#62<br>"
        +"Warto pamiętać także o tagu <span class='bold'>*[link_ustawienia]*</span>, który pozwala subskrybentom<br>"
        +"na edycję ich danych osobowych poprzez Centrum Preferencji. Jednak przed jego<br>"
        +"umieszczeniem w stopce trzeba udać się do sekcji Subskrybenci > Cechy i podjąć<br>"
        +"decyzję, które z danych osobowych mają być widoczne.<br><br>"
        
        +"<h5><span class='bold'>2) Kanały wysyłki (IP)</span></h5>"
        +"Domyślne ustawienia rozdzielają wolumen równomiernie na każdy kanał wysyłki.<br>"
        +"W sekcji Raportów można sprawdzić efektywność każdego z kanałów oddzielnie.<br>"
        +"Należy wybrać zakres czasowy, ograniczyć dane do konkretnej rodziny domen oraz <br>"
        +"zgrupować je po adresie IP. Gdy dany adres IP zwraca lepsze wyniki (lub gorsze) <br>"
        +"od innych, można zwiększyć (lub zmniejszyć) jego udział w wysyłkach. W tym celu, <br>"
        +"wystarczy przejść do sekcji Ustawienia > Jednostka biznesowa > Kanały wysyłki<br>"
        +"i odpowiednio zmodyfikować ustawienia.<br><br>"
        
        +"<h5><span class='bold'>3) Sprawdzanie czarnych list</span></h5>"
        +"Zdecydowanie rekomendujemy regularne korzystanie z opcji sprawdzania czarnych<br>"
        +"list podczas tworzenia wiadomości. Wystarczy kliknąć przycisk 'Sprawdź czarne listy'<br>"
        +"w edytorze HTML wiadomości. System dokona weryfikacji domen znajdujących się <br>"
        +"w treści wiadomości (a także wszystkich domen z przekierowań), a w przypadku <br>"
        +"znalezienia problemów, wyszczególni je w podsumowaniu. Każda domena obecna <br>"
        +"na czarnej liście powinna zostać usunięta z treści wiadomości lub wymieniona na <br>"
        +"inną. SPAMHAUS i URIBL, to dwa przykłady czarnych list, które mają największy<br>"
        +"negatywny wpływ na wskaźnik dostarczonych wiadomości.<br><br>"
  
        +"<h5><span class='bold'>4) Sprawdzanie ryzyka spamu</span></h5>"
        +"W edytorze HTML znajduje się przycisk 'Wyślij do listy kontrolnej'. Kliknięcie go,<br>"
        +"umożliwia wybór listy 'SpamAssassin' i wysłanie do niej edytowanej wiadomości.<br>"
        +"Po chwili, na adres użyty w polu From wiadomości, zostanie dostarczony raport<br>"
        +"z wynikami uwierzytelniania. Raport zawiera kilka szczegółowych paragrafów<br>"
        +"wraz z punktacją SpamAssassin. Im mniej punktów ona zawiera, tym większa <br>"
        +"szansa na dostarczenie wiadomości do folderu inbox.<br><br>"
       
        +"<h5><span class='bold'>API</span></h5>"
        +"Instrukcje wywołań API dla list i kampanii znajdują się pod poniższym linkiem:<br>"
        +"<a href= https://sites.google.com/a/expertsender.com/api-documentation/>https://sites.google.com/a/expertsender.com/api-documentation</a><br>"
        +"Klucz API dostępny jest w zakładce Ustawienia > Jednostka Biznesowa > API.<br><br>"
  
        +"<h5><span class='bold'>TREŚĆ DYNAMICZNA</span></h5>"
        +"Nasza dokumentacja znajduje się pod poniższym linkiem:<br>"
        +"<a href=https://sites.google.com/a/expertsender.com/dynamic-content-documentation/home>https://sites.google.com/a/expertsender.com/dynamic-content-documentation/home</a><br><br>"

      
        +"<h5><span class='bold'>SCENARIUSZE AUTOMATYZACJI</span></h5>"
        +"Przewodnik Użytkownika (funkcjonalność automatyzacji działań marketingowych,<br>" 
        +"która umożliwia tworzenie ścieżek zdarzeń marketingowych dla różnych kampanii:<br>" 
        +"lead nurturing, reaktywacyjne, porzucone koszyki zakupowe itp.) znajduje się tutaj:<br>"
        +"<a href=http://resources.expertsender.com/workflow-user-guide/>http://resources.expertsender.com/workflow-user-guide</a><br><br>"

        +"<h5><span class='bold'>KONTAKT</span></h5>"
        +"Gdy brakuje szukanych odpowiedzi na stronie <a href=http://resources.expertsender.com/qa/ >http://resources.expertsender.com/qa/</a><br>" 
        +"nasz zespół jest dostępny pod adresem <a href='mailto:experts@expertsender.com'>experts@expertsender.com</a> lub w sytuacjach<br> alarmowych (np. brak dostępu do systemu) pod adresem "+ 
        "<a href='mailto:alert@expertsender.com'>alert@expertsender.com</a><br><br>"
        
        +"Powodzenia!</pt><br>";
  
  
      document.getElementById("result").style.display='block';
      return false;}

function warm_up () {
var warmup = document.getElementById("tr_bustype").value+document.getElementById("tr_country").value;    
      var table="TABLE";
  switch(warmup) {
  /* Affiliate */
    case "A_PL":
          table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>WP/o2</th><th>Onet</th><th>Interia</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>2</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>3</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>4</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>5</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>6</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>7</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr> <tr><td>8</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr> <tr><td>9</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr> <tr><td>10</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr> <tr><td>11</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr> <tr><td>12</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr> <tr><td>13</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>16.4k</td></tr> <tr><td>14</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>16.4k</td></tr> <tr><td>15</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>23.0k</td></tr> <tr><td>16</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>23.0k</td></tr> <tr><td>17</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>31.0k</td></tr> <tr><td>18</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>31.0k</td></tr> <tr><td>19</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>40.3k</td></tr> <tr><td>20</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>40.3k</td></tr> <tr><td>21</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>50.4k</td></tr> <tr><td>22</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>50.4k</td></tr> <tr><td>23</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>62.0k</td></tr> <tr><td>24</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>62.0k</td></tr> <tr><td>25</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>74.4k</td></tr> <tr><td>26</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>74.4k</td></tr> <tr><td>27</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>87.0k</td></tr> <tr><td>28</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>87.0k</td></tr> <tr><td>29</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>100.0k</td></tr> <tr><td>30</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>100.0k</td></tr></tbody></table>"
          break;
    case "A_US":
    case "A_DE":
    case "A_UK":
          table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>AOL</th><th>Outlook.com</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>2</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>3</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>4</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>5</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>6</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr> <tr><td>7</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr> <tr><td>8</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr> <tr><td>9</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr> <tr><td>10</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr> <tr><td>11</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr> <tr><td>12</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr> <tr><td>13</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>16.4k</td></tr> <tr><td>14</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>16.4k</td></tr> <tr><td>15</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>23.0k</td></tr> <tr><td>16</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>23.0k</td></tr> <tr><td>17</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>31.0k</td></tr> <tr><td>18</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>31.0k</td></tr> <tr><td>19</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>40.3k</td></tr> <tr><td>20</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>40.3k</td></tr> <tr><td>21</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>50.4k</td></tr> <tr><td>22</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>50.4k</td></tr> <tr><td>23</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>62.0k</td></tr> <tr><td>24</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>62.0k</td></tr> <tr><td>25</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>74.4k</td></tr> <tr><td>26</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>74.4k</td></tr> <tr><td>27</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>87.0k</td></tr> <tr><td>28</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>87.0k</td></tr> <tr><td>29</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>100.0k</td></tr> <tr><td>30</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>100.0k</td></tr></tbody></table>";
          break;
    case "A_FR":
         table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>Outlook.com</th><th>Orange</th><th>Free</th><th>SFR</th><th>La Poste</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>6.5k</td></tr> <tr><td>2</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>6.5k</td></tr> <tr><td>3</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>6.5k</td></tr> <tr><td>4</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>6.5k</td></tr> <tr><td>5</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>6.5k</td></tr> <tr><td>6</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>6.5k</td></tr> <tr><td>7</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>9.8k</td></tr> <tr><td>8</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>9.8k</td></tr> <tr><td>9</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>9.8k</td></tr> <tr><td>10</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>14.7k</td></tr> <tr><td>11</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>14.7k</td></tr> <tr><td>12</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>14.7k</td></tr> <tr><td>13</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>21.3k</td></tr> <tr><td>14</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>21.3k</td></tr> <tr><td>15</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>29.8k</td></tr> <tr><td>16</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>29.8k</td></tr> <tr><td>17</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>40.3k</td></tr> <tr><td>18</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>40.3k</td></tr> <tr><td>19</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>52.4k</td></tr> <tr><td>20</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>52.4k</td></tr> <tr><td>21</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>65.5k</td></tr> <tr><td>22</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>65.5k</td></tr> <tr><td>23</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>80.1k</td></tr> <tr><td>24</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>80.1k</td></tr> <tr><td>25</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>96.1k</td></tr> <tr><td>26</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>96.1k</td></tr> <tr><td>27</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>113.0k</td></tr> <tr><td>28</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>113.0k</td></tr> <tr><td>29</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>130.0k</td></tr> <tr><td>30</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>130.0k</td></tr></tbody></table>"
         break;
    case "A_RU":
         table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Mail.ru</th><th>Yandex</th><th>Rambler</th><th>Other</th><th>Total</th></tr></thead><tbody><tr><td>1</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr><tr><td>2</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr><tr><td>3</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr><tr><td>4</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr><tr><td>5</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr><tr><td>6</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.0k</td></tr><tr><td>7</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr><tr><td>8</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr><tr><td>9</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>7.5k</td></tr><tr><td>10</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr><tr><td>11</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr><tr><td>12</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>11.3k</td></tr><tr><td>13</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>16.4k</td></tr><tr><td>14</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>16.4k</td></tr><tr><td>15</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>23.0k</td></tr><tr><td>16</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>23.0k</td></tr><tr><td>17</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>31.0k</td></tr><tr><td>18</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>31.0k</td></tr><tr><td>19</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>40.3k</td></tr><tr><td>20</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>40.3k</td></tr><tr><td>21</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>50.4k</td></tr><tr><td>22</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>50.4k</td></tr><tr><td>23</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>62.0k</td></tr><tr><td>24</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>62.0k</td></tr><tr><td>25</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>74.4k</td></tr><tr><td>26</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>74.4k</td></tr><tr><td>27</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>87.0k</td></tr><tr><td>28</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>87.0k</td></tr><tr><td>29</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>100.0k</td></tr><tr><td>30</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>100.0k</td></tr></tbody></table>"
         break;
    case "A_IT":
          table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>Outlook.com</th><th>Telecom Italia</th><th>Italiaonline</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>2</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>3</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>4</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>5</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>6</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>7</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>8.3k</td></tr> <tr><td>8</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>8.3k</td></tr> <tr><td>9</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>8.3k</td></tr> <tr><td>10</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>12.4k</td></tr> <tr><td>11</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>12.4k</td></tr> <tr><td>12</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>12.4k</td></tr> <tr><td>13</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>18.0k</td></tr> <tr><td>14</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>18.0k</td></tr> <tr><td>15</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>25.3k</td></tr> <tr><td>16</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>25.3k</td></tr> <tr><td>17</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>34.1k</td></tr> <tr><td>18</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>34.1k</td></tr> <tr><td>19</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>44.3k</td></tr> <tr><td>20</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>44.3k</td></tr> <tr><td>21</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>55.4k</td></tr> <tr><td>22</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>55.4k</td></tr> <tr><td>23</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>68.0k</td></tr> <tr><td>24</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>68.0k</td></tr> <tr><td>25</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>81.6k</td></tr> <tr><td>26</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>81.6k</td></tr> <tr><td>27</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>95.7k</td></tr> <tr><td>28</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>95.7k</td></tr> <tr><td>29</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>110.0k</td></tr> <tr><td>30</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>110.0k</td></tr></tbody></table>"
          break;
    case "A_CH":
         table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>Outlook.com</th><th>Tencent QQ</th><th>NetEase</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>2</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>3</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>4</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>5</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>6</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>5.5k</td></tr> <tr><td>7</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>8.3k</td></tr> <tr><td>8</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>8.3k</td></tr> <tr><td>9</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>8.3k</td></tr> <tr><td>10</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>12.4k</td></tr> <tr><td>11</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>12.4k</td></tr> <tr><td>12</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>12.4k</td></tr> <tr><td>13</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>18.0k</td></tr> <tr><td>14</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>18.0k</td></tr> <tr><td>15</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>25.3k</td></tr> <tr><td>16</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>25.3k</td></tr> <tr><td>17</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>34.1k</td></tr> <tr><td>18</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>34.1k</td></tr> <tr><td>19</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>44.3k</td></tr> <tr><td>20</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>44.3k</td></tr> <tr><td>21</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>55.4k</td></tr> <tr><td>22</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>55.4k</td></tr> <tr><td>23</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>68.0k</td></tr> <tr><td>24</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>68.0k</td></tr> <tr><td>25</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>81.6k</td></tr> <tr><td>26</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>81.6k</td></tr> <tr><td>27</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>95.7k</td></tr> <tr><td>28</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>95.7k</td></tr> <tr><td>29</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>110.0k</td></tr> <tr><td>30</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>110.0k</td></tr></tbody></table>"
        break;
    case "A_CZ":
        table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Seznam</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.0k</td></tr> <tr><td>2</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.0k</td></tr> <tr><td>3</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.0k</td></tr> <tr><td>4</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.0k</td></tr> <tr><td>5</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.0k</td></tr> <tr><td>6</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.0k</td></tr> <tr><td>7</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>6.0k</td></tr> <tr><td>8</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>6.0k</td></tr> <tr><td>9</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>6.0k</td></tr> <tr><td>10</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>9.1k</td></tr> <tr><td>11</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>9.1k</td></tr> <tr><td>12</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>9.1k</td></tr> <tr><td>13</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>13.1k</td></tr> <tr><td>14</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>13.1k</td></tr> <tr><td>15</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>18.4k</td></tr> <tr><td>16</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>18.4k</td></tr> <tr><td>17</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>24.8k</td></tr> <tr><td>18</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>24.8k</td></tr> <tr><td>19</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>32.3k</td></tr> <tr><td>20</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>32.3k</td></tr> <tr><td>21</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>40.3k</td></tr> <tr><td>22</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>40.3k</td></tr> <tr><td>23</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>49.9k</td></tr> <tr><td>24</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>49.9k</td></tr> <tr><td>25</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>59.9k</td></tr> <tr><td>26</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>59.9k</td></tr> <tr><td>27</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>69.6k</td></tr> <tr><td>28</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>69.6k</td></tr> <tr><td>29</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>80.0k</td></tr> <tr><td>30</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>80.0k</td></tr></tbody></table>"
        break;
    case "A_IN":
        table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>Outlook.com</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.5k</td></tr> <tr><td>2</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.5k</td></tr> <tr><td>3</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.5k</td></tr> <tr><td>4</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.5k</td></tr> <tr><td>5</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.5k</td></tr> <tr><td>6</td><td>0.5k</td><td>0.5k</td><td>0.5k</td><td>3.0k</td><td>4.5k</td></tr> <tr><td>7</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>6.8k</td></tr> <tr><td>8</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>6.8k</td></tr> <tr><td>9</td><td>0.8k</td><td>0.8k</td><td>0.8k</td><td>4.5k</td><td>6.8k</td></tr> <tr><td>10</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>10.2k</td></tr> <tr><td>11</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>10.2k</td></tr> <tr><td>12</td><td>1.1k</td><td>1.1k</td><td>1.1k</td><td>6.8k</td><td>10.2k</td></tr> <tr><td>13</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>14.8k</td></tr> <tr><td>14</td><td>1.6k</td><td>1.6k</td><td>1.6k</td><td>9.9k</td><td>14.8k</td></tr> <tr><td>15</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>20.7k</td></tr> <tr><td>16</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.8k</td><td>20.7k</td></tr> <tr><td>17</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>27.9k</td></tr> <tr><td>18</td><td>3.1k</td><td>3.1k</td><td>3.1k</td><td>18.6k</td><td>27.9k</td></tr> <tr><td>19</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>36.3k</td></tr> <tr><td>20</td><td>4.0k</td><td>4.0k</td><td>4.0k</td><td>24.2k</td><td>36.3k</td></tr> <tr><td>21</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>45.4k</td></tr> <tr><td>22</td><td>5.0k</td><td>5.0k</td><td>5.0k</td><td>30.3k</td><td>45.4k</td></tr> <tr><td>23</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>55.9k</td></tr> <tr><td>24</td><td>6.0k</td><td>6.0k</td><td>6.0k</td><td>37.8k</td><td>55.9k</td></tr> <tr><td>25</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>67.1k</td></tr> <tr><td>26</td><td>7.2k</td><td>7.2k</td><td>7.2k</td><td>45.4k</td><td>67.1k</td></tr> <tr><td>27</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>78.3k</td></tr> <tr><td>28</td><td>8.7k</td><td>8.7k</td><td>8.7k</td><td>52.2k</td><td>78.3k</td></tr> <tr><td>29</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>90.0k</td></tr> <tr><td>30</td><td>10.0k</td><td>10.0k</td><td>10.0k</td><td>60.0k</td><td>90.0k</td></tr></tbody></table>"
        break;
/* ECOMMERCE */
    case "E_PL":
        table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>WP/o2</th><th>Onet</th><th>Interia</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>2</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>3</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>4</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>5</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>6</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>7</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>8</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>9</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>10</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>11</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>12</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>13</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>32.8k</td></tr> <tr><td>14</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>32.8k</td></tr> <tr><td>15</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>45.9k</td></tr> <tr><td>16</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>45.9k</td></tr> <tr><td>17</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>62.0k</td></tr> <tr><td>18</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>62.0k</td></tr> <tr><td>19</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>80.6k</td></tr> <tr><td>20</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>80.6k</td></tr> <tr><td>21</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>100.8k</td></tr> <tr><td>22</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>100.8k</td></tr> <tr><td>23</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>123.9k</td></tr> <tr><td>24</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>123.9k</td></tr> <tr><td>25</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>148.7k</td></tr> <tr><td>26</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>148.7k</td></tr> <tr><td>27</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>173.9k</td></tr> <tr><td>28</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>173.9k</td></tr> <tr><td>29</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>200.0k</td></tr> <tr><td>30</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>200.0k</td></tr></tbody></table>"
          break;
    case "E_UK":
    case "E_US":
    case "E_DE":
        table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>AOL</th><th>Outlook.com</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>2</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>3</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>4</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>5</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>6</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>7</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>8</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>9</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>10</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>11</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>12</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>13</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>32.8k</td></tr> <tr><td>14</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>32.8k</td></tr> <tr><td>15</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>45.9k</td></tr> <tr><td>16</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>45.9k</td></tr> <tr><td>17</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>62.0k</td></tr> <tr><td>18</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>62.0k</td></tr> <tr><td>19</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>80.6k</td></tr> <tr><td>20</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>80.6k</td></tr> <tr><td>21</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>100.8k</td></tr> <tr><td>22</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>100.8k</td></tr> <tr><td>23</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>123.9k</td></tr> <tr><td>24</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>123.9k</td></tr> <tr><td>25</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>148.7k</td></tr> <tr><td>26</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>148.7k</td></tr> <tr><td>27</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>173.9k</td></tr> <tr><td>28</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>173.9k</td></tr> <tr><td>29</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>200.0k</td></tr> <tr><td>30</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>200.0k</td></tr></tbody></table>"
        break;
    case "E_FR":
       table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>Outlook.com</th><th>Orange</th><th>Free</th><th>SFR</th><th>La Poste</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>13.1k</td></tr> <tr><td>2</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>13.1k</td></tr> <tr><td>3</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>13.1k</td></tr> <tr><td>4</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>13.1k</td></tr> <tr><td>5</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>13.1k</td></tr> <tr><td>6</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>13.1k</td></tr> <tr><td>7</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>19.6k</td></tr> <tr><td>8</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>19.6k</td></tr> <tr><td>9</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>19.6k</td></tr> <tr><td>10</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>29.4k</td></tr> <tr><td>11</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>29.4k</td></tr> <tr><td>12</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>29.4k</td></tr> <tr><td>13</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>42.6k</td></tr> <tr><td>14</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>42.6k</td></tr> <tr><td>15</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>59.7k</td></tr> <tr><td>16</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>59.7k</td></tr> <tr><td>17</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>80.6k</td></tr> <tr><td>18</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>80.6k</td></tr> <tr><td>19</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>104.8k</td></tr> <tr><td>20</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>104.8k</td></tr> <tr><td>21</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>131.0k</td></tr> <tr><td>22</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>131.0k</td></tr> <tr><td>23</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>160.2k</td></tr> <tr><td>24</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>160.2k</td></tr> <tr><td>25</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>192.2k</td></tr> <tr><td>26</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>192.2k</td></tr> <tr><td>27</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>226.1k</td></tr> <tr><td>28</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>226.1k</td></tr> <tr><td>29</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>260.0k</td></tr> <tr><td>30</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>260.0k</td></tr></tbody></table>";
        break;
    case "E_RU":
       table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Mail.ru</th><th>Yandex</th><th>Rambler</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>2</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>3</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>4</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>5</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>6</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>10.1k</td></tr> <tr><td>7</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>8</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>9</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>15.1k</td></tr> <tr><td>10</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>11</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>12</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>22.6k</td></tr> <tr><td>13</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>32.8k</td></tr> <tr><td>14</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>32.8k</td></tr> <tr><td>15</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>45.9k</td></tr> <tr><td>16</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>45.9k</td></tr> <tr><td>17</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>62.0k</td></tr> <tr><td>18</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>62.0k</td></tr> <tr><td>19</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>80.6k</td></tr> <tr><td>20</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>80.6k</td></tr> <tr><td>21</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>100.8k</td></tr> <tr><td>22</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>100.8k</td></tr> <tr><td>23</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>123.9k</td></tr> <tr><td>24</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>123.9k</td></tr> <tr><td>25</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>148.7k</td></tr> <tr><td>26</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>148.7k</td></tr> <tr><td>27</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>173.9k</td></tr> <tr><td>28</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>173.9k</td></tr> <tr><td>29</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>200.0k</td></tr> <tr><td>30</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>200.0k</td></tr></tbody></table>"
        break;
    case "E_IT":
        table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>Outlook.com</th><th>Telecom Italia</th><th>Italiaonline</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>2</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>3</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>4</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>5</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>6</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>7</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>16.6k</td></tr> <tr><td>8</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>16.6k</td></tr> <tr><td>9</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>16.6k</td></tr> <tr><td>10</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>24.9k</td></tr> <tr><td>11</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>24.9k</td></tr> <tr><td>12</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>24.9k</td></tr> <tr><td>13</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>36.1k</td></tr> <tr><td>14</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>36.1k</td></tr> <tr><td>15</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>50.5k</td></tr> <tr><td>16</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>50.5k</td></tr> <tr><td>17</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>68.2k</td></tr> <tr><td>18</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>68.2k</td></tr> <tr><td>19</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>88.7k</td></tr> <tr><td>20</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>88.7k</td></tr> <tr><td>21</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>110.8k</td></tr> <tr><td>22</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>110.8k</td></tr> <tr><td>23</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>136.0k</td></tr> <tr><td>24</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>136.0k</td></tr> <tr><td>25</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>163.2k</td></tr> <tr><td>26</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>163.2k</td></tr> <tr><td>27</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>191.3k</td></tr> <tr><td>28</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>191.3k</td></tr> <tr><td>29</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>220.0k</td></tr> <tr><td>30</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>220.0k</td></tr></tbody></table>"
        break;
    case "E_CH":
        table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>Outlook.com</th><th>Tencent QQ</th><th>NetEase</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>2</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>3</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>4</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>5</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>6</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>11.1k</td></tr> <tr><td>7</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>16.6k</td></tr> <tr><td>8</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>16.6k</td></tr> <tr><td>9</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>16.6k</td></tr> <tr><td>10</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>24.9k</td></tr> <tr><td>11</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>24.9k</td></tr> <tr><td>12</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>24.9k</td></tr> <tr><td>13</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>36.1k</td></tr> <tr><td>14</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>36.1k</td></tr> <tr><td>15</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>50.5k</td></tr> <tr><td>16</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>50.5k</td></tr> <tr><td>17</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>68.2k</td></tr> <tr><td>18</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>68.2k</td></tr> <tr><td>19</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>88.7k</td></tr> <tr><td>20</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>88.7k</td></tr> <tr><td>21</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>110.8k</td></tr> <tr><td>22</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>110.8k</td></tr> <tr><td>23</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>136.0k</td></tr> <tr><td>24</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>136.0k</td></tr> <tr><td>25</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>163.2k</td></tr> <tr><td>26</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>163.2k</td></tr> <tr><td>27</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>191.3k</td></tr> <tr><td>28</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>191.3k</td></tr> <tr><td>29</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>220.0k</td></tr> <tr><td>30</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>220.0k</td></tr></tbody></table>"
        break;
    case "E_CZ":
        table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Seznam</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>8.0k</td></tr> <tr><td>2</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>8.0k</td></tr> <tr><td>3</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>8.0k</td></tr> <tr><td>4</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>8.0k</td></tr> <tr><td>5</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>8.0k</td></tr> <tr><td>6</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>8.0k</td></tr> <tr><td>7</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>12.1k</td></tr> <tr><td>8</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>12.1k</td></tr> <tr><td>9</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>12.1k</td></tr> <tr><td>10</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>18.1k</td></tr> <tr><td>11</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>18.1k</td></tr> <tr><td>12</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>18.1k</td></tr> <tr><td>13</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>26.2k</td></tr> <tr><td>14</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>26.2k</td></tr> <tr><td>15</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>36.7k</td></tr> <tr><td>16</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>36.7k</td></tr> <tr><td>17</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>49.6k</td></tr> <tr><td>18</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>49.6k</td></tr> <tr><td>19</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>64.5k</td></tr> <tr><td>20</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>64.5k</td></tr> <tr><td>21</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>80.6k</td></tr> <tr><td>22</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>80.6k</td></tr> <tr><td>23</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>99.8k</td></tr> <tr><td>24</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>99.8k</td></tr> <tr><td>25</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>119.7k</td></tr> <tr><td>26</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>119.7k</td></tr> <tr><td>27</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>139.1k</td></tr> <tr><td>28</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>139.1k</td></tr> <tr><td>29</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>160.0k</td></tr> <tr><td>30</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>160.0k</td></tr></tbody></table>"
        break;
    case "E_IN":
         table="<table class='table table-striped table-bordered table-nonfluid'><thead><tr><th>Day</th><th>Gmail</th><th>Yahoo</th><th>Outlook.com</th><th>Other</th><th>Total</th></tr></thead><tbody> <tr><td>1</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>9.1k</td></tr> <tr><td>2</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>9.1k</td></tr> <tr><td>3</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>9.1k</td></tr> <tr><td>4</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>9.1k</td></tr> <tr><td>5</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>9.1k</td></tr> <tr><td>6</td><td>1.0k</td><td>1.0k</td><td>1.0k</td><td>6.0k</td><td>9.1k</td></tr> <tr><td>7</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>13.6k</td></tr> <tr><td>8</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>13.6k</td></tr> <tr><td>9</td><td>1.5k</td><td>1.5k</td><td>1.5k</td><td>9.1k</td><td>13.6k</td></tr> <tr><td>10</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>20.4k</td></tr> <tr><td>11</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>20.4k</td></tr> <tr><td>12</td><td>2.3k</td><td>2.3k</td><td>2.3k</td><td>13.6k</td><td>20.4k</td></tr> <tr><td>13</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>29.5k</td></tr> <tr><td>14</td><td>3.3k</td><td>3.3k</td><td>3.3k</td><td>19.7k</td><td>29.5k</td></tr> <tr><td>15</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>41.3k</td></tr> <tr><td>16</td><td>4.6k</td><td>4.6k</td><td>4.6k</td><td>27.6k</td><td>41.3k</td></tr> <tr><td>17</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>55.8k</td></tr> <tr><td>18</td><td>6.2k</td><td>6.2k</td><td>6.2k</td><td>37.2k</td><td>55.8k</td></tr> <tr><td>19</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>72.5k</td></tr> <tr><td>20</td><td>8.1k</td><td>8.1k</td><td>8.1k</td><td>48.4k</td><td>72.5k</td></tr> <tr><td>21</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>90.7k</td></tr> <tr><td>22</td><td>10.1k</td><td>10.1k</td><td>10.1k</td><td>60.5k</td><td>90.7k</td></tr> <tr><td>23</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>111.8k</td></tr> <tr><td>24</td><td>12.1k</td><td>12.1k</td><td>12.1k</td><td>75.6k</td><td>111.8k</td></tr> <tr><td>25</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>134.2k</td></tr> <tr><td>26</td><td>14.5k</td><td>14.5k</td><td>14.5k</td><td>90.7k</td><td>134.2k</td></tr> <tr><td>27</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>156.5k</td></tr> <tr><td>28</td><td>17.4k</td><td>17.4k</td><td>17.4k</td><td>104.3k</td><td>156.5k</td></tr> <tr><td>29</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>180.0k</td></tr> <tr><td>30</td><td>20.0k</td><td>20.0k</td><td>20.0k</td><td>120.0k</td><td>180.0k</td></tr></tbody></table>"
        break;
      }
  document.getElementById("result").innerHTML =table;
  document.getElementById("result").style.display='block';
  return false;
}

function selectText(containerid) {
        if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
        } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        };
};
