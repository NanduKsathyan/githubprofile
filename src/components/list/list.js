import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
const List = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://api.github.com/users/supreetsingh247`)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (<div className=''>
        {data ? <div>
            <img src={data.avatar_url} className='rounded full-width' />
            <h3>{data.name}</h3>
            <p>{data.login}</p>
            <button className='btn btn-default follow-btn full-width'>Follow</button>

            <p>{data.bio}</p>
            <p><i className="fa fa-building-o" aria-hidden="true"></i> {data.company}</p>
            <p><i className="fa fa-map-marker" aria-hidden="true"></i> {data.location}</p>
        </div> : null}

    </div>)
}
export default List