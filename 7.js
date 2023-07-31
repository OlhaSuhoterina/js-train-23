// Ітератор (Iterator) — це патерн програмування, який надає спосіб послідовного доступу до елементів колекції без розкриття його внутрішньої структури.

// Клас Employee відповідає за створення об'єктів працівників. Кожен працівник має своє ім'я, посаду та зарплату.
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  // Створимо конструктор, що використовується для ініціалізації об'єктів класу. Він приймає три параметри: name, position та salary.
  // Передаємо аргумент в this.name, this.position та this.salary - це властивості класу. Вони ініціалізуються значеннями, переданими в конструктор.
}

// Клас EmployeeGroup використовується для створення груп працівників. Він містить список працівників.
class EmployeeGroup {
  employees = [];
  addEmployee(employee) {
    this.employees.push(employee);
  }
  // Задаємо властивість employees, яке призначене для зберігання працівників. Він ініціалізується як порожній масив.
  // Робимо метод addEmployee, який додає працівника до групи. Він приймає один параметр employee - об'єкт типу Employee.
  // Цей метод додає об'єкт працівника до масиву employees, використовуючи метод push.
}

// Клас EmployeeIterator відповідає за ітерацію по групі працівників.
class EmployeeIterator {
  #employees = null;
  #currentIndex = 0;
  constructor(employeeGroup) {
    this.#employees = employeeGroup.employees;
  }
  #hasNext() {
    return this.#currentIndex < this.#employees.length;
  }
  next() {
    if (this.#hasNext()) {
      const name = this.#employees[this.#currentIndex].name;
      this.#currentIndex++;
      return name;
    }
    return null;
  }
  list() {
    return group.employees.map((employee) => employee.password).join(",");
  }
  // Робимо властивість #employees - це масив працівників, по якому ми будемо ітерувати. Він ініціалізується у конструкторі.
  // Робимо властивість #currentIndex, яка вказує на поточну позицію в масиві працівників. Він ініціалізується зі значенням 0.
  // Конструктор приймає один параметр employeeGroup - об'єкт типу EmployeeGroup. Він ініціалізує властивість #employees this.#employees = employeeGroup.employees.
  // Створимо метод #hasNext, який перевіряє, чи є в масиві працівників наступний елемент для ітерації.
  // Він повертає true, якщо поточний індекс менший за довжину масиву, і false в протилежному випадку.
  // Робимо метод next, який повертає наступного працівника в масиві та збільшує #currentIndex на 1 якщо є наступний елемент, інакше повертає null.
  // Робимо метод list, який використовується для виведення імен всіх працівників в групі.
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо нову групу працівників.
// const employeeGroup = new EmployeeGroup();

// Додаємо нових працівників до групи, використовуючи метод addEmployee.
// employeeGroup.addEmployee(new Employee("John Doe", "Manager", 5000));
// employeeGroup.addEmployee(new Employee("Jane Smith", "Developer", 4000));

// Створюємо новий ітератор для групи працівників.
// const employeeIterator = new EmployeeIterator(employeeGroup);

// Виводимо імена всіх працівників в групі, використовуючи метод list.
// console.log(employeeIterator.list());
