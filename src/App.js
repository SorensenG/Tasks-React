import React, { useState, useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("@listaTarefas")) || [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("@listaTarefas", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="wrapper" id="app">
      <h1>Lista de Tarefas</h1>
      <div id="entrada">
        <input
          className="Entrada"
          type="text"
          placeholder="Digite uma tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="botao" onClick={addTask}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <a href="#" onClick={() => deleteTask(index)}>
              <i className="fa fa-trash"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
