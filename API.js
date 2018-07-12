
const apiKey = '3bc0fcb13a634a4ba0db6bf6603e35a1';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');


window.addEventListener('load', e => {
    
    updateNews();
    update();
   check_empty();
  buttonToggleFun.toggle('default');
  buttonToggleFun.defaultView();
  saveComments();
 //  div_show();
  // div_hide();
    saveValues();
   // loadValues();
   
     //   saveData();
       // showLS();
    //div_hide1();
    //div_show1();
   // var byteString = atob(url);
   // var arrayBufferWithPNG = new ArrayBuffer(byteString.length);
  /*  var blob = new Blob([arrayBufferWithPNG], { type: "image/png" }),
        url = URL.createObjectURL(blob),
        img = new Image();

    img.onload = function () {
        URL.revokeObjectURL(this.src);     // clean-up memory
        document.body.appendChild(this);   // add image to DOM
    }
    img.src = url;   
                            // can now "stream" the bytes*/



// registerSW();

   /* if ('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('sw.js');
            console.log('sw registered');
        }catch(error)
        {
            console.log('sw failed');
        }
    }

    // updateSources();

/*async function updateSources() {
    const url = await fetch('https://newsapi.org/v2/sources');
    let response = await ajaxCall(url);
    sourceSelector.innerHTML = json.sources
        .map(src => '<option value="${src.id}">${src.name}</option>').join('\n');
}*/

});


window.addEventListener('online', () => location.reload());
function saveValues()
{
	localStorage._n=document.getElementById("name").value;
    localStorage._e=document.getElementById("email").value.toString();
    
}
/*function loadValues()
{
	document.getElementById("name").value = localStorage._name;
	document.getElementById("email").value = localStorage._email;
}*/

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
async function updateNews() {

    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;
    let response = await ajaxCall(url);
    response.articles.forEach(article => {
        $("#newsDiv .mainNews_img").attr('src', article.urlToImage);
        $("#newsDiv .title").text(article.title);
        $("#newsDiv .title").attr('href', article.url);
        $("#newsDiv .feature_article_content").text(article.description);

        $("#ajaxNews").append($("#newsDiv").html());

        $("#newsDiv .mainNews_img").attr('src', '');
        $("#newsDiv .title").text('');
        $("#newsDiv .title").attr('href', '');
        $("#newsDiv .feature_article_content").text('');
    });
}

async function update() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + apiKey;
    let response = await ajaxCall(url);
    //  response.articles.forEach(createArt);
    response.articles.forEach(article => {
        $("#splNewsDiv .news_img").attr('src', article.urlToImage);
        $("#splNewsDiv  .title1").text(article.title);
        $("#splNewsDiv  .title1").attr('href', article.url);
        $("#splNewsDiv  .feature_article_content").text(article.description);

        $("#ajaxNews").append($("#splNewsDiv").html());

        $("#splNewsDiv  .news_img").attr('src', '');
        $("#splNewsDiv  .title1").text('');
        $("#splNewsDiv  .title1").attr('href', '');
        $("#splNewsDiv  .feature_article_content").text('');
    });
}

async function ajaxCall(url) {

    const res = await fetch(url);
    return json = await res.json();
}


     

// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
    } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
    }

function showAlert(){
    alert ("Yay submission complete!");
}

    //Function To Display Popup
  
  
/* function createArt(article){
$("#splNewsDiv .news_img").attr('src',article.urlToImage);
$("#splNewsDiv .col-md-5 .title1").text(article.title);
$("#splNewsDiv .col-md-5 .title1").attr('href',article.url);
$("#splNewsDiv .col-md-5 .feature_article_content").text(article.description);

$("#splNewsDiv .news_img").on('click', function(){});

let newsDiv = document.querySelector('#splNewsDiv').querySelector('.news_img');

$("#ajaxNews").append($("#splNewsDiv").html());
//$("#ajaxNews").append($("#newsMainDiv").text());
 return true;
} 


function createArticle(article){

$("#newsMainDiv .mainNews_img").attr('src',article.urlToImage);
$("#newsMainDiv .title").text(article.title);
$("#newsMainDiv .title").attr('href',article.url);
$("#newsMainDiv .feature_article_content").text(article.description);

$("#newsMainDiv .mainNews_img").on('click', function(){});

let newsDiv = document.querySelector('#newsMainDiv').querySelector('.mainNews_img');

$("#ajaxNews").append($("#newsMainDiv").html());
 return true;
}
*/

function saveComments()
    {
       // localStorage._cm=document.getElementById("comments").value;
        
            var obj={comments:" "};
                obj.comments=document.getElementById('comments').value;
                //obj.phone=document.getElementById('phone').value;
        
            var listObj=localStorage.getItem('comments');
            if(listObj!=null){
              listObj=JSON.parse(listObj); //this will give array of object
              listObj.push(obj);
            }else{
              listObj=[obj]; //first time 
            }
           // Save Data in Local Storage 
            localStorage.setItem('comments',JSON.stringify(listObj)); 
           //Please check Local Storage which will be like
            //[{"name":"Anand","phone":"6546456456"}{"name":"Andy","phone":"78688"}]
        
        
       // localStorage._n=document.getElementById("name").value;
       //localStorage._e=document.getElementById("email").value.toString();
       /*var ArrayData =[];       
       
// store array to localstorage
localStorage.setItem("comments",  JSON.stringify(ArrayData));
// retrieve stored data (JSON stringified) and convert
var storedData = localStorage.getItem("ArrayData ");
if (storedData) {
    ArrayData = JSON.parse(storedData);
} */
      
        
    }
    function loadComments()
    {
       // document.getElementById("name").value=localStorage._n;
       // document.getElementById("email").value=localStorage._e;
        document.getElementById("comments").value=localStorage._cm;
    }

   
  
      
/* var buttonToggle = {
        showLogin: function(){
            //display loginButton
        },
        showLogout: function(){
            //display logout
        },
        showSignup: function(){
            //display signup
        },
        hideLogin: function(){
            //hide loginButton
        },
        hideLogout: function(){
            //hide logout
        },
        hideSignup: function(){
            //hide signup
        },
 }; */
 /*function div_show() {
    
     document.getElementById('signup').style.display = "none";
      //display loginButton
      document.getElementById('abc').style.display = "block";
      document.getElementById('login').style.display = "none";
    document.getElementById('logout').style.display = "block";
   
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    //document.getElementById('efg').style.display = "none";
    document.getElementById('login').style.display = "block";
    document.getElementById('logout').style.display = "none";
    document.getElementById('signup').style.display = "block";
    }

    */

document.getElementById("login").onclick = function() {
    console.log('inside click event');
    buttonToggleFun.showForm('login');
    buttonToggleFun.hideForm('signup');
};
document.getElementById("signup").onclick = function() {
    console.log('inside click event');
    buttonToggleFun.showForm('signup');
    buttonToggleFun.hideForm('login');
};


 var buttonToggleFun = function(){
    loginForm = function(hide){
       //to display login form
       if(hide){
        document.getElementById('abc').style.display = "block";
       }else{
        document.getElementById('abc').style.display = "none";
       }               
         //display loginButton
        //document.getElementById('signup').style.display = "block";
    }
    signupForm = function(hide){
        if(hide){
            document.getElementById('efg').style.display = "block";
        }else{
            document.getElementById('efg').style.display = "none";
        } 
    }
    buttonToggle = function(mode){
        switch(mode){
            case 'default': 
                 document.getElementById('logout1').style.display = "none";
                 document.getElementById('signup').style.display = "block";
                 document.getElementById('login').style.display = "block";
                 break;
            case 'loggedin':
                document.getElementById('logout1').style.display = "block";
                document.getElementById('signup').style.display = "none";
                document.getElementById('login').style.display = "none";    
        }
    }
    return {
        toggle: function(mode){
            buttonToggle(mode);
        },
        defaultView: function(){
            loginForm(false);
            signupForm(false);
        },
        showForm: function(formtype){
            if(formtype === 'login'){
                loginForm(true);
            }else{
                signupForm(true);
            }
        },
        hideForm: function(formtype){
            if(formtype === 'login'){
                loginForm(false);
            }else{
                signupForm(false);
            }
        },
    }
}();


