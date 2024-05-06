import React, { useState } from "react";

export default function TaskTable() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  const handleAddTask = () => {
    if(task === ''){
        return
    }
    setId((id) => id + 1);
    setData([...data, { id: id, task: task }]);
    setTask("");
  };
//   delete action
  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    console.log(newData);
    setData(newData);
  };
  return (
    <div>
      <h1>Todo's List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      ></input>
      <button onClick={handleAddTask}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.task}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(e.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
