// Student attendance data
const students = [
    { name: "Student 01", attendance: 92 },
    { name: "Student 02", attendance: 88 },
    { name: "Student 03", attendance: 95 }
];

// Show attendance
function showAttendance() {
    alert("Today's attendance: 105 students present and 15 students absent.");
}

// Calculate average attendance
function calculateAverage() {
    let total = 0;

    for (let student of students) {
        total += student.attendance;
    }

    return total / students.length;
}

// Search students
function searchStudent() {
    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const studentCards = document
        .getElementById("studentList")
        .getElementsByTagName("article");

    for (let card of studentCards) {
        const studentName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (studentName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

// Page load
document.addEventListener("DOMContentLoaded", function () {
    console.log(
        "Average Attendance: " + calculateAverage() + "%"
    );
});