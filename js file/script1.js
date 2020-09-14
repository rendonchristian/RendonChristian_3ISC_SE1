function myself(firstName, lastName, age, subject){
    let status = {};
    status.firstName = firstName;
    status.lastName = lastName;
    status.age = age;
    status.subject = subject;
    status.introduce = function(){
        console.log(`Hello, I am ${status.lastName} ${status.firstName} `);
    }
    status.enrolled = function(){
        console.log(`I am currently enrolled in ${status.subject}`);
    }
    return status;
}

let properties = myself("Rendon",  "Christian", 20, "ICS2609");

console.log(properties);
properties.introduce();
properties.enrolled();