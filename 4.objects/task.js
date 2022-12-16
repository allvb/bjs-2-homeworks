function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  // if (this.excluded) {
  // 	console.log ("Невозможно добавить оценки так как студент " + this.name + " отчислен");
  // 	return 0;
  // }
  if (this.marks) {
    this.marks.push(...marks);
  } else {
  	return 0;
  }
}

Student.prototype.getAverage = function () {
  if (this.marks) {
    let average = this.marks.reduce((acc, item, index) => {
  	                acc += item;
  	                if (index === this.marks.length - 1) {
  	 	              return acc / this.marks.length;
  	                } 
  	                return acc;
                  }, 0);
  return average;
  } else {
  	return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
