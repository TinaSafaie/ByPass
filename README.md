#  Send accounts with the APIs (send_api)


## *To Do List:*

- duration
- 





- [x] Create new user
> check if user exist don't allow the user to sign up

- [x] Add Account (create account)
- [x] Delete Account
- [ ] Edit Account
- [x] Change Password
- [ ] Login User
- [ ] settings - High
>  - add a setting icon on the home page next to search bar
>  - Saving Methods
>  - AutoLock
>  - password sharing
>  - list of shared accounts

- [ ] search - low
>  - drop down for amazon and webmail according to the create and login page

- [ ] Popups - High
>  - there is so many popups

- [ ] LogOut - Med
>  - it should be able to sign in

- [ ] Refreshing and rendering issue - Low
- [ ] close functions should be uncommented - Med
- [x] Login and Sign up page should be redesign - High
- [ ] Bug Fix, Add Amazon.safaie to create and login account - High
---
- [x] Return ALL Users
- [ ] Get All Website
- [ ] Get All Accounts
- [ ] Share Account
- [ ] Return User Accounts


---


## API lists:

### Return ALL Users (Master)
```json
Method:
GET

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/getall

Headers:
Content-Type: application/json


Response:

[
    {
      "id": 1,
      "name": "Name",
      "email": "email",
      "password": "password",
      "createDate": "2020-10-20T19:38:47.0933333",
      "active": true,
      "userinRoles": null
    },
    {
      "id": 2,
      "name": "Name",
      "email": "email",
      "password": "password",
      "createDate": "2020-10-20T19:46:16.1066667",
      "active": true,
      "userinRoles": null
    }
]
```

### Create new user (Master)
```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/CreateNewUser


Headers:
Content-Type: application/json

Body:
{

"Email": "email@domain.com" ,
"Password": "1234"

}

Response:

Result => if user exist ->UserExist | if user not exist->UserCreated

```

### Login User
```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/login


Headers:
Content-Type: application/json

Body:
{

"Email": "email@domain.com" ,
"Password": "1234"

}

Response:

Result => if user valid ->UserValid | if user not exist->Error with HTML file

```
### Add Account (account)
```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/AddAccount


Headers:
Content-Type: application/json

Body:
{
"email": "email@domain.com" ,
"password": "1234" ,
"Websitename": "Websitename" ,
"AccountUsername": "AccountUsername" ,
"AccountPassword": "AccountPassword"

}

Response:


```
### Edit Account
### Change Password of an Account (Master)
```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/ChangePassword


Headers:
Content-Type: application/json

Body:
{

"Email": "email@domain.com" ,
"Password": "1234" ,
"NewPassword": "NewPassword"

}

Response:


```
### Get All Website
```javascript
Method:
GET

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/GetAllWebsites


Headers:
Content-Type: application/json


Response:


```
### Get All Accounts (Account)

```javascript
Method:
GET

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/GetAllAccounts


Headers:
Content-Type: application/json


Response:


```
### Return User Accounts (Account of a master)

```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/ReturnUserAccounts


Headers:
Content-Type: application/json


Body:
{

"Email": "email@domain.com" ,
"Password": "1234"

}


Response:


```
### Delete User Accounts (Account)

```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/DeleteAccount

Headers:
Content-Type: application/json


Body:
{
"email": "email@domain.com" ,
"password": "1234",
"WebsiteName",
"AccountUsername"

}


Response:


```

### Change Account Password (account)

```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/ChangeAccountPassword
Headers:
Content-Type: application/json


Body:
{
"email": "email@domain.com",
"password": "1234",
"WebsiteName" : "websitename",
"AccountNewPassword" : "newPassword",
"AccountUsername" : "AccountUsername"

}


Response:


```

### Share Account

```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/AddShare?
Headers:
Content-Type: application/json


Body:
{
    "ShareRole":"View",
    "ShareUserEmail":"tina.safaie75@gmail.com",
    "email": "mrsalehi@rocketmail.com",
    "password": "1234" ,
    "WebsiteName": "amazon",
    "AccountUsername" : "mrsalehi@amazon.com",
    "AccountPassword" : "AmazonPassword",
    "ExpireDuration":"10"
}


Response:


```



### Get all Share Account That I Shared

```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/GetIShared
Headers:
Content-Type: application/json


Body:
{

    "email": "mrsalehi@rocketmail.com",
    "password": "1234"
}


Response:


```


### Get all Share Account with me

```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/GetSharedToMe
Headers:
Content-Type: application/json


Body:
{

    "email": "mrsalehi@rocketmail.com",
    "password": "1234"
}


Response:


```
### Remove Shared Account by owner

```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/DeleteIShared

Headers:
Content-Type: application/json


Body:
{

    "Email": "mrsalehi@rocketmail.com" ,
    "Password": "1234" ,
    "ShareUserEmail":"tina.safaie75@gmail.com",
    "WebsiteName" : "amazon" ,
    "AccountUsername" : "mrsalehi@amazon.com"
}


Response:


```
### Remove Shared Account by friend

```javascript
Method:
POST

URL:
https://by-pass.azurewebsites.net/api/ByPassApi/DeleteSharedToMe

Headers:
Content-Type: application/json


Body:
{

    "Email": "mrsalehi@rocketmail.com" ,
    "Password": "1234" ,
    "WebsiteName" : "amazon" ,
    "AccountUsername" : "mrsalehi@amazon.com"
}


Response:


```



```javascript

function sample(){
  var request = new XMLHttpRequest()
  request.open('POST', 'https://by-pass.azurewebsites.net/api/ByPassApi/DeleteIShared', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
      respo = this.response;
    }
    console.log(this.response)
    respo = this.response;
    if (respo != "Main User Not Found or Wrong Password") {
              var arrayIndex = 0;
              dataA = JSON.parse(respo)
              const data = JSON.parse(respo);
              const array = Object.keys(data).map(key => data[key]);
              array.forEach(item => fetchData(item.shareUserEmail,item.password,item.websiteName,arrayIndex++))

              $("#Delete0").click(function(){

              });
              $("#Delete1").click(function(){

              });
              $("#Delete2").click(function(){

              });
              $("#Delete3").click(function(){

              });
              $("#Delete4").click(function(){

              });

                      function fetchData(loginEmail,loginPassword,loginWebsite,index){
                        var d1 = document.getElementById('shareAccountRender');
                        // d1.insertAdjacentHTML('afterbegin', '<div class=" p16_part1"><div class="sharedAccountCard_Page16 "><div class="sharedAccountCard_Page16_websitename"> <b>Website :</b>  '+loginWebsite+' <i class="fab fa-amazon fa-sm"></i></div><div class="sharedAccountCard_Page16_account"> <b>Shared account :</b> '+loginEmail+'</div><div class="sharedAccountCard_Page16_with"> <b>Shared with :</b> target@test.com</div></div></div>');
                        d1.insertAdjacentHTML('afterbegin', ' <div class=" p16_part1"> <div class="sharedAccountCard_Page16 "> <div class="sharedAccountCard_Page16_content"> <div class="sharedAccountCard_Page16_websitename"> <b>Website :</b> '+loginWebsite+' <i class="fab fa-amazon fa-sm"></i></div><div class="sharedAccountCard_Page16_account"> <b>Shared account :</b> '+loginEmail+'</div><div class="sharedAccountCard_Page16_with"> <b>Shared with :</b> target@test.com</div></div><div class="sharedAccountCard_Page16_btn"> <div class="sharedAccountCard_Page16_btn_delete deleteFull" id="Delete'+index+'"> Delete</div></div></div></div>');
                      }
    }

  }
    masterObj = localStorage.getItem('masterAccount')
    var masterAccountObj = JSON.parse(masterObj);
    var body = {
      "email": masterAccountObj.masterEmail,
      "password": masterAccountObj.password

    };
    console.log(JSON.stringify(body));
  request.send(JSON.stringify(body))
  }



  function sample(){
    var request = new XMLHttpRequest()
    request.open('POST', 'https://by-pass.azurewebsites.net/api/ByPassApi/DeleteIShared', true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        console.log(this.response)
        respo = this.response;
      }
      console.log(this.response)
      respo = this.response;
      if (respo != "Main User Not Found or Wrong Password") {
                // var arrayIndex = 0;
                // dataA = JSON.parse(respo)
                // const data = JSON.parse(respo);
                // const array = Object.keys(data).map(key => data[key]);
                // array.forEach(item => fetchData(item.shareUserEmail,item.password,item.websiteName,arrayIndex++))
      }

    }
      masterObj = localStorage.getItem('masterAccount')
      var masterAccountObj = JSON.parse(masterObj);
      var body = {
        "email": masterAccountObj.masterEmail,
        "password": masterAccountObj.password

      };
      console.log(JSON.stringify(body));
    request.send(JSON.stringify(body))
    }
```
