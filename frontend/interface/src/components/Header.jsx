import React from 'react'
import './Header.css'
function Header() {
  return (
    <header className="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
  <div className="container mx-auto flex items-center h-16">
    <a href="" className="flex items-center justify-center">
      <img className="h-8" src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png" alt="" />
      <span className="ml-4 uppercase font-black">Opti<br/>Lands</span>
    </a>
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8 active">
          <a href="">
            <span>Home</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>About</span>
          </a>
        </li>

        <li className="p-5 xl:p-8">
          <a href="">
            <span>Cart</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
        <div className="relative text-gray-600">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
    </div>
        </li>
      </ul>
    </nav>
    <button className="border border-white rounded-full font-bold px-8 py-2">Sign In</button>
  </div>
</header>
  )
}

export default Header