

// elements within my results booklet
const form = document.getElementById("booklet");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const marksInput = document.getElementById("marks");
const resultsSection = document.getElementById("results");

// student list
const studentList = document.createElement("ol");
resultsSection.appendChild(studentList);

// event listenor
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // read me
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const mark = parseInt(marksInput.value);

    if (firstName === "" || lastName === "") {
        resultsSection.firstChild.textContent = "Please enter the student name.";
        return;
    }

    // if (isNaN(mark) || mark < 0 || mark > 100) {
     //   resultsSection.firstChild.textContent = "Please enter a valid mark between 0 and 100.";
     //   return;
    // } playing around with the comabds, note that the Marks rrstriction is within the table

        let grade;
    let outcome;

    if (mark >= 80 && mark <= 100) {
        outcome = "PASS";
        grade = "Distinction";
    } else if (mark >= 65 && mark <= 79) {
        outcome = "PASS";
        grade = "Merit";
    } else if (mark >= 50 && mark <= 64) {
        outcome = "PASS";
        grade = "Pass";
    } else {
        outcome = "FAIL";
        grade = "Fail";
    }

        // the latest result
    resultsSection.firstChild.textContent = "";

    // new list item for each student submitted
    const listItem = document.createElement("li");
    listItem.textContent = firstName + " " + lastName + " | Mark: " + mark + " | " + outcome + " - " + grade;
    studentList.appendChild(listItem);

  //empty form submittion
    firstNameInput.value = "";
    lastNameInput.value = "";
    marksInput.value = "";
});

