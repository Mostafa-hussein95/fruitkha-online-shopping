import React from 'react'
import { Link } from 'react-router'

export default function Pagination() {
  return (
    <nav aria-label="Page navigation" className="mt-8 md:mt-12">
      <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
        {/* Previous Button */}
        <li>
          <Link
            to="#"
            className="flex items-center justify-center px-3 h-8 md:h-10 text-base md:text-lg font-medium text-gray-600 bg-white rounded-lg transition-colors duration-200 hover:bg-[#F28123]/20 hover:text-[#F28123] focus:outline-none focus:ring-2 focus:ring-[#F28123]"
          >
            Previous
          </Link>
        </li>

        {/* Page Numbers */}
        {[1, 2, 3, 4, 5].map((page) => (
          <li key={page}>
            <Link
              to="#"
              aria-current={page === 3 ? "page" : undefined}
              className={`flex items-center justify-center px-3 h-8 md:h-10 min-w-[2rem] text-base md:text-lg ${
                page === 3 
                  ? 'bg-[#F28123] text-white pointer-events-none' 
                  : 'text-gray-600 hover:bg-[#F28123]/20 hover:text-[#F28123]'
              } rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F28123]`}
            >
              {page}
            </Link>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <Link
            to="#"
            className="flex items-center justify-center px-3 h-8 md:h-10 text-base md:text-lg font-medium text-gray-600 bg-white rounded-lg transition-colors duration-200 hover:bg-[#F28123]/20 hover:text-[#F28123] focus:outline-none focus:ring-2 focus:ring-[#F28123]"
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  )
}