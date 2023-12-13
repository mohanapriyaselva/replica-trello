import React from 'react'
import { Link } from 'react-router-dom';
export function NavBar(){
    return(
        <>
        <div className='bg-success p-3 d-inline-flex '>
        <Link to='/Section5'><button className='btn btn-primary '>Section5</button></Link>
        <Link to='/Footer'><button className='btn btn-secondary'>Footer</button></Link>
        </div>
        </>
    );
}
