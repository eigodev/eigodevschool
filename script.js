// Event Listeners
// Hiding FLIGHT option by defaut
document.addEventListener("DOMContentLoaded", function() {
    const classType = document.getElementById("class-type");
    const flightNumber = document.getElementById("number-list");

    // Hide Flight selection by default
    flightNumber.style.display = "none";

    classType.addEventListener("change", function() {
        if (classType.value === "Flight") {
            flightNumber.style.display = "block"; // Show Flight selection
        } else {
            flightNumber.style.display = "none"; // Hide Flight selection
        }
    });
});

// Hiding ESL option by default
document.addEventListener("DOMContentLoaded", function () {
    const studentLevel = document.getElementById("student-level");
    const classType = document.getElementById("class-type");
    const lessonTopicsA1A2 = document.getElementById("lesson-topics-a1-a2");
    const lessonTopicsA2B1 = document.getElementById("lesson-topics-a2-b1");
    const lessonTopicsB1B2 = document.getElementById("lesson-topics-b1-b2");
    const lessonTopicsB2C1 = document.getElementById("lesson-topics-b2-c1");
    const lessonTopicsC1C2 = document.getElementById("lesson-topics-c1-c2")

    // Hide lesson topics by default
    lessonTopicsA1A2.style.display = "none";
    lessonTopicsA2B1.style.display = "none";
    lessonTopicsB1B2.style.display = "none";
    lessonTopicsB2C1.style.display = "none";
    lessonTopicsC1C2.style.display = "none"

    function updateVisibility() {
        console.log("Student Level:", studentLevel.value);
        console.log("Class Type:", classType.value);

        // Show dropdown only if level is A1 or A2 and class type is "Conversation (E)"
        if (studentLevel.value === "A1-A2" && classType.value === "Conversation-esl") {
            lessonTopicsA1A2.style.display = "block"; // Show topics dropdown
        } else {
            lessonTopicsA1A2.style.display = "none"; // Hide dropdown
        }

        // Show dropdown only if level is A2 or B1 and class type is "Conversation (E)"
        if (studentLevel.value === "A2-B1" && classType.value === "Conversation-esl") {
            lessonTopicsA2B1.style.display = "block"
        } else {
            lessonTopicsA2B1.style.display = "none"
        }

        // Show dropdown only if level is B1 or B2 and class type is "Conversation (E)"
        if (studentLevel.value === "B1-B2" && classType.value === "Conversation-esl") {
            lessonTopicsB1B2.style.display = "block"
        } else {
            lessonTopicsB1B2.style.display = "none"
        }

        // Show dropdown only if level is B2 or C1 and class type is "Conversation (E)"
        if (studentLevel.value === "B2-C1" && classType.value === "Conversation-esl") {
            lessonTopicsB2C1.style.display = "block"
        } else {
            lessonTopicsB2C1.style.display = "none"
        }

        // Show dropdown only if level is C1 or C2 and class type is "Conversation (E)"
        if (studentLevel.value === "C1-C2" && classType.value === "Conversation-esl") {
            lessonTopicsC1C2.style.display = "block"
        } else {
            lessonTopicsC1C2.style.display = "none"
        }

    }

    // Run function when user changes dropdowns
    studentLevel.addEventListener("change", updateVisibility);
    classType.addEventListener("change", updateVisibility);
});

document.addEventListener("DOMContentLoaded", function () {
    const commentButton = document.getElementById("comment-btn");
    const commentModal = document.getElementById("comment-modal");
    const closeButton = document.querySelector(".close-btn");
    const saveCommentButton = document.getElementById("save-comment");
    const commentTextarea = document.getElementById("comment-text");

    // Open Modal on Click
    commentButton.addEventListener("click", function () {
        commentModal.style.display = "flex";
    });

    // Close Modal on "X" Button Click
    closeButton.addEventListener("click", function () {
        commentModal.style.display = "none";
    });

    // Close Modal When Clicking Outside
    window.addEventListener("click", function (event) {
        if (event.target === commentModal) {
            commentModal.style.display = "none";
        }
    });

    // Save Comment (Modify this to store data)
    saveCommentButton.addEventListener("click", function () {
        let comment = commentTextarea.value.trim();
        if (comment) {
            alert("Comment Saved: " + comment);
            commentModal.style.display = "none";
        } else {
            alert("Please write a comment before saving.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("check-btn");
    const classTable = document.getElementById("class-table").getElementsByTagName("tbody")[0];

    // Load saved data from LocalStorage
    function loadTableData() {
        const savedData = JSON.parse(localStorage.getItem("classRecords")) || [];
        savedData.forEach((data, index) => addRowToTable(data, index));
    }

    

    // Add a row to the table with Edit & Delete buttons
    function addRowToTable(data, index) {
        const newRow = classTable.insertRow();
        
        // Insert table data
        Object.values(data).forEach(text => {
            const cell = newRow.insertCell();
            cell.innerText = text;
        });

        // Create Delete button
        const teacherCell = newRow.cells[7]; // Teacher's cell
        teacherCell.classList.add("teacher-cell"); // Add the class for positioning

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#10006;"; // Unicode for 'X'
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => deleteRow(index);
        teacherCell.appendChild(deleteButton);


    }

    // Save data when clicking the Play button
    playButton.addEventListener("click", function () {
        const rawDate = document.getElementById("class-date").value;
        const date = formatDateWithOrdinal(rawDate);
        const time = document.getElementById("class-time").value;
        const studentId = document.getElementById("student-id").value;
        const studentName = document.getElementById("student-name").value;
        const level = document.getElementById("student-level").value;
        const classTypeDropdown = document.getElementById("class-type");
        const classType = classTypeDropdown.options[classTypeDropdown.selectedIndex].text;
        const lessonTopicDropdown = document.querySelector("select[id^='lesson-topics']:not([style='display: none;'])");
        const lessonTopic = lessonTopicDropdown ? lessonTopicDropdown.options[lessonTopicDropdown.selectedIndex].text : "N/A";        const teacherDropdown = document.getElementById("teacher-name");
        const teacher = teacherDropdown.options[teacherDropdown.selectedIndex].text;

        if (!date || !time || !studentId || !studentName || !level || !classType || !teacher) {
            alert("Please fill in all required fields before submitting.");
            return;
        }

        const newData = { date, time, studentId, studentName, level, classType, lessonTopic, teacher };

        let classRecords = JSON.parse(localStorage.getItem("classRecords")) || [];
        classRecords.push(newData);
        localStorage.setItem("classRecords", JSON.stringify(classRecords));

        addRowToTable(newData, classRecords.length - 1);
        document.getElementById("student-form").reset();
    });

    // Edit a row
    function editRow(index) {
        let classRecords = JSON.parse(localStorage.getItem("classRecords"));
        const data = classRecords[index];

        // Fill form with existing data
        document.getElementById("class-date").value = data.date;
        document.getElementById("class-time").value = data.time;
        document.getElementById("student-id").value = data.studentId;
        document.getElementById("student-name").value = data.studentName;
        document.getElementById("student-level").value = data.level;
        document.getElementById("class-type").value = data.classType;
        document.getElementById("teacher-name").value = data.teacher;

        // Remove old entry from table & LocalStorage
        classRecords.splice(index, 1);
        localStorage.setItem("classRecords", JSON.stringify(classRecords));
        reloadTable();
    }

    // Delete a row
    function deleteRow(index) {
        let classRecords = JSON.parse(localStorage.getItem("classRecords"));
        classRecords.splice(index, 1);
        localStorage.setItem("classRecords", JSON.stringify(classRecords));
        reloadTable();
    }

    // Reload the table after edit or delete
    function reloadTable() {
        classTable.innerHTML = ""; // Clear table
        loadTableData(); // Reload from LocalStorage
    }

    // Load data when page loads
    loadTableData();
});

function formatDateWithOrdinal(dateString) {
    const dateObj = new Date(dateString);
    
    if (isNaN(dateObj)) return dateString; // If date is invalid, return original

    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-US', { month: 'long' }); // Get full month name

    // Determine ordinal suffix
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantSuffix = (day % 10 <= 3 && Math.floor(day / 10) !== 1) ? suffixes[day % 10] : suffixes[0];

    return `${month}, ${day}${relevantSuffix}`;
}