function toggleContent() {
  var selectedValue = document.getElementById("lectureType").value;
  var permanentContent = document.querySelector(".permanent");
  var guestLecContent = document.querySelector(".guest-lec");

  // Clear existing content
  permanentContent.innerHTML = "";
  guestLecContent.innerHTML = "";

  if (selectedValue === "permanent") {
    // Add permanent staff content
    permanentContent.innerHTML = `
    <h2>Permanent Staff</h2>
    <div class="containers">
    <h3>Dr. Eufronia M. Magundayao</h3>
    <h4>Doctor of Technology</h4>
    <h4>Dean, College of Industrial Technology</h4>
    <h4>Applied Chemistry, Total Quality Management</h4>
</div>

<div class="containers">
    <h3>Mr. Philip D. Geneta</h3>
    <h4>Master of Technology</h4>
    <h4>Program Chair, College of Industrial Technology</h4>
    <h4>Technology Research, Computer Technology</h4>
</div>

<div class="containers">
    <h3>Mr. Rexon S. Hernandez</h3>
    <h4>Master of Technology</h4>
    <h4>Electrical Technology</h4>
</div>
    `;
  } else if (selectedValue === "guest-lec") {
    // Add guest lecturer content
    guestLecContent.innerHTML = `
      <div class="containers">
      <h2>Guest Lecturers</h2>
      <div class="containers">
          <h3>Engr. Mhel V. Anacio</h3>
          <h4>Bachelor of Science in Computer Engineering</h4>
          <h4>Computer Technology</h4>
      </div>

      <div class="containers">
          <h3>Mr. Elbert O. Baja</h3>
          <h4>BIT Major in Insutrumentation and Control Technology</h4>
          <h4>Master of Technology (Ongoing)</h4>
          <h4>Insutrumentation and Control Technology</h4>
      </div>

      <div class="containers">
          <h3>Engr. Estelito C. Carpio Jr.</h3>
          <h4>BS Mechatronics Engineering & BIT Mechanical Technology</h4>
          <h4>CADCAM, Engineering Subjects</h4>
      </div>

      <div class="containers">
          <h3>Mr. Cristopher B. Castillo</h3>
          <h4>Master of Technology</h4>
          <h4>Electronics Technology, Electrical Technology</h4>
      </div>

      <div class="containers">
          <h3>Engr. Paul Richard G. Cuarez</h3>
          <h4>MS Engineering Management (ongoing)</h4>
          <h4>Industrial Engineering</h4>
      </div>
      
      <div class="containers">
          <h3>Engr. Gerald M. Foliente</h3>
          <h4>Bachelor of Science in Electrical Engineering</h4>
          <h4>Electrical Technology</h4>
      </div>

      <div class="containers">
          <h3>Engr. Jeremiah R. Garcia</h3>
          <h4>BS Chemical Engineering , Master in Business Administration</h4>
          <h4>Applied Physics, Applied Chemistry</h4>
      </div>

      <div class="containers">
          <h3>Engr. Maricel M. Lacbay</h3>
          <h4>Master of Science in Industrial Engineering</h4>
          <h4>Occupation Safety and Health, Human Factors Engineering</h4>
      </div>

      <div class="containers">
          <h3>Ms. Angelica Mae C. Macalinga</h3>
          <h4>Bachelor of Science in Secondary Education</h4>
          <h4>Social Science</h4>
      </div>

      <div class="containers">
          <h3>Mr. Aureo G. Madrid</h3>
          <h4>Master of Arts in Industrial Education major in Administration and Supervision</h4>
          <h4>Electrical Technology</h4>
      </div>

      <div class="containers">
          <h3>Ms. Jhane Allysa Nicole M. Marabe</h3>
          <h4>Master of Technology (ongoing)</h4>
          <h4>BIT Major in Computer Technology</h4>
          <h4>Computer Technology</h4>
      </div>

      <div class="containers">
          <h3>Ms. Gladys P. Perez</h3>
          <h4>Master of Science in Mathematics (24units ongoing)</h4>
          <h4>Mathematics</h4>
      </div>

      <div class="containers">
          <h3>Engr. Earvin S. Rosita</h3>
          <h4>Bachelor of Science in Industrial Engineering</h4>
          <h4>Quality Management System, Logistics Management</h4>
      </div>
    `;
  }

  // Display the selected section
  permanentContent.style.display = selectedValue === "permanent" ? "block" : "none";
  guestLecContent.style.display = selectedValue === "guest-lec" ? "block" : "none";
}
