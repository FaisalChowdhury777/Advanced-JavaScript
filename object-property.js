const Student=[
        {id: 21, name: 'Faisal'},
        {id: 31 ,name: 'Sunny'},
        {id: 41 ,name: 'Rafi'},
        {id: 51, name: 'jitu'},

];

const names= Student.map(s =>s.name);
const bigger=Student.filter(s=> s.id>30);
console.log(bigger);