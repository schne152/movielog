import Brand from '../components/Brand';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { createUser } = UserAuth();

    const handleRegister = async (e) => {
      e.preventDefault()
      await createUser(email, password)
        .then((userCredential) => {
          navigate('/my_account')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
      };

    return (
      <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <Brand />
            <form className="mt-8 space-y-8" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    value={email} required onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    value={password} required onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleRegister}
                  className="bg-primary group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create Account
                </button>
                <p className="pt-2 font-medium text-primary">
                  <NavLink to="/login">
                    Log In
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}
export default Register;