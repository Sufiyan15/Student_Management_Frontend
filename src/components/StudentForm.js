import React, { useState } from "react";
import studentService from "../services/studentService";

function StudentForm({ refreshStudents }) {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    studentClass: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await studentService.addStudent(student);
    setStudent({ name: "", age: "", studentClass: "", phoneNumber: "" });
    refreshStudents();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="studentClass"
        placeholder="Class"
        value={student.studentClass}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={student.phoneNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
