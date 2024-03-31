import { useState } from 'react'

import { FormTask } from './components/FormTask'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import styles from './home.module.css'

type Task = {
  id: string
  name: string
  completed: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addNewTask(task: string) {
    const newTask = {
      id: new Date().getTime().toString(),
      name: task,
      completed: false,
    }

    setTasks((prevState) => [newTask, ...prevState])
  }

  function removeTask(taskId: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(updatedTasks)
  }

  function setTaskAsCompleted(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <main className={styles.home}>
      <Header />

      <div className={styles.content}>
        <FormTask addNewTask={addNewTask} />

        <Tasks data={tasks} setTaskAsCompleted={setTaskAsCompleted} removeTask={removeTask} />
      </div>
    </main>
  )
}
