const data = [{name : 'Ashiqur', roll : 9}, {name : 'Alim', roll : 14}, {name : 'Rabbi', roll : 16}];

for (let i = data.length - 1; i >= 0; i--) {
    console.log(data[i].roll, '\t', data[i].name);
}