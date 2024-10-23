"use strict";
class User {
    constructor(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
    }
}
const hemant = new User("Hemant", "h.h@gmail.com", "Jaipur");
// hemant.name = 'Hawa'  * This is not allowed as this is only read only property.
class User2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count must be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
const hemant2 = new User2("Hemant", "h.h@gmail.com");
console.log(hemant2.courseCount);
