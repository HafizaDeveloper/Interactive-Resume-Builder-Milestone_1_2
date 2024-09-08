var form = document.getElementById('resume-form');
var resumeContainer = document.getElementById('resume');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resume = "\n    <h1>".concat(name, "</h1>\n    <p>").concat(email, "</p>\n    <p>").concat(phone, "</p>\n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n    <h2>Work Experience</h2>\n    <p>").concat(workExperience, "</p>\n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n  ");
    resumeContainer.innerHTML = resume;
});
