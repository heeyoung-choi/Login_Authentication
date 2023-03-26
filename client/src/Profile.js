import React from 'react'

function Profile() {
  return (
    
    <form className='Form'>
        <h1>
            Profile
        </h1>
        <label>
            Fullname
        </label>
        <input type="text" />
        <label >
            Date of birth
        </label>
        <input type="date" />
        <label >
            Email
        </label>
        <input type="email" />
        <label >
            Phone
        </label>
        <input type="tel" />
        <div>
            <input className='btn btn-submit' type="submit" value="submit" />
            <button className='btn btn-cancel'>Cancel</button>
        </div>
        
    </form>
  )
}

export default Profile