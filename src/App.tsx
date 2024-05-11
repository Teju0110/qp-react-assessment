import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import NavBar from './Components/NavBar/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToDoList from './Components/ToDoList/ToDoList';
import ClearAll from './Components/ClearAll/ClearAll';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <NavBar />
      <AddTodo />
      <ClearAll />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
