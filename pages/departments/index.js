import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Department from '../../components/departments/department';
function DepartmentList() {
    const [departments, setDepartments] = useState([]);
    function getDepatements() {
        axios.get("http://localhost:8000/api/departments")
            .then(res => setDepartments(res.data.data))
            .catch(err => console.log("No data", err))
    }

    useEffect(() => {
        getDepatements();
    }, [])

    return (
        <div>{departments.filter((dept, i)=>i<15)?.map(department => <Department key={department.id} department={department} />)}</div>
    )
}

export default DepartmentList;