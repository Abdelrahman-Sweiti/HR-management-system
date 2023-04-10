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
  
  Employee.prototype.render = function() {
    const employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");
  
    const nameDiv = document.createElement("div");
    nameDiv.textContent = this.fullName;
    employeeDiv.appendChild(nameDiv);
  
    const salaryDiv = document.createElement("div");
    salaryDiv.textContent = `Salary: $${this.salary.toFixed(2)}`;
    employeeDiv.appendChild(salaryDiv);
  
    return employeeDiv;
  };
  
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
  