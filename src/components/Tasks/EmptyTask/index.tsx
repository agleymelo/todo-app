import { ClipboardText } from '@phosphor-icons/react'

import styles from './emptyTask.module.css'

export function EmptyTask() {
  return (
    <div className={styles.emptyTasks}>
      <div className={styles.emptyTasksContent}>
        <ClipboardText size={56} />
        <strong>
          Você ainda não tem tarefas cadastradas <br />
          <span>Crie tarefas e organize seus itens a fazer</span>
        </strong>
      </div>
    </div>
  )
}
