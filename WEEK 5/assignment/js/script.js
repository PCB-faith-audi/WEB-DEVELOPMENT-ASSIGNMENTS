//Variables declaration and conditionals (Part 1)
let age = 25; 
let isStudent = true;
console.log("Age: ", age);
console.log("Is student: ", isStudent);

if (age < 18 ) {
    console.log("Minor");
} else {
    console.log("Adult");
}

function checkStudentStatus(isStudent) {
    if (isStudent) {
        console.log("You are a student");
    } else {
        console.log("You are not student");
    }
}

checkStudentStatus(isStudent);

function checkAgeGroup(age) {
    if (age < 13) {
        console.log("Child");
    } else if (age >= 13 && age < 20) {
        console.log("Teenager");
    } else {
        console.log("Adult");
    }
}

//Loops and functions (Part 2)
for (let i = 1; i <= 10; i++) {
    console.log("iteration:", i);
}

const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruits => {
    console.log("Fruit:", fruits);
});

document.getElementById("greetBtn").addEventListener("click", function() {
    document.getElementById("Output").textContent = "Hello " + name;
});