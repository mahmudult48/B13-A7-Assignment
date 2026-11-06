import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';


const Navber = () => {


  const links = (
    <>
  <li>
      <NavLink to={"/homepage"}
    className={({isActive})=> `font-bold text-[#64748B] ${isActive? "bg-[#244D3F] text-white" : ""}`}
    >
     <BiHomeAlt2/> Home
    </NavLink>
  </li>


  <li>
      <NavLink to={"/timelinepage"}
    className={({isActive})=> `font-bold text-[#64748B] ${isActive? "bg-[#244D3F] text-white" : ""}`}
     > <RiTimeLine/> Timeline

    </NavLink>
  </li>
    <li>
      <NavLink to={"/Dashboard"}
    className={({isActive})=> `font-bold text-[#64748B] ${isActive? "bg-[#244D3F] text-white" : ""}`}
    >
      <ImStatsDots/> Stats
      </NavLink>
    </li>
    </>
  )
  return (
    <div className="navbar bg-base-100 shadow-sm px-9">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><span className='font-bold'>Keen</span>Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-10 gap-3">
       {links}
      </ul>
  </div>
</div>
  );
};

export default Navber;