class User{
    User(username,passsword,email){
        this.username = username,
        this.email = email;
        this.passsword = passsword
    }
    
    encryptPassword(){
        return `${this.passsword}abc`
    }

    changeusername(){
        return `${this.username}`
    }
}