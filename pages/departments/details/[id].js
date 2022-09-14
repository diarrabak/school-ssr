import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import Department from '../../../components/departments/department';
function DepartDetails() {

    const [depart, setDepart] = useState({});
    const router=useRouter()
    const { id } = router.query;
    function getDepart(id) {
        axios.get(`http://localhost:8000/api/departments/${id}`)
            .then(res => setDepart(res.data.data))
            .catch(err => console.log("no depart data", err))
    }

    useEffect(() => {
        if (!!id) getDepart(id);
    }, [id])
    return (
        <div>
            <Department department={depart} />
        </div>
    )
}

export default DepartDetails