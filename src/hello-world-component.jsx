import React, { useState } from "react";

const HelloWorldComponent = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [rollno, setRollno] = useState('');

    const addStudent = () => {
        if (name && age && rollno) {
            setStudents([...students, { name, age, rollno }]);
            setName('');
            setAge('');
            setRollno('');
        }
    };

    return (
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h1>Sri Eshwar college</h1>
            <div style={{marginBottom: '20px'}}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    style={{margin: '5px', padding: '8px'}} 
                />
                <input 
                    type="number" 
                    placeholder="Age" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                    style={{margin: '5px', padding: '8px'}} 
                />
                <input 
                    type="text" 
                    placeholder="Roll No" 
                    value={rollno} 
                    onChange={(e) => setRollno(e.target.value)}
                    style={{margin: '5px', padding: '8px'}} 
                />
                <button onClick={addStudent} style={{margin: '5px', padding: '8px 16px'}}>Add Student</button>
            </div>
            <table style={{width: '100%', borderCollapse: 'collapse', margin: '0 auto'}}>
                <thead>
                    <tr>
                        <th style={{border: '1px solid black', padding: '8px'}}>Name</th>
                        <th style={{border: '1px solid black', padding: '8px'}}>Age</th>
                        <th style={{border: '1px solid black', padding: '8px'}}>Roll No</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td style={{border: '1px solid black', padding: '8px'}}>{student.name}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>{student.age}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>{student.rollno}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HelloWorldComponent;
