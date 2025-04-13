// ES6 Class
class UserClass {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}hitesh`;
    }

    set password(value) {
        this._password = value;
    }
}

const userHitesh = new UserClass("h@hitesh.ai", "abc");
console.log(userHitesh.email);

// ............................................................................................

// Constructor Function
function UserConstructor(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });
}

const userChai = new UserConstructor("chai@chai.com", "chai");
console.log(userChai.email);

// ............................................................................................

// Object Literal
const UserObject = {
    _email: 'h@hc.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};

const userTea = Object.create(UserObject);
console.log(userTea.email);
