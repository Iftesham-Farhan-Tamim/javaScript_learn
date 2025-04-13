// ES6
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const userChai = new User("chai", "chai@gmail.com", "123");
console.log(userChai.encryptPassword());
console.log(userChai.changeUsername());

// ............................................................................................

// behind the scene
function UserConstructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

UserConstructor.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

UserConstructor.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
};

const tea = new UserConstructor("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// Inheritance with classes
class BaseUser {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends BaseUser {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherChai = new Teacher("chai", "chai@teacher.com", "123");
teacherChai.logMe();

const masalaChai = new BaseUser("masalaChai");
masalaChai.logMe();

console.log(teacherChai instanceof BaseUser); // true

// ............................................................................................

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());