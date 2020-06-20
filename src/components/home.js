import React, { Fragment } from 'react'
import List from './list/list'
import Details from './details/details'
const Base = () => {
    return (
        <Fragment>
            <nav className="navbar bg-dark default-bottom">
                <p className='white-text'>Git Hub</p>
            </nav>
            <div className="container">
                <div className='row'>
                    <div className='col-3'>
                        <List />
                    </div>
                    <div className='col-9'>
                        <Details />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Base