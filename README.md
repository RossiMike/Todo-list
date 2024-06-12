
# Task Management Application

A simple task management application that helps users to add, track, and manage their tasks efficiently. This application includes a clock to display the current date and time, a search bar to filter tasks, and various functionalities to manipulate and view tasks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:
   ```sh
   cd your-repository
   ```

3. Open the `index.html` file in your preferred web browser to run the application.

## Usage

- **Add a Task**: Enter the task description in the input field and click the "Add Task" button.
- **View All Tasks**: Click the "Show All Tasks" button to display all tasks.
- **View Completed Tasks**: Click the "Show Completed Tasks" button to display only the completed tasks.
- **Sort Tasks**: Click the "Sort Tasks by Completed" button to sort tasks by their completion status.
- **Generate Task Report**: Click the "Generate Report" button to view a summary of tasks.

## Project Structure

The project consists of the following files:

```
your-repository/
├── src/
│   ├── clock.js         # Handles clock functionality (date and time display)
│   ├── script.js        # Main script for task management
│   └── searchBar.js     # Implements search functionality for tasks
├── index.html           # Main HTML file
├── styles.css           # CSS file for styling
└── README.md            # Project README file
```

### File Descriptions

- **clock.js**:
  - Sets a clock to display the current date and time.
  - Functions: `clock`, `checkTime`, `currentDate`, `currentTime`.

- **script.js**:
  - Manages tasks: add, delete, update, and filter tasks.
  - Handles saving and loading tasks from local storage.
  - Functions: `saveTasksToLocalStorage`, `loadTasksFromLocalStorage`, `addTask`, `createProgressOptions`, `fillDivs`, `displayTasks`, `completeTask`, `toggleTaskCompletion`, `deleteTask`, `filterCompletedTasks`, `sortTasksByCompleted`, `updateTaskDescription`, `promptUpdateDescription`, `updateTaskProgress`, `generateTaskReport`.

- **searchBar.js**:
  - Implements search functionality to filter tasks based on input.
  - Functions: `search`.

## Features

- **Real-time Clock**: Displays current date and time, updated every second.
- **Task Management**: Add, update, delete, and filter tasks.
- **Task Search**: Filter tasks based on user input.
- **Local Storage**: Saves tasks to local storage to persist data across sessions.
- **Task Sorting and Reporting**: Sort tasks by completion status and generate task reports.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.
