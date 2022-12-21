function parseCount(arg) {
	if (isNaN(Number.parseFloat(arg))) {
		throw new Error ("Невалидное значение");
	}
	return Number.parseFloat(arg);
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch(error) {
		return error;
	} 
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || c + b < a) {
			throw new Error ("Треугольник с такими сторонами не существует")
		}
		this.sideA = a,
		this.sideB = b,
		this.sideC = c
	}
	get perimeter() {
			return this.sideA + this.sideB + this.sideC;
	}
	get area() {
		let p = 0.5 * this.perimeter;
		let square = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
		return +square.toFixed(3);
	}
}

function getTriangle(a, b, c) {
 	try {
 		return new Triangle(a, b ,c);
 	} catch(error) {
 		return {
 			get perimeter() {
 				return "Ошибка! Треугольник не существует"
 			},
 			get area() {
 				return "Ошибка! Треугольник не существует"
 			}
 		};
 	}
}
