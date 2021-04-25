import React, { useEffect } from 'react';

const UserProfile = (props) => {
  // let {  } = props

  useEffect(() => {
    fetch('http://127.0.0.1:5000/check_login')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  // },[ ***props*** ])
  },[])

  // console.log(props.location.state.id);

  return (
      <div>
        <p> *** user profile *** </p>
      </div>
  )
}

export default UserProfile;
