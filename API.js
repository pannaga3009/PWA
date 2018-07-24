
const apiKey = '3bc0fcb13a634a4ba0db6bf6603e35a1';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');


window.addEventListener('load', e => {
    
    updateNews();
    update();
  // check_empty();
 // readAll();
  buttonToggleFun.toggle('default');
  buttonToggleFun.defaultView();
  saveComments();
   div_show();
   div_hide();
    saveValues();
    //hostReachable();
    doesConnectionExist();
    //ussubmit();
    
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
        
            /*var obj={comments:" "};
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

               
/*var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("MyDatabase", 1);

// Create the schema
open.onupgradeneeded = function() {
    var db = open.result;
    var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
    var index = store.createIndex("NewsIndex", [usernews.username, usernews.newstitle]);
};
open.onsuccess = function() {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore");
    var index = store.index("NewsIndex");
     // Add some data
   store.put({id: 12345, usernews: {username: "John", newstitle: "Doe"}, age: 42});
    store.put({id: 67890, usernews: {username: "Bob", newstitle: "Smith"}, age: 35});
    
    // Query the data
     var getJohn = store.get(12345);
     var getBob = index.get(["Smith", "Bob"]);

     getJohn.onsuccess = function() {
         console.log(getJohn.result.usernews.username);  // => "John"
     };
 
     getBob.onsuccess = function() {
         console.log(getBob.result.usernews.username);   // => "Bob"
     };
 
     // Close the db when the transaction is done
     tx.oncomplete = function() {
         db.close();
     };
 }
   

   /* getJohn.onsuccess = function() {
        console.log(getJohn.result.name.first);  // => "John" */


  
//User Image UpLoad
/*$(document).ready(function(){

	var thumb = $('#thumb');	
   
	new AjaxUpload('imageUpload', {
		action: $('#userimage').attr('action'),
		name: 'image',
		onSubmit: function(file, extension) {
			$('#preview').addClass('loading');
		},
		onComplete: function(file, response) {
			thumb.load(function(){
				$('#preview').removeClass('loading');
				thumb.unbind();
			});
			thumb.attr('src', response);
		}
	});
});*/

//function to upload image files
/*function myFunction() {
    var x = document.getElementById("imageUpload1").required;
    document.getElementById("demo").innerHTML = x;
}*/

/* Create XHR
var xhr = new XMLHttpRequest(),
    blob;

xhr.open("GET", "cam_left1.jpg", true);
// Set the responseType to blob
xhr.responseType = "blob";

xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        console.log("Image retrieved");
        
        // File as response
        blob = xhr.response;

        // Put the received blob into IndexedDB
        putElephantInDb(blob);
    }
}, false);
// Send XHR
xhr.send();*/

/* function ussubmit() {
    var name = document.getElementById("username").value;
    var newstitle1 = document.getElementById("newstitle").value;
    console.log("inside ussubmit");
    document.getElementById("usform").submit(); //form submission
    alert(" Name : " + name + " n title : " + newstitle1 +  "nn Form Submitted Successfully......");
   } */

   /*Function attempts to access a file that exists on the internet.
    If we can access that file, this means an internet connection exists.*/
   function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var file = "http://127.0.0.1:8887/index.html";
    var randomNum = Math.round(Math.random() * 10000);
 
    xhr.open('HEAD', file + "?rand=" + randomNum, true);
    xhr.send();
     
    xhr.addEventListener("readystatechange", processRequest, false);
 
    function processRequest(e) {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
          alert("connection exists!");
          
          var objectStore = transaction.objectStore("Details");

  // Make a request to clear all the data out of the object store
  var objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = function(event) {
    // report the success of our request
    note.innerHTML += '<li>Request successful.</li>';
    console.log("HI");
  };
        } else {
          alert("connection doesn't exist!");
        }
      }
    }
}

$(function () {
    var COMPAT_ENVS = [
        ['Firefox', ">= 16.0"],
        ['Google Chrome',
            ">= 24.0 (you may need to get Google Chrome Canary), NO Blob storage support"
        ]
    ];
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

    // Used to keep track of which view is displayed to avoid uselessly reloading it
    var current_view_pub_key;

    function openDb() {
        console.log("openDb ...");
        var req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onsuccess = function (evt) {
            // Better use "this" than "req" to get the result to avoid problems with
            // garbage collection.
            // db = req.result;
            db = this.result;
           console.log("openDb DONE");
        };
        req.onerror = function (evt) {
            console.error("openDb:", evt.target.errorCode);
        };

        req.onupgradeneeded = function (evt) {
            console.log("openDb.onupgradeneeded");
            var store = evt.currentTarget.result.createObjectStore(
                DB_STORE_NAME, {
                    keyPath: 'id',
                    autoIncrement: true
                });

            store.createIndex('username', 'username', {
                unique: true
            });
            store.createIndex('newstitle', 'newstitle', {
                unique: false
            });

        };
    }

    function getObjectStore(store_name, mode) {
        var tx = db.transaction(store_name, mode);
        return tx.objectStore(store_name);
    }
    
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
        req.onsuccess = function (evt) {
            console.log("Insertion in DB successful");
            displayActionSuccess();
            //displayPubList(store);
        };
        req.onerror = function () {
            console.error("addPublication error", this.error);
            displayActionFailure(this.error);
        };
    }

    // function addComments(comments) {
    //     console.log("addComments arguments:", arguments);
    //     var obj = {
    //         comments:comments
    //     };
        
    //     if (typeof blob != 'undefined')
    //         obj.blob = blob;

    //     var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    //     var req;
    //     try {
    //         req = store.add(obj);
    //     } catch (e) {
    //         if (e.name == 'DataCloneError')
    //             displayActionFailure("This engine doesn't know how to clone a Blob, " +
    //                 "use Firefox");
    //         throw e;
    //     }
    //     req.onsuccess = function (evt) {
    //         console.log("Insertion in DB successful");
    //         displayActionSuccess();
    //         //displayPubList(store);
    //     };
    //     req.onerror = function () {
    //         console.error("addPublication error", this.error);
    //         displayActionFailure(this.error);
    //     };
    // }

    // $('#addComments').on('click',function (evt) {
    //     evt.preventDefault();
    //     console.log("add ...");
    //     var comments = $('#comments').val();
        

    // addComments(comments);
    // });

    function displayActionSuccess(msg) {
        msg = typeof msg != 'undefined' ? "Success: " + msg : "Success";
        $('#msg').html('<span class="action-success">' + msg + '</span>');
    }

    function displayActionFailure(msg) {
        msg = typeof msg != 'undefined' ? "Failure: " + msg : "Failure";
        $('#msg').html('<span class="action-failure">' + msg + '</span>');
    }
    function save(array_of_files, callback) {
        openDB(function(db) {
          var tx = db.transaction('images', 'readwrite');
          tx.objectStore('images').put(array_of_files, 'key');
          tx.oncomplete = function() { callback(); };
          tx.onabort = function() { console.log(tx.error); };
        });
      }
    function load(callback) {
        openDB(function(db) {
          var tx = db.transaction('images', 'readonly');
          var req = tx.objectStore('images').get('key');
          req.onsuccess = function() {
            callback(req.result);
          };
        });
      }
      
      function openDB(callback) {
        var open = indexedDB.open('Newsdb');
        open.onupgradeneeded = function() {
          var db = open.result;
          db.createObjectStore('images');
        };
        open.onsuccess = function() {
          var db = open.result;
          callback(db);
        };
        open.onerror = function() { console.log(open.error); };
      }
    // function deletePublication(key, store) {
    //     console.log("deletePublication:", arguments);
    
    //     if (typeof store == 'undefined')
    //       store = getObjectStore(DB_STORE_NAME, 'readwrite');
    
    //     // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
    //     // the result of the Object Store Deletion Operation algorithm is
    //     // undefined, so it's not possible to know if some records were actually
    //     // deleted by looking at the request result.
    //     var req = store.get(key);
    //     req.onsuccess = function(evt) {
    //       var record = evt.target.result;
    //       console.log("record:", record);
    //       if (typeof record == 'undefined') {
    //         displayActionFailure("No matching record found");
    //         return;
    //       }
    //       // Warning: The exact same key used for creation needs to be passed for
    //       // the deletion. If the key was a Number for creation, then it needs to
    //       // be a Number for deletion.
    //       req = store.delete(key);
    //       req.onsuccess = function(evt) {
    //         console.log("evt:", evt);
    //         console.log("evt.target:", evt.target);
    //         console.log("evt.target.result:", evt.target.result);
    //         console.log("delete successful");
    //         displayActionSuccess("Deletion successful");
    //         displayPubList(store);
    //       };
    //       req.onerror = function (evt) {
    //         console.error("deletePublication:", evt.target.errorCode);
    //       };
    //     };
    //     req.onerror = function (evt) {
    //       console.error("deletePublication:", evt.target.errorCode);
    //     };
    //   }

      
    // function readAll() {
    //     console.log("reading !");
    //    // db.transaction(store_name, mode);
    //   //  var objectStore = db.transaction(store_name, mode).objectStore("Details");
    //   getObjectStore();
    //    // console.log(objectStore);
    //     objectStore.openCursor().onsuccess = function(event) {
    //       var cursor = event.target.result;
    //       if (cursor) {
    //             alert("Name for id " + cursor.key + " is " + cursor.value.Details);
    //             cursor.continue();
    //             console.log("reading !");
    //       }
    //       else {
    //         console.log("No more entries!");
    //   }
    //     };      
    // }



        $('#addButton').on('click',function (evt) {
            evt.preventDefault();
            console.log("add ...");
            var newstitle = $('#newstitle').val();
            var username = $('#username').val();
            var inputFileToLoad = $('#inputFileToLoad').arguments;
            if (!newstitle || !username) {
                displayActionFailure("Required field(s) missing");
                return;
            }
            addPublication(username, newstitle);

            
            save(inputFileToLoad,openDb);
            load(openDb);
            /*var file_input = $('#pub-file');
            var selected_file = file_input.get(0).files[0];
            console.log("selected_file:", selected_file);
            // Keeping a reference on how to reset the file input in the UI once we
            // have its value, but instead of doing that we rather use a "reset" type
            // input in the HTML form.
            //file_input.val(null);
            var file_url = $('#pub-file-url').val();
            if (selected_file) {
                addPublication(username, newstitle,selected_file);
            } else if (file_url) {
                addPublicationFromUrl(username, newstitle,file_url);
            } else {
                addPublication(username, newstitle);
            }
            */
        });

       
    openDb();
    

}); 




// Callback will be called with array of images, or undefined
// if not previously saved.


/*dbPromise.then(function(db) {
    var tx = db.transaction('Details', 'readonly');
    var Details = tx.objectStore('Details');
    return Details.get('username');
  }).then(function(val) {
    console.dir(val);
    console.log("read function called");
  });
  */


 // Immediately-Invoked Function Expression (IIFE)

// //function to check internet connectivity
//  function hostReachable() {

//     // Handle IE and more capable browsers
//     var xhr = new ( window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
//     var status;
  
//     // Open new request as a HEAD to the root hostname with a random param to bust the cache
//     xhr.open( "HEAD", "//" + window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );
  
//     // Issue request and handle response
//     try {
//       xhr.send();
//       return ( xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304) );
//     } catch (error) {
//       return false;
//     }
// }

