import axios from 'axios';

const API_URL = 'https://springboot-openshit-mysql-demo-git-santhosh5858-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/students';  // Replace with your actual backend URL

const getAllStudents = () => {
    return axios.get(API_URL);
};

const getStudentById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const createStudent = (student) => {
    return axios.post(API_URL, student);
};

const updateStudent = (id, student) => {
    return axios.put(`${API_URL}/${id}`, student);
};

const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};
