function uemail(){
  
        var str = sessionStorage.getItem('userDetails');
        var parsedObject = JSON.parse(str);
        var email = (parsedObject.emailAddress);
        var hash = sha256.create();
        hash.update(email);
        return hash.hex();
}

localStorage.setItem('emailAddress', uemail());
