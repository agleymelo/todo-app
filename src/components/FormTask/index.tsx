import { PlusCircle } from '@phosphor-icons/react'

import styles from './formTask.module.css'
import { useState } from 'react'

type FormTaskProps = {
  addNewTask: (task: string) => void
}

export function FormTask({ addNewTask }: FormTaskProps) {
  const [newTaskInput, setNewTaskInput] = useState('')

  function handleAddNewTask() {
    addNewTask(newTaskInput)
    setNewTaskInput('')
  }

  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Adicione uma nova tarefa"
        value={newTaskInput}
        onChange={(event) => setNewTaskInput(event.target.value)}
      />
      <button type="button" className={styles.buttonAddNewtask} onClick={handleAddNewTask}>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  )
}
