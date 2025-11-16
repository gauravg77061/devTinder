import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';
import { removeUser } from '../utils/userSlice';

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); //  state to control dropdown
  const dropdownRef = useRef(null);

  // Logout API call
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + 'auth/logout', {}, { withCredentials: true });
      dispatch(removeUser());
      setIsOpen(false); //  close dropdown when clicked
      return navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  //  Optional: closes dropdown if you click outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-md px-6 z-50" data-theme="dark">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost normal-case text-2xl font-bold">
          👩‍💻 devTinder
        </Link>
      </div>

      {user && (
        <div className="flex gap-2">
          <div
            className="dropdown dropdown-end mx-5 flex items-center"
            ref={dropdownRef}
          >
            <p className="px-4 font-semibold">
              Welcome, <span className="text-primary">{user.firstName}</span>
            </p>

            {/*  toggle dropdown open/close */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:scale-105 transition-all"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt="User Photo"
                  src={user.photoUrl}
                />
              </div>
            </div>

            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-3 shadow-lg"
              >
                <li>
                  <Link
                    to="/profile"
                    className="justify-between"
                    onClick={() => setIsOpen(false)} //  closes on click
                  >
                    Profile
                    <span className="badge badge-primary">New</span>
                  </Link>
                </li>
                <li>
                  <a onClick={() => setIsOpen(false)}>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
