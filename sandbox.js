// localStorage.getItem('masterAccount'))
// localStorage.setItem('masterAccount', JSON.stringify(note));
// var masterAccountObj = JSON.parse(masterAccount);
// localStorage.setItem("websiteDup", websiteP)

function postCreateNewUserAPI(email,password) {
  var request = new XMLHttpRequest()
  request.open('POST', 'https://by-pass.azurewebsites.net/api/ByPassApi/CreateNewUser', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
    }
    console.log(this.response)

  }


  var body = {

    "Email": email,
    "Password": passwordå

  };
  request.send(JSON.stringify(body))
}

function postAddAccountAPI(email,password,Websitename,AccountUsername,AccountPassword) {
  var request = new XMLHttpRequest()
  request.open('POST', 'https://by-pass.azurewebsites.net/api/ByPassApi/AddAccount', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log("respone_____");
      console.log(this.response)
    }
    console.log(this.response)
  }
  var body = {
    "email": email,
    "password": password,
    "Websitename": Websitename,
    "AccountUsername": AccountUsername,
    "AccountPassword": AccountPassword

  }
  request.send(JSON.stringify(body))
}

function postLoginAPI(Email,Password) {
  var request = new XMLHttpRequest()
  request.open('POST', 'https://by-pass.azurewebsites.net/api/ByPassApi/login', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
    }
    console.log(this.response)

  }
  var body = {
    "email": Email,
    "password": Password

  }
  request.send(JSON.stringify(body))
}

function postChangePasswordAPI(Email,Password,NewPassword) {
  var request = new XMLHttpRequest()
  request.open('POST', 'https://by-pass.azurewebsites.net/api/ByPassApi/ChangePassword', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log("respone_____");
      console.log(this.response)
    }
      console.log(this.response)
  }
  var body = {

    "Email": Email,
    "Password": Password",
    "NewPassword": NewPassword

  }
  request.send(JSON.stringify(body))
}

function postReturnUserAccountsAPI(Email,Password) {
  var request = new XMLHttpRequest()
  request.open('POST', 'https://by-pass.azurewebsites.net/api/ByPassApi/ReturnUserAccounts', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
    }
    console.log(this.response)
  }
  var body = {

    "Email": Email,
    "Password": Password
  }
  request.send(JSON.stringify(body))
}

function getallAPI() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://by-pass.azurewebsites.net/api/ByPassApi/getall", true);
  xhr.onload = function() {
    console.log(xhr.responseText);
  };
  xhr.send();
}

function getAllWebsitesAPI() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://by-pass.azurewebsites.net/api/ByPassApi/GetAllWebsites", true);
  xhr.onload = function() {
    console.log(xhr.responseText);
  };
  xhr.send();
}

function getAllAccountsAPI() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://by-pass.azurewebsites.net/api/ByPassApi/GetAllAccounts", true);
  xhr.onload = function() {
    console.log(xhr.responseText);
  };
  xhr.send();
}

function editPOSTsample(name, email, pass) {
  logMe("Amazon Server", "request", "Edit account with API", "Email: " + email + " / New Password:" + pass);
  var request = new XMLHttpRequest()
  request.open('POST', 'http://amazon.safaie.ca/api/users1/1', true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      logMe("Amazon Server", "request", "Deleting account with API", "success");

      console.log(this.response)
    } else {
      logMe("Amazon Server", "request", "Deleting account with API", "fail");

    }
  }
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  request.send("UserID=1&FirstName=" + email + "&LastName=nuAlle&Email=" + email + "&Password=" + pass + "&Mobile=0123&BirthDay=01")
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
} //edit account from fake amazon account (API)

function loginPOSTsample() {
  var request = new XMLHttpRequest()
  request.open('POST', 'http://amazon.safaie.ca/api/users1/1', true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
      logMe("Webmail Server","request","create an account request to Amazon","Success - Email: " +createEmail+ " / password: " +createPassword + " / Website name: "+ createWebsite +" / Firstname: "+ createFirstName+" / Lastname: "+ createLastName+" / Date of Birth: "+createdateOfBirth);
      logMe("Webmail Server","request","create an account request to Amazon","Server respond: " + this.response);
    }
    logMe("Webmail Server","request","create an account request to Amazon","Failure - Email: " +createEmail+ " / password: " +createPassword + " / Website name: "+ createWebsite +" / Firstname: "+ createFirstName+" / Lastname: "+ createLastName+" / Date of Birth: "+createdateOfBirth);

  }
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
}

function editPOSTCow(name, user, pass) { //Create account on Webmail using httpreuest (API)
  logMe("Webmail Server", "request", "Edit account with API", "Email: " + user + " / New Password:" + pass); // Log Function

  var request = new XMLHttpRequest()
  request.open('POST', 'http://webmail.montreal-events.com/api/v1/edit/mailbox', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", "79DC3B-86B430-C222C7-8C9D02-6EEBCB");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
    } else {}
  }
  var body = {
    'items': [
      user
    ],
    'attr': {
      'name': 'Full name',
      'quota': '10',
      'password': pass,
      'password2': pass,
      'active': '1',
      'sender_acl': [
        'default',
        'info@domain2.tld',
        'domain3.tld',
        '*'
      ],
      'force_pw_update': '0',
      'sogo_access': '1'
    }
  };
  // var attr = {"local_part":res[0],"domain":"montreal-events.com","name":"ByPass User","quota":"200","password":createPassword,"password2":createPassword,"active":"1"}
  // var attr = {"local_part":user,"domain":"webmail.com","name":"ByPass User","quota":"10","password":pass,"password2":pass,"active":"1"}
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  // request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
  // request.send("attr:{'local_part':demoooooo,'domain':montreal-events.com,'name':John Doe,'quota':100,'password':moohoo,'password2':moohoo,'active':1}")
  // alert(attr.local_part);
  // request.send(JSON.stringify(attr))
  request.send(JSON.stringify(body))
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
}

function deletePOSTCow(name, pass, user) { //delet account from mail cow (API)
  logMe("Webmail Server", "request", "Delete account with API", "Email: " + user);

  var request = new XMLHttpRequest()
  request.open('POST', 'http://webmail.montreal-events.com/api/v1/delete/mailbox', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", "79DC3B-86B430-C222C7-8C9D02-6EEBCB");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
    } else {}
  }
  var body = [
    user
  ];
  // var attr = {"local_part":res[0],"domain":"montreal-events.com","name":"ByPass User","quota":"200","password":createPassword,"password2":createPassword,"active":"1"}
  // var attr = {"local_part":user,"domain":"webmail.com","name":"ByPass User","quota":"10","password":pass,"password2":pass,"active":"1"}
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  // request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
  // request.send("attr:{'local_part':demoooooo,'domain':montreal-events.com,'name':John Doe,'quota':100,'password':moohoo,'password2':moohoo,'active':1}")
  // alert(attr.local_part);
  // request.send(JSON.stringify(attr))
  request.send(JSON.stringify(body))
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
}
