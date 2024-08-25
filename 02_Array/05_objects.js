// objects destructure 

const course={
    courseName:"JavaScript in Hindi",
    coursePrice:999,
    courseInstructor:"Niraj",
}

console.log(course.courseInstructor);

const {courseInstructor} = course // another way to directly access the key values of a object
const {coursePrice: price} = course //  Now we will call coursePrice to Price only 
console.log(courseInstructor);
