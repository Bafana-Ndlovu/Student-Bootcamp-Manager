// Store all students in an array
const students = [];

// The generator function ' function* '
function* studentIdGenerator() {
  let id = 1;

  while (true) {
    yield `STU${String(id++).padStart(3, "0")}`;
  }
}

const idGenerator = studentIdGenerator();

//console.log(idGenerator.next().value) i will test again Sunday;

function createStudent(
  name,
  course = "JavaScript",
  ...marks
) {
  return {
    id: idGenerator.next().value,
    name,
    course,
    marks
  };
}

const student1 = createStudent(
  "David",
  "JavaScript",
  80,
  75,
  90
);

const student2 = createStudent(
  "Sarah",
  "Python",
  60,
  70,
  80
);

const student3 = createStudent(
  "John",
  "JavaScript",
  40,
  45,
  50
);

const student4 = createStudent(
  "Lisa",
  "React",
  90,
  85,
  95
);

const student5 = createStudent(
  "Mark",
  undefined,
  55,
  65,
  75
);

students.push(
  ...[
    student1,
    student2,
    student3,
    student4,
    student5
  ]
);

function calculateAverage(marks) {

  if (marks.length === 0) {
    return 0;
  }

  const total = marks.reduce(
    (sum, mark) => sum + mark,
    0
  );

  return total / marks.length;
}

function getStatus(
  average,
  passMark = 50
) {
  return average >= passMark
    ? "PASS"
    : "FAIL";
}

students.forEach(student => {

  const average =
    calculateAverage(student.marks);

  const status =
    getStatus(average);

  console.log(`
ID: ${student.id}
Name: ${student.name}
Course: ${student.course}
Average: ${average.toFixed(2)}
Status: ${status}
`);
});

const config = (function () {
  const bootcampName = "Student Boot camp Manager";
  const version = "1.0";
  const passMark = 50;

  return {
    bootcampName,
    version,
    passMark
  };
})();

console.log("=== APPLICATION CONFIG ===");
console.log(config);

function createProcessingCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const processedCounter = createProcessingCounter();

console.log(processedCounter());
console.log(processedCounter());
console.log(processedCounter());

const displayStudentName = function (student) {
  console.log(student.name);
};


displayStudentName(student1);


function processStudent(student, actionFunction) {
  actionFunction(student);
}

processStudent(student1, displayStudentName);


function processStudentWithCallback(
  student,
  callback
) {
  console.log(`Processing ${student.name}...`);

  callback(student);
}

processStudentWithCallback(
  student2,
  function (student) {
    console.log(
      `${student.name} processing complete.`
    );
  }
);


const reportManager = {
  title: "Student Report Manager",

  showTitle() {
    console.log(this.title);
  }
};

reportManager.showTitle();


this.title

reportManager.title

function displayStudentInfo() {
  console.log(
    `${this.name} studies ${this.course}`
  );
}

displayStudentInfo.call(student1);

function showStudentMarks(
  mark1,
  mark2,
  mark3
) {
  console.log(
    `${this.name}: ${mark1}, ${mark2}, ${mark3}`
  );
}

showStudentMarks.apply(
  student1,
  student1.marks
);


const boundStudentInfo =
  displayStudentInfo.bind(student3);


boundStudentInfo();

// Testing again in the morning
console.log("\n=== DAY 2 TESTS ===");

reportManager.showTitle();

displayStudentInfo.call(student1);

showStudentMarks.apply(
  student1,
  student1.marks
);

boundStudentInfo();

processStudent(
  student4,
  displayStudentName
);

processStudentWithCallback(
  student5,
  student => {
    console.log(
      `${student.name} callback executed`
    );
  }
);

console.log(
  "Students Processed:",
  processedCounter()
);

/*
setTimeout()
Asynchronous Processing
Final Student Report
Class Summary Report
Edge Case Tests
Bonus Features
*/

setTimeout(() => {
  console.log("Student processing complete");
}, 2000);

console.log("\n=== ASYNCHRONOUS PROCESSING ===");

function processStudentAsync(student, callback) {
  console.log(`Starting processing for ${student.name}...`);

  setTimeout(() => {
    console.log(`Finished processing ${student.name}`);

    callback(student);
  }, 2000);
}

processStudentAsync(student1, (student) => {
  console.log(`Callback executed for ${student.name}`);
});

console.log("Program continues running...");

//Student report function
function generateStudentReport(student) {
  const average = calculateAverage(student.marks);

  const status = getStatus(
    average,
    config.passMark
  );

  return {
    id: student.id,
    name: student.name,
    course: student.course,
    marks: student.marks,
    average: average.toFixed(2),
    status
  };
}

// Individual report per person
console.log("\n=== FINAL STUDENT REPORTS ===");

students.forEach(student => {
  const report =
    generateStudentReport(student);

  console.log(report);
});

// Class Summary report
function generateClassSummary() {

  const reports =
    students.map(generateStudentReport);

  const passed =
    reports.filter(
      student => student.status === "PASS"
    ).length;

  const failed =
    reports.filter(
      student => student.status === "FAIL"
    ).length;

  console.log("\n=== CLASS SUMMARY ===");

  console.log(
    "Total Students:",
    students.length
  );

  console.log(
    "Students Processed:",
    processedCounter()
  );

  console.log(
    "Students Passed:",
    passed
  );

  console.log(
    "Students Failed:",
    failed
  );
}

//d Running the summary for testing
generateClassSummary();

// 
console.log("\n=== EDGE CASE TESTS ===");

const noMarksStudent =
  createStudent("Tom");

console.log(
  calculateAverage(
    noMarksStudent.marks
  )
);

const oneMarkStudent =
  createStudent(
    "Jerry",
    "HTML",
    80
  );

console.log(
  calculateAverage(
    oneMarkStudent.marks
  )
);

const defaultCourseStudent =
  createStudent(
    "Peter",
    undefined,
    60,
    70
  );

console.log(
  defaultCourseStudent.course
);



// Top students
function getTopStudent() {

  return students.reduce(
    (top, current) => {

      const currentAverage =
        calculateAverage(
          current.marks
        );

      const topAverage =
        calculateAverage(
          top.marks
        );

      return currentAverage >
        topAverage
        ? current
        : top;

    }
  );
}

const topStudent =
  getTopStudent();

console.log("\n=== TOP STUDENT ===");

console.log(
  topStudent.name,
  calculateAverage(
    topStudent.marks
  )
);

// Class Average
function getClassAverage() {

  const total =
    students.reduce(
      (sum, student) =>
        sum +
        calculateAverage(
          student.marks
        ),
      0
    );

  return total /
    students.length;
}
console.log(
  "\nClass Average:",
  getClassAverage().toFixed(2)
);
