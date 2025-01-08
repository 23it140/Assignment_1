let tasks = [
    { title: "Buy groceries", status: "Pending", priority: 3 },
    { title: "Finish project", status: "Completed", priority: 5 },
    { title: "Schedule meeting", status: "Pending", priority: 4 },
];

const addTask = (title, status, priority) => {
    tasks.push({ title, status, priority });
};

const filterByStatus = (status) => tasks.filter(task => task.status === status);

const findHighPriorityTask = () => tasks.find(task => task.priority === 5);

const getTaskTitlesWithStatus = () =>
    tasks.map(task => `Task: ${task.title}, Status: ${task.status}`);

const logTaskDetails = () => {
    tasks.forEach(({ title, status, priority }) => {
        console.log(`Title: ${title}, Status: ${status}, Priority: ${priority}`);
    });
};

addTask("Plan vacation", "Pending", 2);
console.log("Filtered Tasks (Pending):", filterByStatus("Pending"));
console.log("First High Priority Task:", findHighPriorityTask());
console.log("Task Titles with Status:", getTaskTitlesWithStatus());
console.log("\nAll Task Details:");
logTaskDetails();