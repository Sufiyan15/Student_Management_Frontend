import React from "react";
import studentService from "../services/studentService";

function StudentList({ students, refreshStudents }) {
  const handleDelete = async (id) => {
    await studentService.deleteStudent(id);
    refreshStudents();
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} - {student.studentClass} -{" "}
            {student.phoneNumber}
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
