function uemail(){
        var email = document.querySelector("#ie5efk").value;
        var hash = sha256.create();
        hash.update(email);
        return hash.hex();
}

localStorage.setItem('emailAddress', uemail());
