import React, { Fragment } from 'react'
import Search from '../../list/search'
const DetailsItem = ({ info }) => {
    let data = info && info.length ? info.map((item, index) => {
        return (
            <div key={index} className='grid-sys project-list'>
                <div className='child grow-3 '>
                    <h4 className='link'>{item.name}</h4>
                    <p>{item.description}</p>
                    {item.language ? <span><i className="fa fa-circle" aria-hidden="true"></i> {item.language} </span> : null} <p>   Updated on {item.updated_at}</p>
                </div>
                <div className='child perfect-center'>
                    <button className='btn btn-default float-right btn-sm'>
                        <i className="fa fa-star-o" aria-hidden="true"></i> star
                    </button>

                </div>
            </div>
        )
    }) : null
    return (
        <Fragment>
            <Search />
            <hr />
            {data ? data : null}

        </Fragment>
    )
}
export default DetailsItem