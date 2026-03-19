// Build a function that:

// Takes an array of student objects
// Each student has: name and marks[] (5 subjects)
// Calculates average marks for each student
// Filters only passing students (average >= 40)
// Sorts passing students by average — highest first

// Your input data to work with
const students = [
  { name: 'Suraj', marks: [45, 67, 38, 90, 55] },
  { name: 'Priya', marks: [20, 30, 25, 35, 28] },
  { name: 'Rahul', marks: [80, 75, 90, 85, 88] },
  { name: 'Sneha', marks: [40, 42, 39, 45, 50] },
  { name: 'Arjun', marks: [15, 20, 18, 22, 10] },
];

function isStudentsPassed(learners) {
  let passedStudents = [];
  for (let i = 0; i < learners.length; i++) {
    let studentName = learners[i].name;
    let totalMarks = learners[i].marks.reduce((acc, mark) => acc + mark, 0);
    let averageMarks = totalMarks / learners[i].marks.length;
    averageMarks >= 40
      ? passedStudents.push({ average: averageMarks, name: studentName })
      : 'Fail';
  }
  return passedStudents.sort((a, b) => b.average - a.average);
}
