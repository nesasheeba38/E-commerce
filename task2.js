const students=[        //-----data  declaration----/      
    {
    studentId:1,
    name:"kowsi",
    grade:2,
    courses:["math","zoology","botony"],
    attendance:{"2-5-2025":true,"23-6-2025":false},
    hobbies:{sports:["cricket","carrom board"],music:["guitar","flute"]},
},

{
    studentId:2,
    name:"arun",
    grade:5,
    courses:["math","zoology","botony"],
    attendance:{"2-5-2025":true,"23-6-2025":false},
    hobbies:{sports:["cricket","carrom board"],music:["guitar","flute"]},
},
{
    studentId:3,
    name:"nirmal",
    grade:8,
    courses:["math","zoology","botony"],
    attendance:{"2-5-2025":true,"23-6-2025":false},
    hobbies:{sports:["cricket","carrom board"],music:["guitar","flute"]},
},
{
    studentId:4,
    name:"pavi",
    grade:4,
    courses:["math","zoology","botony"],
    attendance:{"2-5-2025":true,"23-6-2025":false},
    hobbies:{sports:["cricket","carrom board"],music:["guitar","flute"]},
},
];
 
 const displayStudentDetails=(student)=>{
    console.log("---student Details");
    for(const key in student){
    if(key!=="courses"){
    console.log(`${key}: ${student[key]}`);
    }
    else{
    console.log(`courses:${student.courses.join(", ")}`);
    }
}
 };

students.forEach((student)=>displayStudentDetails(student));

// --------Filter student by Grade----/
const filterStudentById=(grade)=>{
   return students.filter((student)=>student.grade===grade); 
 };
 console.log("\n----filter for grade---");
 const studentgrade=filterStudentById(8);
 studentgrade.forEach((student)=>displayStudentDetails(student));
   
// -------find Students by ID--------/
 const findStudentById=(studentId)=>{
    return students.find((student)=>student.studentId===studentId);
 };
 console.log("\n----find for studentId(2)");
 const student2=findStudentById(2);
 if(student2){
    displayStudentDetails(student2);
} else {
console.log("student with ID 2 not found.");
}
 
// const attendanceModule= (()=>
// const recordAttendance=(true,false)=>{
// if()
// }
// )


// ----------ADD course------/
const addCourseToStudent=(studentId,course)=>{
const student=findStudentById(studentId);
if(student){
if (!student.courses.includes(course)){
student.courses.push(course);
console.log(`course:${course},student by Id${studentId}`);
}else{
console.log(`course:${course} already exist in student Id${studentId}`);
} }else{
console.log(`product with Id${productId} not founded`);
}
};
console.log("\n-------Addcourse Student-----");
addCourseToStudent(3,"Science");
addCourseToStudent(3,"science");
displayStudentDetails(findStudentById(3));

// ------------Removve Student-----/
const removeStudent=(studentId)=>{
    const index=students.findIndex((s)=> s.studentId===studentId);
    if(index!==-1){
    console.log(`student with id${studentId}`);
    }
    else{
    console.log(`student eith id${studentid} not founded`);
    }
}
console.log("-----RemovaestudentId");
removeStudent(2);
console.log("----after removing student----");
students.forEach((student)=>displayStudentDetails(student));