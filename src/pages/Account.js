import React from 'react';
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Account = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault()
        await logout()
          .then((userCredential) => {
              navigate("/login")
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
          });
    };
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <p>User Email: {user && user.email}</p>
                <button
                    type="submit"
                    onClick={handleLogout}
                    className="bg-primary group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Logout
                </button>
            </div>
        </div>
    )
}
export default Account;
