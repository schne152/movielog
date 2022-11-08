import React from 'react'
import Brand from '../components/Brand';

export default function Search() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <Brand />
          <form className="mt-8 space-y-8" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="title" className="sr-only">
                </label>
                <input
                  id="title"
                  name="title"
                  type="title"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Title (Ex: Star Wars)"
                />
              </div>
            </div>
            <div>
              <a className="btn bg-primary px-4 py-2 rounded-md text-white" href="/search_results"> Search</a>
            </div>
          </form>
        </div>
      </div>
  )
}
