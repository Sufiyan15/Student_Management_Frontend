import axios from "axios";

const API_URL = "http://localhost:8080/students";

const getStudents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addStudent = async (student) => {
  await axios.post(API_URL, student);
};

const deleteStudent = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default { getStudents, addStudent, deleteStudent };
