import Header from '../Components/Header';
import TodosLogic from '../Components/TodosLogic';

function TodoApp() {
  return (
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  );
}

export default TodoApp;
