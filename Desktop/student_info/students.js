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
var search;
var notFound;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
  }

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student['name'] + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  report += '<p>Points: ' + student.grades + '</p>';
  return report;
  //*reminder of scope: var only lives in this function because defined there
}

while (true) {
  search = prompt('Search student records: type a name [Jody] (or type quit to end)')
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name === search ) {
      message = getStudentReport(student);
      notFound = false;
      print(message);
      break
    } else {
      notFound = true;
    }
  }
  if (notFound === true && message === "") {
    message = "Sorry, No student found with that name."
    alert(message);
    search = "quit";
  }
}
print(message);
