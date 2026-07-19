const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const results = document.getElementById("results");

submitBtn.addEventListener("click", function () {
    let score = 0;
    let feedback = "";

    // Question 1
    const q1 = document.getElementById("q1").value.trim().toLowerCase();

    if (q1 === "hypertext transfer protocol") {
        score++;
        feedback += "<p class='correct'>Question 1: Correct</p>";
    } else {
        feedback +=
            "<p class='incorrect'>Question 1: Incorrect. The correct answer is Hypertext Transfer Protocol.</p>";
    }

    // Question 2
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (q2 && q2.value === "GET") {
        score++;
        feedback += "<p class='correct'>Question 2: Correct</p>";
    } else {
        feedback +=
            "<p class='incorrect'>Question 2: Incorrect. The correct answer is GET.</p>";
    }

    // Question 3
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q3 && q3.value === "404") {
        score++;
        feedback += "<p class='correct'>Question 3: Correct</p>";
    } else {
        feedback +=
            "<p class='incorrect'>Question 3: Incorrect. The correct answer is 404.</p>";
    }

    // Question 4
    const q4 = document.querySelector('input[name="q4"]:checked');

    if (q4 && q4.value === "HTTPS") {
        score++;
        feedback += "<p class='correct'>Question 4: Correct</p>";
    } else {
        feedback +=
            "<p class='incorrect'>Question 4: Incorrect. The correct answer is HTTPS.</p>";
    }

    // Question 5
    const getAnswer = document.getElementById("get").checked;
    const postAnswer = document.getElementById("post").checked;
    const putAnswer = document.getElementById("put").checked;
    const deleteAnswer = document.getElementById("delete").checked;
    const jpegAnswer = document.getElementById("jpeg").checked;

    if (
        getAnswer &&
        postAnswer &&
        putAnswer &&
        deleteAnswer &&
        !jpegAnswer
    ) {
        score++;
        feedback += "<p class='correct'>Question 5: Correct</p>";
    } else {
        feedback +=
            "<p class='incorrect'>Question 5: Incorrect. GET, POST, PUT, and DELETE should be selected.</p>";
    }

    const percentage = Math.round((score / 5) * 100);

    let resultMessage = "";

    if (percentage >= 80) {
        resultMessage = `<h2 class="pass">PASS — ${percentage}%</h2>`;
    } else {
        resultMessage = `<h2 class="fail">FAIL — ${percentage}%</h2>`;
    }

    results.innerHTML = `
        ${resultMessage}
        <p>You answered ${score} out of 5 questions correctly.</p>
        ${feedback}
    `;
});

resetBtn.addEventListener("click", function () {
    results.innerHTML = "";
});