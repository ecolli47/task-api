import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}
// Find a task by its ID (Done)
export async function findById(id) {
  return prisma.task.findUnique({
    where: { id: Number(id) },
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
