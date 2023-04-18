import React from 'react'
import './impl1.scss'

const Impl1 = () => {
  return (
    <div>
        <div className="table">
            <select className='books'>
                <option value="">All Books</option>
                <option value="">Adventure</option>
                <option value="">Novel</option>
                <option value="">Science</option>
            </select>
        </div>
        <div className="users">
            <select className='users'>
                <option value="">Admin</option>
                <option value="">User</option>
                <option value="">LibOwner</option>
            </select>
        </div>
    </div>
  )
}

export default Impl1