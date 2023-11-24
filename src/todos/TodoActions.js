import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import React from 'react';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';
function TodoActions({
  reset,
  ResetCompletedTodoHandler,
  completedTodosCount,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset All Todos">
        <RiRefreshLine onClick={reset} />
      </Button>
      <Button title="Reset Complete Todos" disabled={!completedTodosCount}>
        <RiDeleteBin2Line onClick={ResetCompletedTodoHandler} />
      </Button>
    </div>
  );
}

export default TodoActions;
