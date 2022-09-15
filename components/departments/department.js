import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

function Department(props) {
    const { department } = props;
    const router = useRouter()
    function details(id) {
        router.push(`/departments/details/${id}`)
    }
    return (
        <div className={styles.container}>
            <h2 onClick={() => details(department.id)}>{department.name}</h2>
            <p>{department.description}</p>
        </div>
    )
}

export default Department;