const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];

const titles = movies => movies.map(movie => movie.title);
const before2000 = movies => movies.filter(movie => movie.year < 2000);

const moviesBefore2000 = titles(before2000(movieList));
console.log(moviesBefore2000);

Complete the following program to compute and show the names of political forms ending with "cy".

const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
];

const names = forms => forms.map(form => form.name);
const filter = (array, func) => array.filter(func);
const endingWithCy = form => form.endsWith("cy");

const formsEndingWithCy = filter(names(governmentForms),endingWithCy);

// Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
console.log(formsEndingWithCy);

Complete the following program to compute and show the total sum of the values in each of the arrays.

const arrays = [[1, 4], [11], [3, 5, 7]];
const sum = array => array.reduce((acc,value) => acc + value, 0);
const arraysSum = sum(arrays.map(array => sum(array)));

console.log(arraysSum); // Should show 31

// Female student results
const students = [
	{
		name: "Anna",
		sex: "f",
		grades: [4.5, 3.5, 4]
	},
	{
		name: "Dennis",
		sex: "m",
		country: "Germany",
		grades: [5, 1.5, 4]
	},
	{
		name: "Martha",
		sex: "f",
		grades: [5, 4, 2.5, 3]
	},
	{
		name: "Brock",
		sex: "m",
		grades: [4, 3, 2]
	}
];

// Compute female student results
const female = students => students.filter(student => student.sex === "f");
// get female students
const avgGrade = student => student.grades.reduce((acc,value) => acc + value, 0) / student.grades.length;
const results = student => {
	return {name: student.name,
			avgGrade: avgGrade(student)
		}
}
const femaleStudentsResults = female(students).map(student => results(student))
console.log(femaleStudentsResults);
