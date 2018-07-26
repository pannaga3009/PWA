
const apiKey = '3bc0fcb13a634a4ba0db6bf6603e35a1';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');
window.addEventListener('load', () => {
    popNews();
    popularNews();
    updateNews();
    update();
    buttonToggleFun.toggle('default');
    buttonToggleFun.defaultView();
    saveComments();
    div_show();
    div_hide();
    saveValues();
    
    check_empty();
    //doesConnectionExist();
    /* 
    
     readAll(); 
    //ussubmit();
    // loadValues();
    //   saveData();
    // showLS();
    //div_hide1();
    //div_show1();
    */
    document.getElementById("login").onclick = function () {
        console.log('inside click event');
        buttonToggleFun.showForm('login');
        buttonToggleFun.hideForm('signup');
    };
    document.getElementById("signup").onclick = function () {
        console.log('inside click event');
        buttonToggleFun.showForm('signup');
        buttonToggleFun.hideForm('login');
    };
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
async function popNews() {
    const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=' + apiKey;
    let response = await ajaxCall(url);
    //  response.articles.forEach(createArt);
    response.articles.forEach(article => {
        $("#P_splNewsDiv .news_img").attr('src', article.urlToImage);
        $("#P_splNewsDiv  .title1").text(article.title);
        $("#P_splNewsDiv  .title1").attr('href', article.url);
        $("#P_splNewsDiv  .feature_article_content").text(article.description);

        $("#ajaxNews").append($("#P_splNewsDiv").html());
        
        $("#P_splNewsDiv  .news_img").attr('src','');
        $("#P_splNewsDiv  .title1").text('');
        $("#P_splNewsDiv  .title1").attr('href', '');
        $("#P_splNewsDiv  .feature_article_content").text('');
        
    });
}
async function popularNews(){
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=' + apiKey;
    let response = await ajaxCall(url);
    response.articles.forEach(article => {
        $("#P_newsDiv .mainNews_img").attr('src', article.urlToImage);
        $("#P_newsDiv .title").text(article.title);
        $("#P_newsDiv .title").attr('href', article.url);
        $("#P_newsDiv .feature_article_content").text(article.description);

        $("#ajaxNews").append($("#P_newsDiv").html());

        $("#P_newsDiv .mainNews_img").attr('src', '');
        $("#P_newsDiv .title").text('');
        $("#P_newsDiv .title").attr('href', '');
        $("#P_newsDiv .feature_article_content").text('');
    });



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
        // if(  $("#splNewsDiv  .news_img").attr('src', ''))
        // {
        // $("#splNewsDiv  .img-responsive").attr('src',article.urlToImage);
        // }

        $("#splNewsDiv  .news_img").attr('src','');
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

function div_show() {
    document.getElementById('usernews').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('usernews').style.display = "none";
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
        localStorage._cm=document.getElementById("comments").value;
        
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

               

$(function () {
    // var usernews = $('#usernews');
    // usernews.empty();
    // usernews.append('<ul id="user-list"></ul>');
    // COMPAT_ENVS.forEach(function (val, idx, array) {
    //     $('#user-list').append('<li>' + val[0] + ': ' + val[1] + '</li>');
    // });

    const DB_NAME = 'Newsdb';
    const DB_VERSION = 1; // Use a long long for this value (don't use a float)
    const DB_STORE_NAME = 'Details'; //publications

    var db;


    function openDb(callback) {
        console.log("openDb ...");
        var req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onsuccess = function () {
            // Better use "this" than "req" to get the result to avoid problems with
            // garbage collection.
            // db = req.result;
            db = this.result;
           console.log(DB_NAME+" DB is ready!!");
           callback();
        };
        req.onerror = function (evt) {
            console.error(DB_NAME+" DB is not ready!! :", evt.target.errorCode);
        };

        req.onupgradeneeded = function (evt) {
            console.log("openDb.onupgradeneeded");
            var store = evt.currentTarget.result.createObjectStore(
                DB_STORE_NAME, {
                    keyPath: 'id',
                    autoIncrement: true
                });

            store.createIndex('username', 'username', {
                unique: false
            });
            store.createIndex('newstitle', 'newstitle', {
                unique: false
            });

        };
    };

    function getObjectStore(store_name, mode) {
        var tx = db.transaction(store_name, mode);
        return tx.objectStore(store_name);
         /*Function attempts to access a file that exists on the internet.
    If we can access that file, this means an internet connection exists.*/
   
    }
    
    var handleUserNewsSubmit = {
        value:'',
        value1:true,

        checkConnection: function(){

        },
        submit: function(){

        },
        pushNewsToServer: function(){

        },
        insertIntoDB: function(){

        },
    };



  /* @param {string} biblioid
     * @param {string} title
     * @param {number} year
     * @param {Blob=} blob
     * */
   
    function addPublication(username, newstitle) {
        console.log("addPublication arguments:", arguments);
        var obj = {
            username: username,
            newstitle: newstitle           
        };

        
        if (typeof blob != 'undefined')
            obj.blob = blob;

        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        var req;
        try {
            req = store.add(obj);
        } catch (e) {
            if (e.name == 'DataCloneError')
                displayActionFailure("This engine doesn't know how to clone a Blob, " +
                    "use Firefox");
            throw e;
        }
        req.onsuccess = function () {
            console.log("Insertion in DB successful");
            displayActionSuccess();
            //displayPubList(store);
        };
        req.onerror = function () {
            console.error("addPublication error", this.error);
            displayActionFailure(this.error);
        };
    }

   

    function displayActionSuccess(msg) {
        msg = typeof msg != 'undefined' ? "Success: " + msg : "Success";
        $('#msg').html('<span class="action-success">' + msg + '</span>');
    }

    function displayActionFailure(msg) {
        msg = typeof msg != 'undefined' ? "Failure: " + msg : "Failure";
        $('#msg').html('<span class="action-failure">' + msg + '</span>');
    }
    
    


        $('#addButton').on('click',function (evt) {
            evt.preventDefault();
            console.log("add ...");
            var newstitle = $('#newstitle').val();
            var username = $('#username').val();
           
            if (!newstitle || !username) {
                displayActionFailure("Required field(s) missing");
                return;
            }
            addPublication(username, newstitle);
           
           
            
        });

       
    openDb(doesConnectionExist);
    
    //doesConnectionExist();

    function doesConnectionExist() {
        var xhr = new XMLHttpRequest();
        var file = "http://127.0.0.1:8887/index.html";
        var randomNum = Math.round(Math.random() * 10000);
     
        xhr.open('HEAD', file + "?rand=" + randomNum, true);
        xhr.send();
         
        xhr.addEventListener("readystatechange", function() {
            if (xhr.readyState == 4) {
              if (xhr.status >= 200 && xhr.status < 304) {
                alert("connection exists!");
                console.log("check connection!");
                var objectStore = getObjectStore(DB_STORE_NAME, 'readwrite');
                //var objectStore = store.objectStore('Details');
      
                // Make a request to clear all the data out of the object store
                var objectStoreRequest = objectStore.clear();
              
                objectStoreRequest.onsuccess = function(event) {
                  // report the success of our request
                  note.innerHTML += '<li>Request successful.</li>';
                  console.log("check conn!");
                };
              } else {
                alert("connection doesn't exist!");
              }
            }
          }, false);
     
        
    }
}); 





(function () {
    // IndexedDB
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
        dbVersion = 1.0;

    // Create/open database
    var request = indexedDB.open("imgFiles", dbVersion),
        imgDb,
        createObjectStore = function (dataBase) {
            // Create an objectStore
            console.log("Creating objectStore")
            dataBase.createObjectStore("images");
        },

        getImageFile = function () {
            // Create XHR
            var xhr = new XMLHttpRequest(),
                blob;

            xhr.open("GET", "#imgTest", true);
            // Set the responseType to blob
            xhr.responseType = "blob";

            xhr.addEventListener("load", function () {
                if (xhr.status === 200) {
                    console.log("Image retrieved");
                    
                    // Blob as response
                    blob = xhr.response;
                    console.log("Blob:" + blob);

                    // Put the received blob into IndexedDB
                    putElephantInDb(blob);
                }
            }, false);
            // Send XHR
            xhr.send();
        },

        putElephantInDb = function (blob) {
            console.log("Putting images in IndexedDB");

            // Open a transaction to the database
            var readWriteMode = typeof IDBTransaction.READ_WRITE == "undefined" ? "readwrite" : IDBTransaction.READ_WRITE;
            var transaction = imgDb.transaction(["images"], readWriteMode);

            // Put the blob into the dabase
            var put = transaction.objectStore("images").put(blob, "image");

            // Retrieve the file that was just stored
            transaction.objectStore("images").get("image").onsuccess = function (event) {
                var imgFile = event.target.result;
                console.log("Got image!" + imgFile);

                // Get window.URL object
                var URL = window.URL || window.webkitURL;

                // Create and revoke ObjectURL
                var imgURL = URL.createObjectURL(imgFile);

                // Set img src to ObjectURL
                var imgElephant = document.getElementById("inputFileToLoad");
                imgElephant.setAttribute("src", imgURL);

                // Revoking ObjectURL
                imgElephant.onload = function() {
                    window.URL.revokeObjectURL(this.src);
                }
            };
        };

    request.onerror = function (event) {
        console.log("Error creating/accessing IndexedDB database");
    };

    request.onsuccess = function (event) {
        console.log("Success creating/accessing IndexedDB database");
        imgDb = request.result;

        imgDb.onerror = function (event) {
            console.log("Error creating/accessing IndexedDB database");
        };
        
        // Interim solution for Google Chrome to create an objectStore. Will be deprecated
        if (imgDb.setVersion) {
            if (imgDb.version != dbVersion) {
                var setVersion = imgDb.setVersion(dbVersion);
                setVersion.onsuccess = function () {
                    createObjectStore(imgDb);
                    getImageFile();
                };
            }
            else {
                getImageFile();
            }
        }
        else {
            getImageFile();
        }
    }
    
    // For future use. Currently only in latest Firefox versions
    request.onupgradeneeded = function (event) {
        createObjectStore(event.target.result);
    };
})();

