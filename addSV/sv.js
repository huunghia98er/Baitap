const array = [
    {'class': 'FPT Aptech'},
    {'class': 'Cao đẳng FPT'},
    {'class': 'Đại học FPT'},
    {'class': 'FUNiX'}
];
let Students_List = `<tr>
    <th>ID</th>
    <th>Họ và tên</th>
    <th>Tuổi</th>
    <th>Lớp</th>
</tr>`
let Name_Input = document.getElementById('name')
let ID_Input = document.getElementById('IDsv')
let Class_Input = document.getElementById('Class')
let Age_Input = document.getElementById('age')
let submit = document.getElementById('submit')
let result_name = document.getElementById('bug_name')
let result_age = document.getElementById('bug_age')
let result_class = document.getElementById('bug_class')
let result_ID = document.getElementById('bug_ID')
let reset_Input = document.getElementById('reset')
let tablelist = document.getElementById('list')
let std_list = document.getElementById('students_list')
let class_list = JSON.parse(localStorage.getItem('Class_List'))
localStorage.setItem('Class_List', JSON.stringify(array))
let Students = []
let flag = 0


function display_list(){
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

let check_ID = function(stu, stus) {
    for (let i = 0; i < stus.length; i++){
        if (stu.ID === stus[i].ID){
            result_ID.innerHTML = "Mã ID đã tồn tại!"
            flag = 1
            break;
        } else {
            result_ID.innerHTML = "Mã ID hợp lệ!"
        }
    }
}

let check_class = function(stu, stus) {
    for (let i = 0; i < stus.length; i++){
        if (stu.Class == class_list[i].class){
            result_class.innerHTML = "Lớp hợp lệ!"
            flag = 0
            break;
        } else {
            result_class.innerHTML = "Lớp không tồn tại!"
            flag = 1
        }
    }
}

function check_student(stu, stus, class_list) {
    flag = 0
    check_class(stu, class_list)
    if (stu.Name === ''){
        result_name.innerHTML = "Tên không hợp lệ!"
        flag = 1
    } else{
        result_name.innerHTML = "Tên hợp lệ!"
    }
    if (stu.Age <= 0 || stu.Age > 80){
        result_age.innerHTML = "Tuổi không hợp lệ!"
        flag = 1
    } else {
        result_age.innerHTML = "Tuổi hợp lệ!"
    }
    check_ID(stu, stus)
}

submit.addEventListener('click', function(){
    let Student = {
        Name: Name_Input.value,
        Age: Age_Input.value,
        Class: Class_Input.value,
        ID: ID_Input.value
    }
    check_student(Student, Students, class_list);
    if (flag === 0){
        Students.push(Student);
        Students_List += `<tr>
            <td>${Student.ID}</td>
            <td>${Student.Name}</td>
            <td>${Student.Age}</td>
            <td>${Student.Class}</td>
            </tr>`
        tablelist.innerHTML = Students_List
        std_list.style.display = 'block'
        localStorage.setItem('Students', JSON.stringify(Students))
    }
})

reset_Input.addEventListener('click', function(){
    Name_Input.value = ''
    ID_Input.value = ''
    Class_Input.value = ''
    Age_Input.value = ''
})