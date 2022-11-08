import React from 'react'

export default function Footer() {
  return (
    <footer className="absolute border-t-2 inset-x-0 bottom-0 text-center">
        <div className="flex justify-between max-w-7xl mx-auto px-2 pt-4 text-primary">
            <div className="flex flex-shrink-0 items-center px-2">
                <img src="logo-sm.png" className="h-8 w-auto" alt="" />
            </div>
            <div className="mb-6">
                <h5 className="font-bold mb-2.5 text-gray-600">Content</h5>
                <ul className="list-none mb-0">
                    <li>
                        <a href="/search">Search</a>
                    </li>
                    <li>
                        <a href="/my_reviews">My Reviews</a>
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h5 className="font-bold mb-2.5 text-gray-600">Account</h5>
                <ul className="list-none mb-0">
                    <li>
                        <a href="/create_account">Create Account</a>
                    </li>
                    <li>
                        <a href="/login">Log in</a>
                    </li>
                </ul>
            </div>
        </div>
        
        {/* <div className="container p-6">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 text-primary">
                <div className="mb-6">
                    <h5 className="font-bold mb-2.5 text-gray-600">Content</h5>
                    <ul className="list-none mb-0">
                        <li>
                            <a href="/search">Search</a>
                        </li>
                        <li>
                            <a href="/my_reviews">My Reviews</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h5 className="font-bold mb-2.5 text-gray-600">Account</h5>
                    <ul className="list-none mb-0">
                        <li>
                            <a href="/create_account">Create Account</a>
                        </li>
                        <li>
                            <a href="/login">Log in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
    </footer>
  )
}
