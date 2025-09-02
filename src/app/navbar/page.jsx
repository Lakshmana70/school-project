import React from 'react'

export default function Navebar() {
  return (
    <div>
      <nav className="bg-blue-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a href='/' className="text-xl font-bold text-gray-800">School Management</a>
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <a href="/addschool" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white-500 hover:border-white hover:text-gray-700">Add School</a>
                <a href="/showschool" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white-500 hover:border-white hover:text-gray-700">Show Schools</a>
              </div>
            </div>
          </div>
        </div>
      </nav>    
    </div>
  )
}
