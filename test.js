let studentForm = document.getElementById("studentForm");
let studentTable = document.getElementById("studentTable");
let students = []; // tạo 1 mảng lưu trữ thông tin sinh viên

studentForm.addEventListener("submit", function (event) {
  // Lấy giá trị từ form
  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);
  let major = document.getElementById("major").value;

  // Tạo đối tượng sinh viên và thêm vào mảng
  let student = { name, age, major };
  students.push(student);

  // Cập nhật bảng
  updateTable();
  event.preventDefault(); // Ngăn form submit mặc định - Nếu ko có thì form sau khi nhập tự động bị xóa
});

// console.log(students); //Kiểm tra xem thông tin có đc update vavfo Stundent chưa

// thêm thông tin sv vào bảg và in ra
function updateTable() {
  for (let student of students) {
    let row = studentTable.insertRow();
    let nameCell = row.insertCell();
    let ageCell = row.insertCell();
    let majorCell = row.insertCell();

    nameCell.textContent = student.name;
    ageCell.textContent = student.age;
    majorCell.textContent = student.major;
  }
}
