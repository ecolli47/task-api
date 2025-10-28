import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

// Get a task by its ID (Done)
export async function getTaskById(id) {
  if (isNaN(id)) {
    const error = new Error('Validation failed');
    error.status = 400;
    error.details = ['ID must be a number'];
    throw error;
  }
  const task = await taskRepository.findById(id);
  if (!task) {
    const error = new Error('Task not found');
    error.status = 404;
    throw error;
  }
  return task;
}
// Create a new task
export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
