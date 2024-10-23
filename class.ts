class User {
  readonly name: string;
  email: string;
  private city: string;
  constructor(name: string, email: string, city: string) {
    this.name = name;
    this.email = email;
    this.city = city;
  }
}

const hemant = new User("Hemant", "h.h@gmail.com", "Jaipur");
// hemant.name = 'Hawa'  * This is not allowed as this is only read only property.

class User2 {
  private _courseCount = 1;

  constructor(public name: string, public email: string) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
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
