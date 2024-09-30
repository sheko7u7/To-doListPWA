export interface Task {
  id: number;
  title: string;
  status: 'Pendiente' | 'En progreso' | 'Completado';
}
