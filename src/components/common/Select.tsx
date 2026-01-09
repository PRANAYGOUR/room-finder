import React from 'react'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
}

export default function Select({ label, children, ...props }: SelectProps) {
  return (
    <label className="block">
      {label && <span className="text-sm font-medium text-indigo-200">{label}</span>}
      <select
        {...props}
        className="mt-1 w-full px-3 py-2 border rounded-md bg-white/5 text-white placeholder-gray-400 border-white/6 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        {children}
      </select>
    </label>
  )
} 
