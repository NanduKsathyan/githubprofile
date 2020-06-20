
import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import DetailsItem from './component/detailsItem'

const Details = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://api.github.com/users/supreetsingh247/repos`)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (<Fragment>
        {data ?<DetailsItem info={data} />:null}
    </Fragment>)
}
export default Details