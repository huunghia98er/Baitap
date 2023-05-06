const array =[
    {'class1': 'Aptech'},
    {'class2': 'Cao dang FPT'},
    {'class3': 'Dai hoc FPT'},
    {'class4': 'FUNiX'}
];
let Students_List = `<tr>
    <th>ID</th>
    <th>Họ và tên</th>
    <th>Tuổi</th>
    <th>Lớp</th>
</tr>`
let submit = document.getElementById('submit')
let result_name = document.getElementById('bug_name')
let result_age = document.getElementById('bug_age')
let result_class = document.getElementById('bug_class')
let result_ID = document.getElementById('bug_ID')
let tablelist = document.getElementById('list')
let std_list = document.getElementById('students_list')
localStorage.setItem('Class_List', JSON.stringify(array))
let Students = []



submit.addEventListener('click', function(){
    let Name_Input = document.getElementById('name')
    let ID_Input = document.getElementById('IDsv')
    let Class_Input = document.getElementById('Class')
    let Age_Input = document.getElementById('age')
    let Student = {
        Name: Name_Input.value,
        Age: Age_Input.value,
        Class: Class_Input.value,
        ID: ID_Input.value
    }
    // check_student(Student, Students);
    Students.push(Student);

    Students_List += `<tr>
            <td>${Student.ID}</td>
            <td>${Student.Name}</td>
            <td>${Student.Age}</td>
            <td>${Student.Class}</td>
        </tr>`

    Name_Input.value = ''
    ID_Input.value = ''
    Class_Input.value = ''
    Age_Input.value = ''
    tablelist.innerHTML = Students_List
    std_list.style.display = 'block'
    localStorage.setItem('Students', JSON.stringify(Students))
})

function tolocalstorage(){
    Students = (localStorage.getItem('Students') !== null) ? JSON.parse(localStorage.getItem('Students')) : []
    if (Students.length > 0){
        Students.forEach((Students) => {
            Students_List += `<tr>
            <td>${Students.ID}</td>
            <td>${Students.Name}</td>
            <td>${Students.Age}</td>
            <td>${Students.Class}</td>
        </tr>`
        })
        tablelist.innerHTML = Students_List
        std_list.style.display = 'block'
    }
}

// function check_student(stu, stus) {
//     forEach()
// }