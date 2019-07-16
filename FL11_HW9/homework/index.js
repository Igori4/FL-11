// Task 0
const getNumbers = (str) => {
  let splitedStr = str.split('');
  let result = [];

  for (let item of splitedStr) {
    if (Number.isInteger(+item)) {
      result.push(+item)
    }
  }

  return result;
}

//Task 1

function findTypes(...args) {
  let objectWithTypes = {}

  for (let data of args) {
    objectWithTypes[typeof data] = + 1
  }

  return objectWithTypes;
}

// Task 2

function executeforEach(arr, func) {
  for (let item of arr) {
    func(item)
  }
}


//Task 3
const mapArray = (arr, func) => {
  let result = []

  for (let item of arr) {
    result.push(func(item))
  }

  return result;
};


// Task 4

const filterArray = (arr, func) => {
  let result = [];

  for (let item of arr) {
    if (func(item)) {
      result.push(item)
    }
  }

  return result;
};


//Task 5
function formatDate(date) {
  let monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  return 'Date : ' + monthNames[monthIndex] + ' ' + day + ' ' + year;
}

// Task 6

const canConvertToDate = (date) => !isNaN(Date.parse(date));

// Task 7

const daysBetween = (date1, date2) => {
  let miliseconds = date2.getTime() - date1.getTime()
  let seconds = parseInt(Math.floor(miliseconds / 1000));
  let minutes = parseInt(Math.floor(seconds / 60));
  let hours = parseInt(Math.floor(minutes / 60));
  let days = parseInt(Math.round(hours / 24));

  return days;
}


// Task 8

const people = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

const getAmountOfAdultPeople = (data) => {
  const adultPeopleAge = 18;
  let result = [];
  for (let person of data) {
    let currentYear = new Date().getFullYear();
    let yearsOldOfPerson = new Date(person['birthday']).getFullYear();
    currentYear - yearsOldOfPerson >= adultPeopleAge ? result.push(person) : false;
  }

  return result.length
}


//Task 9

const keys = (obj) => {
  let result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key)
    }
  }

  return result;
};

//Tast 10

function values(obj) {
  let result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key])
    }
  }

  return result;
}



