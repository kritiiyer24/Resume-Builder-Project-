function validate(){ 
    var name=document.getElementById("name").value;
    var profession=document.getElementById("profession").value;
    var phone_number=document.getElementById("phone_number").value;
    var email=document.getElementById("email").value;
    var website_name=document.getElementById("website_name").value; 
    var location=document.getElementById("location").value; 
    var expertise=document.getElementById("expertise").value;
    var language=document.getElementById("language").value;
    var profile=document.getElementById("profile").value;
    var work_experience=document.getElementById("work_experience").value;
   
if(name==="")
{ 
    document.getElementById("nameError").innerHTML="Name Cannot Be Empty"; 
    document.getElementById("nameError").style="color:red";
}

else{ 
    document.getElementById("nameError").innerHTML=""; 
}

if(profession==="")
{ 
    document.getElementById("professionError").innerHTML="Profession Cannot Be Empty"; 
    document.getElementById("professionError").style="color:red";
}

else{ 
    document.getElementById("professionError").innerHTML=""; 
}

if(phone_number==="")
{ 
    document.getElementById("phone_numberError").innerHTML="Phone Number Cannot Be Empty"; 
    document.getElementById("phone_numberError").style="color:red";
}

else{ 
    document.getElementById("phone_numberError").innerHTML=""; 
} 

if(email==="")
{ 
    document.getElementById("emailError").innerHTML="Email Cannot Be Empty"; 
    document.getElementById("emailError").style="color:red";
}

else{ 
    document.getElementById("emailError").innerHTML=""; 
} 

if(expertise==="")
{ 
    document.getElementById("expertiseError").innerHTML="Expertise Cannot Be Empty"; 
    document.getElementById("expertiseError").style="color:red";
}

else{ 
    document.getElementById("expertiseError").innerHTML=""; 
} 

if(language==="")
{ 
    document.getElementById("languageError").innerHTML="Language(s) Cannot Be Empty"; 
    document.getElementById("languageError").style="color:red";
}

else{ 
    document.getElementById("languageError").innerHTML=""; 
} 

if(profile==="")
{ 
    document.getElementById("profileError").innerHTML="Profile Cannot Be Empty"; 
    document.getElementById("profileError").style="color:red";
}

else{ 
    document.getElementById("profileError").innerHTML=""; 
} 

if(work_experience==="")
{ 
    document.getElementById("work_experienceError").innerHTML="Work Experience Cannot Be Empty"; 
    document.getElementById("work_experienceError").style="color:red";
}

else{ 
    document.getElementById("work_experienceError").innerHTML=""; 
} 

document.getElementById("displayValues").innerHTML=`Name:${name}, <br> Profession:${profession}, <br> Phone Number: ${[phone_number]}, 
<br> Email:${email}, <br> Website Name:${website_name}, <br> Location:${location}, <br> Expertise:${expertise}, <br> Language(s): ${[language]}, <br> Profile:${profile}, <br> Work Experience:${work_experience}`
} 
