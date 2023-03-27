import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="px-10 py-5 flex items-center justify-between mb-5 shadow-md">
        <div className="space-x-5 text-blue-500 hidden xl:block ">
          <Link
            className="px-3 active:bg-slate-300 transition-colors py-2 rounded-md  hover:bg-slate-100"
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-3 py-2 rounded-md  hover:bg-slate-100"
            to="/superheroes"
          >
            Traditional Super Heroes
          </Link>
          <Link
            className="px-3 py-2 rounded-md  hover:bg-slate-100"
            to="/RQsuperheroes"
          >
            RQ Super Heroes
          </Link>

          <Link
            className="px-3 py-2 rounded-md  hover:bg-slate-100"
            to="/dynamicPQ"
          >
            Dynamic PQ
          </Link>
          <Link
            className="px-3 py-2 rounded-md  hover:bg-slate-100"
            to="/dependentQ"
          >
            Dependent Q
          </Link>
          <Link
            className="px-3 py-2 rounded-md  hover:bg-slate-100"
            to="/paginatedQ"
          >
            Paginated Q
          </Link>
          <Link
            className="px-3 py-2 rounded-md  hover:bg-slate-100"
            to="/infiniteQ"
          >
            Infinite Q
          </Link>
        </div>
        <button
          onClick={() => setShow(!show)}
          className={`${
            show ? 'bg-text-700 bg-white' : 'bg-slate-700 text-white'
          }  z-20 absolute px-3 py-1 rounded-md  hover:opacity-80 right-3 top-1  xl:hidden`}
        >
          {show ? 'Close' : 'Open'}
        </button>
      </div>
      <div
        className={`${
          show ? ' w-64' : ' w-0 '
        }  xl:hidden absolute  top-0  duration-500 ease-in-out  right-0  min-h-screen bg-black text-white`}
      >
        <div
          className={`${
            show ? 'flex flex-col overflow-hidden space-y-3' : 'hidden'
          } pt-12  `}
        >
          <Link
            className="px-3 whitespace-nowrap  py-2 rounded-md  hover:text-slate-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-3 whitespace-nowrap  py-2 rounded-md  hover:text-slate-300"
            to="/superheroes"
          >
            Traditional Super Heroes
          </Link>
          <Link
            className="px-3 whitespace-nowrap  py-2 rounded-md  hover:text-slate-300"
            to="/RQsuperheroes"
          >
            RQ Super Heroes
          </Link>
          <Link
            className="px-3 whitespace-nowrap  py-2 rounded-md  hover:text-slate-300"
            to="/parallel-queries"
          >
            Parallel Queries
          </Link>
          <Link
            className="px-3 whitespace-nowrap  py-2 rounded-md  hover:text-slate-300"
            to="/dynamicPQ"
          >
            Dynamic PQ
          </Link>
          <Link
            className="px-3 whitespace-nowrap  py-2 rounded-md  hover:text-slate-300"
            to="/dependentQ"
          >
            Dependent Q
          </Link>
          <Link
            className="px-3 whitespace-nowrap  py-2 rounded-md  hover:text-slate-300"
            to="/paginatedQ"
          >
            Paginated Q
          </Link>
          <Link
            className="px-3 whitespace-nowrap  py-2 rounded-md  hover:text-slate-300"
            to="/infiniteQ"
          >
            Infinite Q
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
