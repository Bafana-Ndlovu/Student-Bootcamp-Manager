# Student Boot Camp Manager

## Project Description

Student Boot camp Manager is a JavaScript console application that allows users to register students, store courses and marks, calculate averages, determine PASS or FAIL status, generate unique student IDs, process students asynchronously, and generate reports.

This project demonstrates all required Module 4 JavaScript concepts including closures, higher-order functions, generators, callbacks, context binding, and asynchronous programming.

---

## Features

- Register students
- Generate unique student IDs
- Store student names
- Store student courses
- Store student marks
- Calculate student averages
- Determine PASS or FAIL status
- Generate student reports
- Generate class summary reports
- Process students asynchronously
- Display top-performing student
- Calculate class average

---

## Technologies Used

- JavaScript (ES6+)
- Node.js
- Console Application

---

## How to Run

1. Open the project in VS Code.
2. Open the terminal.
3. Run the following command:

```bash
node studentManager.js
```

4. The application output will appear in the terminal.

---

## Student Structure

Each student is stored as an object:

```javascript
{ id: "STU001", name: "David", course: "JavaScript", marks: [80, 75, 90] }
```

All students are stored inside an array:

```javascript
const students = [];
```

---

## Module 4 Concepts Implemented

### Default Parameters

Used to assign a default course when one is not provided.

```javascript
function createStudent(name, course = "JavaScript", ...marks) {}
```

### Rest Parameters

Used to accept any number of marks.

```javascript
...marks
```

### Spread Syntax

Used when adding students and copying arrays.

```javascript
students.push(...newStudents);
```

### Closures

Used to create a private processing counter.

```javascript
function createProcessingCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
```

### IIFE

Used to create application configuration settings.

```javascript
const config = (function () {
  const passMark = 50;
  return { passMark };
})();
```

### Functions as Values

Functions are stored in variables and passed to other functions.

```javascript
const displayStudentName = function (student) {
  console.log(student.name);
};
```

### Higher-Order Functions

Functions accept other functions as arguments.

```javascript
function processStudent(student, actionFunction) {
  actionFunction(student);
}
```

### Callbacks

Callbacks determine what happens after processing.

```javascript
processStudentWithCallback(student, callback);
```

### this Keyword

Used inside object methods.

```javascript
const reportManager = {
  title: "Student Report Manager",
  showTitle() {
    console.log(this.title);
  }
};
```

### call()

Used to execute a function with a specific this value.

```javascript
displayStudentInfo.call(student);
```

### apply()

Used to execute a function with a specific this value and array arguments.

```javascript
calculateStudentMarks.apply(student, student.marks);
```

### bind()

Used to create a new function with a fixed this value.

```javascript
const boundStudentInfo = displayStudentInfo.bind(student);
```

### Generator

Used to generate unique student IDs.

```javascript
function* studentIdGenerator() {
  let id = 1;
  while (true) {
    yield `STU${String(id++).padStart(3, "0")}`;
  }
}
```

### yield

Used to return student IDs one at a time.

```javascript
yield "STU001";
```

### next()

Used to retrieve the next generated ID.

```javascript
generator.next().value;
```

### Asynchronous Programming

Used to simulate delayed processing.

```javascript
setTimeout(() => {
  console.log("Finished");
}, 3000);
```

### setTimeout()

Used to delay execution during student processing.

---

## Testing

The application was tested with:

### Normal Cases

- Student passes
- Student fails
- Student has multiple marks
- Student receives a default course

### Edge Cases

- Student has no marks
- Student has one mark
- Invalid input
- Missing course
- Empty marks array

---

## Challenges

### Challenge 1

Creating unique student IDs.

### Solution

I implemented a generator using `function*`, `yield`, and `.next()`.

### Challenge 2

Keeping track of processed students without global variables.

### Solution

I implemented a closure to store the processing count privately.

---

## Sample Output

```
STUDENT
Name: David
Course: JavaScript
Average: 81.67
Status: PASS

CLASS SUMMARY
Total Students: 3
Passed: 2
Students Failed: 1
```

---

## Future Improvements

- Student search
- Course filtering
- Improved validation
- Highest and lowest marks
- Additional statistics
- File storage

---

## Author

David Bafana Ndlovu

### Loom Video Link
https://www.loom.com/share/933a86a64a01491e94dd006ebb9c453f

Student Boot camp Manager Module 4 JavaScript Project
