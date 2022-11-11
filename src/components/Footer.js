import { React } from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t-2 inset-x-0 bottom-0 text-center mt-auto">
        <div className="flex justify-between max-w-7xl mx-auto px-2 pt-4 text-primary">
            <div className="flex flex-shrink-0 items-center px-2">
                <img src="logo-sm.png" className="h-8 w-auto" alt="" />
            </div>
            <div className="mb-6">
                <h5 className="font-bold mb-2.5 text-gray-600">Content</h5>
                <ul className="list-none mb-0">
                    <li>
                        <NavLink to="/search">Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my_reviews">My Reviews</NavLink>
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h5 className="font-bold mb-2.5 text-gray-600">Account</h5>
                <ul className="list-none mb-0">
                    <li>
                        <NavLink to="/create_account">Create Account</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Log in</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
