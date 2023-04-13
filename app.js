function Employee(id, fullName, department, level, imageUrl) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculateSalary();
  }
  
  Employee.prototype.calculateSalary = function() {
    let minSalary, maxSalary;
    switch (this.level) {
      case "Senior":
        minSalary = 1500;
        maxSalary = 2000;
        break;
      case "Mid-Senior":
        minSalary = 1000;
        maxSalary = 1500;
        break;
      case "Junior":
        minSalary = 500;
        maxSalary = 1000;
        break;
      default:
        minSalary = 0;
        maxSalary = 0;
    }
    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    const taxPercent = 7.5;
    const netSalary = randomSalary * (1 - taxPercent / 100);
    return netSalary;
  };
  
  function render() {
    const employeesContainer = document.getElementById('employees-container');
    employeesContainer.innerHTML = '';
  
    employees.forEach(employee => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = employee.imageUrl;
      img.alt = employee.fullName;
      card.appendChild(img);
  
      const details = document.createElement('div');
      details.className = 'details';
      card.appendChild(details);
  
      const name = document.createElement('h2');
      name.textContent = employee.fullName;
      details.appendChild(name);
  
      const id = document.createElement('p');
      id.textContent = `Employee ID: ${employee.id}`;
      details.appendChild(id);
  
      const department = document.createElement('p');
      department.textContent = `Department: ${employee.department}`;
      details.appendChild(department);
  
      const level = document.createElement('p');
      level.textContent = `Level: ${employee.level}`;
      details.appendChild(level);
  
      employeesContainer.appendChild(card);
    });
  }
  
  
  
  const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://example.com/ghazi-samer.jpg"),
    new Employee(1001, "Lana Ali", "Finance", "Senior", "https://example.com/lana-ali.jpg"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://example.com/tamara-ayoub.jpg"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://example.com/safi-walid.jpg"),
    new Employee(1004, "Omar Zaid", "Development", "Senior", "https://example.com/omar-zaid.jpg"),
    new Employee(1005, "Rana Saleh", "Development", "Junior", "https://example.com/rana-saleh.jpg"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://example.com/hadi-ahmad.jpg")
  ];
  
  const mainSection = document.querySelector("main");
  employees.forEach(employee => {
    const employeeDiv = employee.render();
    mainSection.appendChild(employeeDiv);
  });


function generateEmployeeId() {
  const id = Math.floor(Math.random() * 9000) + 1000;
  return `EMP-${id}`;
}

function addEmployee(event) {
  event.preventDefault();

  const form = event.target;
  const fullName = form.elements['full-name'].value;
  const department = form.elements['department'].value;
  const level = form.elements['level'].value;
  const imageUrl = form.elements['image-url'].value;
  const id = generateEmployeeId();

  const employee = { id, fullName, department, level, imageUrl };
  employees.push(employee);

  form.reset();
  saveToLocalStorage();
  render();
}

const employeeForm = document.getElementById('employee-form');
employeeForm.addEventListener('submit', addEmployee);

function render() {
  const employeesContainer = document.getElementById('employees-container');
  employeesContainer.innerHTML = '';

  employees.forEach(employee => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = employee.imageUrl;
    img.alt = employee.fullName;
    card.appendChild(img);

    const details = document.createElement('div');
    details.className = 'details';
    card.appendChild(details);

    const name = document.createElement('h2');
    name.textContent = employee.fullName;
    details.appendChild(name);

    const id = document.createElement('p');
    id.textContent = `Employee ID: ${employee.id}`;
    details.appendChild(id);

    const department = document.createElement('p');
    department.textContent = `Department: ${employee.department}`;
    details.appendChild(department);

    const level = document.createElement('p');
    level.textContent = `Level: ${employee.level}`;
    details.appendChild(level);

    employeesContainer.appendChild(card);
  });
}
function saveToLocalStorage() {
  const employeeStringArray = [];
  employees.forEach(employee => {
    const employeeString = JSON.stringify(employee);
    employeeStringArray.push(employeeString);
  });
  localStorage.setItem('employees', JSON.stringify(employeeStringArray));
}

function loadFromLocalStorage() {
  const employeeStringArray = JSON.parse(localStorage.getItem('employees'));
  const employeeArray = [];
  employeeStringArray.forEach(employeeString => {
    const employee = JSON.parse(employeeString);
    employeeArray.push(employee);
  });
  return employeeArray;
}

function filterByDepartment(department) {
  return employees.filter(employee => employee.department === department);
}

