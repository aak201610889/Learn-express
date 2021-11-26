const express=require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
const employees = [
  { id: 1, name: 'ali', salary: 3000 },
  { id: 2, name: 'ahmad', salary: 2000 },
  { id: 3, name: 'yara', salary: 5000 },
  { id: 4, name: 'sara', salary: 3000 },
]


app.get('/:id', (req, res) => {
  const employee=employees.find(emp => emp.id ===parseInt (req.params.id))
  employee?res.send(employee):res.send('<h1>not find</h1>')
})

app.post('/employees', (req, res) => {
  const employee = {
    id:employees.length+1,
    name:req.body.name,
    salary:req.body.salary}
  employees.push(employee)
  res.send(employee)
})

app.delete('/:id', (req, res) => {
  
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (employee) {
    const index = employees.indexOf(employee)
    employees.splice(index, 1)
    res.send(employees)
  }
  else { res.send("<h1>not find</h1>"); }
  
})
app.put('/:id', (req, res) => {
  //find of employee
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (employee) {
    //select employee from employees array
    const index = employees.indexOf(employee)
    //delet employee
    employees.splice(index, 1)
    //create  new data in this employee
    const newEmp = {
      id:parseInt( req.params.id),
      name: req.body.name,
      salary: req.body.salary,
    };
    //put new employee in employees array
    employees.push(newEmp);
    res.send(employees)
  }
  else { res.send("<h1>not find</h1>"); }
  
})

const port = process.env.port || 5000;
app.listen(port, () => { console.log('the server om port '+port)})