import React from 'react'
import { useRouter } from 'next/router'
function Department(props) {
    const { department } = props;
    const router = useRouter()
    function details(id) {
        router.push(`/departments/details/${id}`)
    }
    return (
        <div>
            <h2 onClick={() => details(department.id)}>{department.name}</h2>
            <p>{department.description}</p>
        </div>
    )
}

export default Department;