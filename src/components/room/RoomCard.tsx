import React from 'react'
import { Link } from 'react-router-dom'
import { Room } from '../../types/room'

type Props = {
  room: Room
}

export default function RoomCard({ room }: Props) {
  return (
    <div className="card-surface rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        {room.images && room.images[0] ? (
          <img src={room.images[0]} alt={room.title} className="h-44 sm:h-36 md:h-44 w-full object-cover" />
        ) : (
          <div className="h-44 sm:h-36 md:h-44 w-full bg-indigo-800 flex items-center justify-center text-white">No photo</div>
        )}
        <div className="absolute top-2 left-2 bg-white/10 text-sm text-white px-2 py-1 rounded">{room.property_type}</div>
        <div className="absolute top-2 right-2 bg-white/10 text-sm text-white px-2 py-1 rounded">{room.tenant_preference}</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate text-white">{room.title}</h3>
        <p className="text-sm text-indigo-200 truncate">{room.location}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-purple-300 font-semibold">${room.rent}/mo</span>
          <Link to={`/rooms/${room.id}`} className="text-sm text-indigo-200">Details</Link>
        </div>
      </div>
    </div> 
  )
}
