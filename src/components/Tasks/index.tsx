import { CheckCircle, Circle, Trash } from '@phosphor-icons/react'

import styles from './tasks.module.css'
import { EmptyTask } from './EmptyTask'

type Task = {
  id: string
  name: string
  completed: boolean
}

type TasksProps = {
  data: Task[]
  setTaskAsCompleted: (taskId: string) => void
  removeTask: (taskId: string) => void
}

export function Tasks({ data, setTaskAsCompleted, removeTask }: TasksProps) {
  const allTaskCompleted = data.filter((task) => task.completed === true)

  function handleTaskCompleted(taskId: string) {
    setTaskAsCompleted(taskId)
  }

  function handleTaskRemove(taskId: string) {
    removeTask(taskId)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentInformation}>
        <strong className={styles.tasksCreated}>
          Tarefas criadas <span>{data.length ?? 'nada'}</span>
        </strong>
        {data && allTaskCompleted.length > 0 ? (
          <strong className={styles.tasksCompleted}>
            Concluidas{' '}
            <span>
              {allTaskCompleted.length} de {data.length}
            </span>
          </strong>
        ) : (
          <strong className={styles.tasksCompleted}>
            Concluidas <span>0</span>
          </strong>
        )}
      </div>

      {data && (
        <ul className={styles.taskList}>
          {data.map((task) => (
            <li key={task.id} className={styles.task}>
              <button type="button" className={styles.wrapTaskCompleted} onClick={() => handleTaskCompleted(task.id)}>
                {task.completed ? <CheckCircle size={24} fill="#4EA8DE" /> : <Circle size={24} fill="#4EA8DE" />}
              </button>

              <p className={`${styles.taskDescription} ${task.completed ? styles.lineThrough : ''}`}>{task.name}</p>

              <button type="button" className={styles.taskRemove} onClick={() => handleTaskRemove(task.id)}>
                <Trash size={22} stroke="#808080" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {data.length === 0 && <EmptyTask />}
    </div>
  )
}
