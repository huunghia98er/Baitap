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
let result_name = document.getElementById('report_name')
let result_age = document.getElementById('report_age')
let result_class = document.getElementById('report_class')
let result_ID = document.getElementById('report_ID')
let reset_Input = document.getElementById('reset')
let tablelist = document.getElementById('list')
let std_list = document.getElementById('students_list')
let class_list = JSON.parse(localStorage.getItem('Class_List'))
localStorage.setItem('Class_List', JSON.stringify(array))
let Students = []
let flag = 0

var component = function (){
    var display_list = function(){
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
    
    var check_ID = function(stu, stus) {
        if (stu.ID === ''){
            result_ID.innerHTML = '<p style="color: red">Mã ID không hợp lệ!</p>'
            flag = 1;
        } else {
            for (let i = 0; i < stus.length; i++){
                if (stu.ID === stus[i].ID){
                    result_ID.innerHTML = '<p style="color: red">Mã ID đã tồn tại!</p>'
                    flag = 1
                    break;
                } else {
                    result_ID.innerHTML = '<p style="color: #5e08f1">Mã ID hợp lệ!</p>'
                }
            }
        }
    }
    
    var check_class = function(stu, class_list) {
        for (let i = 0; i < class_list.length; i++){
            if (stu.Class == class_list[i].class){
                result_class.innerHTML = '<p style="color: #5e08f1">Lớp hợp lệ!</p>'
                flag = 0
                break;
            } else {
                result_class.innerHTML = '<p style="color: red">Lớp không tồn tại!</p>'
                flag = 1
            }
        }
    }
    
    var check_student= function(stu, stus, class_list) {
        flag = 0
        check_class(stu, class_list)
        if (stu.Name === ''){
            result_name.innerHTML = '<p style="color: red">Tên không hợp lệ!</p>'
            flag = 1
        } else{
            result_name.innerHTML = '<p style="color: #5e08f1">Tên hợp lệ!</p>'
        }
        if (stu.Age <= 0 || stu.Age > 80){
            result_age.innerHTML = '<p style="color: red">Tuổi không hợp lệ!</p>'
            flag = 1
        } else {
            result_age.innerHTML = '<p style="color: #5e08f1">Tuổi hợp lệ!</p>'
        }
        check_ID(stu, stus)
    }
    var action = function(){
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
    }

    return {
        init : function(){
            display_list();
            action();
        }
    }
}();

document.addEventListener('DOMContentLoaded', function (){component.init()});