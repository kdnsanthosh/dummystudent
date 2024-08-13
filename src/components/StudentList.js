import React, { useEffect, useState } from 'react';
import studentService from '../services/studentService';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        studentService.getAllStudents().then((response) => {
            setStudents(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
