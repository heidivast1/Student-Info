//* create student records and then print them to a webpage
//* create data structure to hold info about a group of students
//* array: 5 students, with objects: name, track, num, points

var students = [
  {
    name: 'Bob',
    track: 'CSS',
    achievements: 4,
    grades: 98
  },
  {
    name: 'Jenny',
    track: 'JS',
    achievements: 6,
    grades: 99
  },
  {
    name: 'Cooper',
    track: 'HTML',
    achievements: 1,
    grades: 76
  },
  {
    name: 'Sam',
    track: 'Python',
    achievements: 5,
    grades: 82
  },
  {
    name: 'Beth',
    track: 'Ruby',
    achievements: 5,
    grades: 76
  },
  
];

var message = '';
var student;  

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
  }
  
for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h2>Student: ' + student['name'] + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
  message += '<p>Points: ' + student.grades + '</p>';
}
print(message);