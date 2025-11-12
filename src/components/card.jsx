import React from 'react'

const Card = ({user}) => {
   // console.log(user);
   const{firstName,lastName,age,skils,about,photoUrl,gender}=user;
  return (
    <div className="card bg-base-400 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    {age && gender && <p>{age+","+gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-end">
       <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-primary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default Card
