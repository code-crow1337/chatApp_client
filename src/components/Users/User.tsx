import React from 'react'
import './User.scss';

export default function User({username}:{username:string}) {
  return (
    <article className="user">
      <div className="user__imgContainer">
      <img className="user__imgContainer__img" src={ process.env.PUBLIC_URL + '/logo192.png'} alt="" />
      </div>
      <h2>{username}</h2>
    </article>
  )
}
