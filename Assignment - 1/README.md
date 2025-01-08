# Lab - 1: Assignment

## Topics Covered
- **Variables and Data Types**: `let`, `const`, `var`.
- **`this` keyword and Scope**.
- **Functions**: Declaration, Expression, and Arrow Functions.
- **Arrays**: Methods like `map()`, `filter()`, `find()`.
- **Objects**: Accessing and Manipulating Objects.
- **ES6+ Features**: Destructuring and Template Literals.

---

## Problem Statements

### Problem 1: Task Management System
**Objective**: Create a system to manage daily tasks dynamically.

#### Tasks:
1. Create an array of task objects. Each object should contain:
   - `title` (string): The name of the task.
   - `status` (string): Either "Pending" or "Completed".
   - `priority` (number): A value between 1 (low priority) and 5 (high priority).
2. Write the following functions:
   - **Add Task**: Use an arrow function to add a new task object to the array.
   - **Filter by Status**: Use `filter()` to return all tasks based on their status.
   - **Find High Priority Task**: Use `find()` to get the first task with a priority of 5.
   - Use `map()` to create a list of task titles with their status, formatted as:
     - `"Task: [Title], Status: [Status]"`.
   - Use template literals to log the details of all tasks in a readable format.

---

### Problem 2: Online Shopping Cart
**Objective**: Develop a simple shopping cart system.

#### Tasks:
1. Create an array of product objects, where each object contains:
   - `productName` (string),
   - `price` (number),
   - `quantity` (number).
2. Write the following functions:
   - **Add Product**: Function to add a new product to the cart.
   - **Calculate Total**: Use `reduce()` to calculate the total cost of all items in the cart.
   - **Remove Product**: Use an arrow function to remove a product by name.
   - Use destructuring to extract and log product details (e.g., name and price) for each product in the cart.
   - Use template literals to display a summary of the cart in this format:
     - `"Product: [Name], Price: $[Price], Quantity: [Quantity]"`.

---

### Problem 3: Weather Forecast Tracker
**Objective**: Build a tracker to manage weather data for different cities.

#### Tasks:
1. Create an array of city weather objects, where each object contains:
   - `cityName` (string),
   - `temperature` (number in Celsius),
   - `condition` (string, e.g., "Sunny", "Cloudy", "Rainy").
2. Write the following functions:
   - **Add City Weather**: Function to add a new city weather object.
   - **Find Hottest City**: Use `find()` to identify the city with the highest temperature.
   - **Filter by Condition**: Use `filter()` to list all cities with a specific weather condition.
   - Use `map()` to create a list of city names with their temperatures in the format:
     - `"City: [CityName], Temp: [Temperature]°C"`.
   - Use destructuring to extract and log details of the hottest city.
   - Use template literals to log a weather summary for all cities in this format:
     - `"City: [Name], Temp: [Temp]°C, Condition: [Condition]"`.

---

## Submission Guidelines
1. Ensure your code is **well-commented** and **formatted**.
2. Provide **test cases** for each function.
3. Submit your assignment as a **GitHub repository link**, including:
   - A `README.md` file explaining the problem statements.
   - Instructions on how to run the code.

---

## Bonus Challenge
Enhance the **Weather Forecast Tracker**:
1. Add a feature to **sort cities by temperature**.
2. Include a function to **convert temperatures between Celsius and Fahrenheit**.

---

# README.md Template

## Lab - 1: Assignment

### Problem Statements
This assignment covers three core problems:

1. **Task Management System**: A system to dynamically manage daily tasks.
2. **Online Shopping Cart**: A shopping cart system to manage products.
3. **Weather Forecast Tracker**: A tracker to manage weather data for different cities.

### Topics Covered
- **Variables and Data Types**: `let`, `const`, `var`.
- **`this` keyword and Scope**.
- **Functions**: Declaration, Expression, and Arrow Functions.
- **Arrays**: Methods like `map()`, `filter()`, `find()`.
- **Objects**: Accessing and Manipulating Objects.
- **ES6+ Features**: Destructuring and Template Literals.

### How to Run the Code
1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```

2. Navigate to the project directory:
   ```bash
   cd lab1-assignment
   ```

3. Open the file in any JavaScript runtime environment (e.g., Node.js or a browser console).

4. Each problem is implemented in a separate section of the code. Test cases are included within the code.

### Bonus Features
- Sorting cities by temperature.
- Converting temperatures between Celsius and Fahrenheit.

Feel free to explore and enhance the code further!
