function compareArrays(arr1, arr2) {
	// Императивный метод
	//
	// if (arr1.length !== arr2.length) {
	// 	return false;
	// }
	// for (let i = 0; i < arr1.length; i++) {
	// 	if (arr1[i] !== arr2[i]) {
	// 		return false;
	// 	}
	// }
	// return true;

  return arr1.length === arr2.length &&                    // сравнение длин массивов
         arr1.every((item, index) => item === arr2[index]);// сравненние массивов поэлементно
}

function getUsersNamesInAgeRange(users, gender) {
  let sum = users.filter(item => item.gender === gender)   // выборка массива по gender
                 .map(item => item.age)                    // формирование массива возрастов
                 .reduce((acc, age, index, arr) => {       // подсчёт среднего значения возрастов
  	               acc += age;
  	               if (index === arr.length - 1) {
  		             return acc / arr.length;
  	               } 
  	               return acc;
                 }, 0);
  return sum;
}