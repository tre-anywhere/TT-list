export interface ITask {
  userId: number;
  taskId: number;
  name: string;
  details: string;
  completed: boolean;
  priority: string[];
}
