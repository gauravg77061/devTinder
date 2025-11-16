

import React from 'react'
import { useDispatch } from 'react-redux';

const Card = ({user}) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="card bg-base-200 w-96 shadow-xl border border-base-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl overflow-hidden">
      <figure className="relative">
        <img
          src={photoUrl || "https://via.placeholder.com/300x200?text=No+Image"}
          alt="User"
          className="h-60 w-full object-cover hover:brightness-110 transition-all duration-300"
        />
        {/* subtle overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-t-2xl"></div>
      </figure>

      <div className="card-body text-center space-y-2">
        <h2 className="card-title text-lg font-semibold text-primary justify-center">
          {firstName + " " + lastName}
        </h2>

        {age && gender && (
          <p className="text-sm text-gray-400 italic">
            {age + ", " + gender}
          </p>
        )}

        <p className="text-sm text-gray-300">{about}</p>

        <div className="card-actions justify-center my-4 gap-3">
          <button className="btn btn-primary btn-sm px-6 hover:scale-105 transition-all duration-300">
            Interested
          </button>
          <button className="btn btn-outline btn-error btn-sm px-6 hover:scale-105 transition-all duration-300">
            Ignore
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card

