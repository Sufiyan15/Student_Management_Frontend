import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import studentService from "./services/studentService";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await studentService.getStudents();
    setStudents(data);
  };

  return (
    <div className="App">
      <h1>Student Management</h1>
      <StudentForm refreshStudents={fetchStudents} />
      <StudentList students={students} refreshStudents={fetchStudents} />
    </div>
  );
}

export default App;
