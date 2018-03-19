/*eslint-env browser*/
 function check() {
      
      var first_name = document.forms[0].elements[1].value;            
      var main_domain= document.forms[0].elements[2].value;
      var link_domian= document.forms[0].elements[3].value;
      var first_IP= document.forms[0].elements[4].value;
      var second_IP= document.forms[0].elements[5].value;
      var third_IP= document.forms[0].elements[6].value;
      var fourth_IP= document.forms[0].elements[7].value;
      var spf_tag= document.forms[0].elements[8].value;
      //var service= document.forms[0].elements[8].value;
      //var country= document.forms[0].elements[9].value;
      var google_site_verification=document.forms[0].elements[17].value;
      var dkim=document.forms[0].elements[18].value;  
    
      document.getElementById("result").innerHTML = "<div>Domain records setup instructions for "+main_domain+"<br>"+"<br>"+
      
      "Hello "+first_name+"<br>"+"<br>"+
      
      "At ExpertSender we put the reputation ownership in your hands. This means you will need to configure the DNS records of your sending and <span class='purple'>link masking ("+link_domian+")</span> domains at your domain hosting company."+"<br>"+"<br>"+
      
      "The setup requires a little bit of work with adjusting the domain records"+"<br>"+"but shouldn't take more than 10 minutes, even for a non-technical person."+"<br>"+"<br>"+
      "Please follow these instructions, including IQ mail server."+"<br>"+"Every DNS record should be checked at http://www.dnswatch.info/"+"<br>"+"<br>"+
      
      " <span class='red'>A) Domain records setup</span>"+"<br>"+
      "<span class='bold'>A records (bounce, Feedback Loop and dedicated IP setup):</span>"+"<br>"+
      "new A record for e."+main_domain+" pointing to: "+first_IP+"<br>"+
      "new A record for f."+main_domain+" pointing to: "+first_IP+"<br>"+
      "new A record for"+" "+"ip1."+main_domain+" pointing to:"+" "+first_IP+"<br>"+
      "new A record for"+" "+"ip2."+main_domain+" pointing to:"+" "+second_IP+"<br>"+
      "new A record for"+" "+"ip3."+main_domain+" pointing to:"+" "+third_IP+"<br>"+
      "new A record for"+" "+"ip4."+main_domain+" pointing to:"+" "+fourth_IP+
      
      "<br>"+"<br>"+"<span class='bold'>CNAME records (mail server login panel and link masking setup):</span>"+"<br>"+
      "new CNAME record for mail."+main_domain+" pointing to: roundcube.iq.pl"+"<br>"+
      "new CNAME record for <span class='purple'>links."+link_domian+"</span> pointing to: click-s"+document.forms[0].elements["OutputId"].value+"-"+document.forms[0].elements["country"].value+".esv2.com."+"<br>"+"<br>"+
      
      "<span class='bold'>MX records (mail server, bounce and Feedback Loop setup):</span>"+"<br>"+
      "new MX record (priority 5) for "+main_domain+" pointing to: mail.iq.pl"+"<br>"+
      "new MX record (priority 1) for "+main_domain+" pointing to: mx1.iq.pl"+"<br>"+
      "new MX record for e."+main_domain+" pointing to: e."+main_domain+"<br>"+
      "new MX record for f."+main_domain+" pointing to: f."+main_domain+"<br>"+"<br>"+
      
      "<span class='bold'>TXT records (SPF, Postmaster Tools and DKIM setup):</span>"+"<br>"+
      "new TXT record for e."+main_domain+" pointing to: v=spf1 include:"+spf_tag+" -all"+"<br>"+
      "new TXT record for "+main_domain+" pointing to: v=spf1 mx a ip4:86.111.240.0/21 include:"+spf_tag+" -all"+"<br>"+
      "new TXT record for "+main_domain+" pointing to: "+google_site_verification+"<br>"+
      "new TXT record for default1k._domainkey."+main_domain+" pointing to: "+dkim+"<br>"+"<br>"+

      "<span class='red'>B) Time zone selection</span>"+"<br>"+
      "Choose the time zone for the Unit. Use the following format: UTC +/- x (e.g. UTC -4)."+"<br>"+
      "<span class='bold'>IMPORTANT!</span> Unit's time zone cannot be changed after the setup."+"<br>"+"<br>"+

      "<span class='red'>C) ISP volume share</span>"+"<br>"+
      "Specify up to 10 domains representing the highest share of email addresses of your email database."+"<br>"+
      "This will help us create the corresponding domain families to be used in segments and reporting."+"<br>"+"<br>"+

      "<span class='red'>D) Questionnaire for FBL/whitelisting/future unblock procedures</span>"+"<br>"+
      "<span class='bold'>1.</span> What is the full company name and postal address?"+"<br>"+
      "<span class='bold'>2.</span> What is the contact phone number? (ISPs never call it)"+"<br>"+
      "<span class='bold'>3.</span> What is the company website URL?"+"<br>"+
      "<span class='bold'>4.</span> What is the website at which subscribers sign up? (please describe, if other means of opt-in are used)"+"<br>"+
      "<span class='bold'>5.</span> What is the link to the Privacy Policy?"+"<br>"+
      "<span class='bold'>6.</span> How would you describe the business that will involve sending emails from your business unit? (please be creative)"+"<br>"+
      "<span class='bold'>7.</span> What physical address will be used in the footer of the email messages? (requirement for many email laws around the world, e.g. CAN-SPAM in US)"+"<br>"+
      "<span class='bold'>8.</span> What is the database type? (own, managed, other*)"+"<br>"+
      "<span class='bold'>9.</span> What is the database permission level? (double opt-in, confirmed opt-in, single opt-in, co-registration, opt-out, other*)"+"<br>"+
      "*please describe"+"<br>"+"<br>"+

      "In case of any doubts do not hesitate to ask.</div>";
      
      return false;
 }

