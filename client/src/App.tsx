import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import TodoList from './components/TodoList';
import NewItem from './components/NewItem';
import Grid from './components/ui/Grid';
import Header from './components/Header';

export const TaskContext = createContext<null | Dispatch<
  SetStateAction<boolean>
>>(null);

function App() {
  const [showNewTask, setShowNewTask] = useState(false);

  return (
    <>
      <TaskContext.Provider value={setShowNewTask}>
        <Header />
        {showNewTask ? (
          <NewItem />
        ) : (
          <Grid>
            <TodoList />
          </Grid>
        )}
      </TaskContext.Provider>
    </>
  );
}

export default App;
