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