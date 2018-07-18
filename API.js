
const apiKey = '3bc0fcb13a634a4ba0db6bf6603e35a1';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');


window.addEventListener('load', e => {
    
    updateNews();
    update();
  // check_empty();
  buttonToggleFun.toggle('default');
  buttonToggleFun.defaultView();
  saveComments();
   div_show();
   div_hide();
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
function ussubmit() {
    var name = document.getElementById("username").value;
    var newstitle1 = document.getElementById("newstitle").value;
    console.log("inside ussubmit");
    document.getElementById("usform").submit(); //form submission
    alert(" Name : " + name + " n title : " + newstitle1 +  "nn Form Submitted Successfully......");
   
}
(function () {
    var COMPAT_ENVS = [
        ['Firefox', ">= 16.0"],
        ['Google Chrome',
            ">= 24.0 (you may need to get Google Chrome Canary), NO Blob storage support"
        ]
    ];
    var usernews = $('#usernews');
    usernews.empty();
    usernews.append('<ul id="user-list"></ul>');
    COMPAT_ENVS.forEach(function (val, idx, array) {
        $('#user-list').append('<li>' + val[0] + ': ' + val[1] + '</li>');
    });

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

    /**
     * @param {string} store_name
     * @param {string} mode either "readonly" or "readwrite"
     */
    function getObjectStore(store_name, mode) {
        var tx = db.transaction(store_name, mode);
        return tx.objectStore(store_name);
    }

    function clearObjectStore(store_name) {
        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        var req = store.clear();
        req.onsuccess = function (evt) {
            displayActionSuccess("Store cleared");
            displayPubList(store);
        };
        req.onerror = function (evt) {
            console.error("clearObjectStore:", evt.target.errorCode);
            displayActionFailure(this.error);
        };
    }

    function getBlob(key, store, success_callback) {
        var req = store.get(key);
        req.onsuccess = function (evt) {
            var value = evt.target.result;
            if (value)
                success_callback(value.blob);
        };
    }

    /**
     * @param {IDBObjectStore=} store
     */
    function displayPubList(store) {
        console.log("displayPubList");

        if (typeof store == 'undefined')
            store = getObjectStore(DB_STORE_NAME, 'readonly');

        var pub_msg = $('#pub-msg');
        pub_msg.empty();
        var pub_list = $('#pub-list');
        pub_list.empty();
        // Resetting the iframe so that it doesn't display previous content
        newViewerFrame();

        var req;
        req = store.count();
        // Requests are executed in the order in which they were made against the
        // transaction, and their results are returned in the same order.
        // Thus the count text below will be displayed before the actual pub list
        // (not that it is algorithmically important in this case).
        req.onsuccess = function (evt) {
            pub_msg.append('<p>There are <strong>' + evt.target.result +
                '</strong> record(s) in the object store.</p>');
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
            displayActionFailure(this.error);
        };

        var i = 0;
        req = store.openCursor();
        req.onsuccess = function (evt) {
            var cursor = evt.target.result;

            // If the cursor is pointing at something, ask for the data
            if (cursor) {
                console.log("display cursor:", cursor);
                req = store.get(cursor.key);
                req.onsuccess = function (evt) {
                    var value = evt.target.result;
                    var list_item = $('<li>' +
                        '[' + cursor.key + '] ' +
                        '(username: ' + value.username+ ') ' +
                        value.newstitle +
                        '</li>');
            

                    if (value.hasOwnProperty('blob') &&
                        typeof value.blob != 'undefined') {
                        var link = $('<a href="' + cursor.key + '">File</a>');
                        link.on('click', function () {
                            return false;
                        });
                        link.on('mouseenter', function (evt) {
                            setInViewer(evt.target.getAttribute('href'));
                        });
                        list_item.append(' / ');
                        list_item.append(link);
                    } else {
                        list_item.append(" / No attached file");
                    }
                    pub_list.append(list_item);
                };

                // Move on to the next object in store
                cursor.continue();

                // This counter serves only to create distinct ids
                i++;
            } else {
                console.log("No more entries");
            }
        };
    }

    function newViewerFrame() {
        var viewer = $('#pub-viewer');
        viewer.empty();
        var iframe = $('<iframe />');
        viewer.append(iframe);
        return iframe;
    }

    function setInViewer(key) {
        console.log("setInViewer:", arguments);
        key = Number(key);
        if (key == current_view_pub_key)
            return;

        current_view_pub_key = key;

        var store = getObjectStore(DB_STORE_NAME, 'readonly');
        getBlob(key, store, function (blob) {
            console.log("setInViewer blob:", blob);
            var iframe = newViewerFrame();

            // It is not possible to set a direct link to the
            // blob to provide a mean to directly download it.
           if (blob.type == 'text/html') {
                var reader = new FileReader();
                reader.onload = (function (evt) {
                    var html = evt.target.result;
                    iframe.load(function () {
                        $(this).contents().find('html').html(html);
                    });
                });
                reader.readAsText(blob);
            } else if (blob.type.indexOf('image/') == 0) {
                iframe.load(function () {
                    var img_id = 'image-' + key;
                    var img = $('<img id="' + img_id + '"/>');
                    $(this).contents().find('body').html(img);
                    var obj_url = window.URL.createObjectURL(blob);
                    $(this).contents().find('#' + img_id).attr('src', obj_url);
                    window.URL.revokeObjectURL(obj_url);
                });
            } else if (blob.type == 'application/pdf') {
                $('*').css('cursor', 'wait');
                var obj_url = window.URL.createObjectURL(blob);
                iframe.load(function () {
                    $('*').css('cursor', 'auto');
                });
                iframe.attr('src', obj_url);
                window.URL.revokeObjectURL(obj_url);
            } else {
                iframe.load(function () {
                    $(this).contents().find('body').html("No view available");
                });
            }

        });
                           
    }


    /**
     * @param {string} username
     * @param {string} newstitle
     * @param {number} year
     * @param {string} url the URL of the image to download and store in the local
     *   IndexedDB database. The resource behind this URL is subjected to the
     *   "Same origin policy", thus for this method to work, the URL must come from
     *   the same origin as the web site/app this code is deployed on.
     */
    function addPublicationFromUrl(username,newsitle, year, url) {
        console.log("addPublicationFromUrl:", arguments);

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        // Setting the wanted responseType to "blob"
        // http://www.w3.org/TR/XMLHttpRequest2/#the-response-attribute
        xhr.responseType = 'blob';
        xhr.onload = function (evt) {
            if (xhr.status == 200) {
                console.log("Blob retrieved");
                var blob = xhr.response;
                console.log("Blob:", blob);
                addPublication(username,newstitle, year, blob);
            } else {
                console.error("addPublicationFromUrl error:",
                    xhr.responseText, xhr.status);
            }
        };
        xhr.send();

        // We can't use jQuery here because as of jQuery 1.8.3 the new "blob"
        // responseType is not handled.
        // http://bugs.jquery.com/ticket/11461
        // http://bugs.jquery.com/ticket/7248
        // $.ajax({
        //   url: url,
        //   type: 'GET',
        //   xhrFields: { responseType: 'blob' },
        //   success: function(data, textStatus, jqXHR) {
        //     console.log("Blob retrieved");
        //     console.log("Blob:", data);
        //     // addPublication(biblioid, title, year, data);
        //   },
        //   error: function(jqXHR, textStatus, errorThrown) {
        //     console.error(errorThrown);
        //     displayActionFailure("Error during blob retrieval");
        //   }
        // });
    }

    /**
     * @param {string} biblioid
     * @param {string} title
     * @param {number} year
     * @param {Blob=} blob
     */
    function addPublication(username, newstitle,year,blob) {
        console.log("addPublication arguments:", arguments);
        var obj = {
            username: username,
            newstitle: newstitle,
            year:year
            
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
            displayPubList(store);
        };
        req.onerror = function () {
            console.error("addPublication error", this.error);
            displayActionFailure(this.error);
        };
    }

    /**
     * @param {string} biblioid
     */
    function deletePublicationFromBib(username) {
        console.log("deletePublication:", arguments);
        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        var req = store.index('username');
        req.get(username).onsuccess = function (evt) {
            if (typeof evt.target.result == 'undefined') {
                displayActionFailure("No matching record found");
                return;
            }
            deletePublication(evt.target.result.id, store);
        };
        req.onerror = function (evt) {
            console.error("deletePublicationFromBib:", evt.target.errorCode);
        };
    }

    /**
     * @param {number} key
     * @param {IDBObjectStore=} store
     */
    function deletePublication(key, store) {
        console.log("deletePublication:", arguments);

        if (typeof store == 'undefined')
            store = getObjectStore(DB_STORE_NAME, 'readwrite');

        // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
        // the result of the Object Store Deletion Operation algorithm is
        // undefined, so it's not possible to know if some records were actually
        // deleted by looking at the request result.
        var req = store.get(key);
        req.onsuccess = function (evt) {
            var record = evt.target.result;
            console.log("record:", record);
            if (typeof record == 'undefined') {
                displayActionFailure("No matching record found");
                return;
            }
            // Warning: The exact same key used for creation needs to be passed for
            // the deletion. If the key was a Number for creation, then it needs to
            // be a Number for deletion.
            req = store.delete(key);
            req.onsuccess = function (evt) {
                console.log("evt:", evt);
                console.log("evt.target:", evt.target);
                console.log("evt.target.result:", evt.target.result);
                console.log("delete successful");
                displayActionSuccess("Deletion successful");
                displayPubList(store);
            };
            req.onerror = function (evt) {
                console.error("deletePublication:", evt.target.errorCode);
            };
        };
        req.onerror = function (evt) {
            console.error("deletePublication:", evt.target.errorCode);
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

    function resetActionStatus() {
        console.log("resetActionStatus ...");
        $('#msg').empty();
        console.log("resetActionStatus DONE");
    }

    function addEventListeners() {
        console.log("addEventListeners");

        $('#register-form-reset').click(function (evt) {
            resetActionStatus();
        });

        $('#add-button').click(function (evt) {
            console.log("add ...");
            var newstitle = $('#newstitle').val();
            var username = $('#username').val();
            if (!newstitle || !username) {
                displayActionFailure("Required field(s) missing");
                return;
            }
            var year = $('#pub-year').val();
            if (year != '') {
                // Better use Number.isInteger if the engine has EcmaScript 6
                if (isNaN(year)) {
                    displayActionFailure("Invalid year");
                    return;
                }
                year = Number(year);
            } else {
                year = null;
            }

            var file_input = $('#pub-file');
            var selected_file = file_input.get(0).files[0];
            console.log("selected_file:", selected_file);
            // Keeping a reference on how to reset the file input in the UI once we
            // have its value, but instead of doing that we rather use a "reset" type
            // input in the HTML form.
            //file_input.val(null);
            var file_url = $('#pub-file-url').val();
            if (selected_file) {
                addPublication(username, newstitle, year, selected_file);
            } else if (file_url) {
                addPublicationFromUrl(username, newstitle, year, file_url);
            } else {
                addPublication(username, newstitle, year);
            }
        });

        $('#delete-button').click(function (evt) {
            console.log("delete ...");
            var username = $('#pub-biblioid-to-delete').val();
            var key = $('#key-to-delete').val();

            if (username != '') {
                deletePublicationFromBib(username);
            } else if (key != '') {
                // Better use Number.isInteger if the engine has EcmaScript 6
                if (key == '' || isNaN(key)) {
                    displayActionFailure("Invalid key");
                    return;
                }
                key = Number(key);
                deletePublication(key);
            }
        });

        $('#clear-store-button').click(function (evt) {
            clearObjectStore();
        });

        var search_button = $('#search-list-button');
        search_button.click(function (evt) {
            displayPubList();
        });

    }

    openDb();
    addEventListeners();

})(); // Immediately-Invoked Function Expression (IIFE)


