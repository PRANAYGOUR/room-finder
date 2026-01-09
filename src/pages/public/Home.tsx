import React from 'react'
import { Link } from 'react-router-dom'
import { useRooms } from '../../hooks/useRooms'
import RoomCard from '../../components/room/RoomCard'

export default function Home() {
  const { rooms, loading } = useRooms()

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1340] via-[#1f1140] to-[#0b1020] opacity-95"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">Transform bold ideas into award-winning rooms</h1>
            <p className="mt-4 text-lg text-indigo-200 max-w-xl">Search verified rooms, filter by location and budget, and contact trusted owners directly. Fast, secure, and reliable listings.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/rooms" className="px-5 py-3 rounded shadow glow-cta">Browse rooms</Link>
              <Link to="/owner/register" className="px-5 py-3 rounded secondary-cta border border-white/8">List a room</Link>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/hero/900/600" alt="hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Latest listings</h2>
          <Link to="/rooms" className="text-primary">See all</Link>
        </div>

        {loading ? (
          <div className="text-center text-gray-600">Loading rooms…</div>
        ) : (
          rooms.length === 0 ? (
            <div className="text-center text-gray-600 py-12">No rooms yet — add your first listing.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rooms.slice(0,6).map((r) => <RoomCard key={r.id} room={r} />)}
            </div>
          )
        )}
      </section>

      <section className="bg-indigo-900 py-12 text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-semibold text-lg">Verified owners</h3>
            <p className="text-indigo-200 mt-2">List of verified owners and quick contact options.</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">Secure payments</h3>
            <p className="text-indigo-200 mt-2">Safe and transparent payment and booking flows (if enabled).</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">Easy filters</h3>
            <p className="text-indigo-200 mt-2">Filter rooms by location, price, property type and tenant preference.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
