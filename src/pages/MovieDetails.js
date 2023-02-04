

const MovieDetails = () => {
    return ( 
    <div className="flex md:justify-center">
        <div className="md:w-2/5 flex justify-start">
            <div className="flex flex-col space-y-2">
                <div className="grid justify-items-start pt-2 pr-2 pl-2">
                    <a className="flex flex-row space-x-1" href="/search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-primary w-6 h-6 ">
                            <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                        </svg>
                        <p className="text-primary">Back</p>
                    </a>
                </div>
                <div className="flex item-start">
                    <img className="h-60" src="/st.jpg" alt="" />
                    <div className="grid content-center p-4 space-y-2">
                        <h1 className="text-left text-3xl">Star Trek</h1>
                        <div className="flex flex-row flex-wrap space-x-1 text-gray-600">
                            <p>2009</p>
                            <p>•</p>
                            <p>PG-13</p>
                            <p>•</p>
                            <p>2h 7m</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <div className="flex flex-row space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-yellow-400 w-6 h-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                                <p className="text-gray-600">7.9</p>
                            </div>
                            <div className="bg-[#54A72A] p-1 rounded-md">
                                <p className="text-white">82</p>
                            </div>
                        </div>
                        <div className="flex flex flex-wrap">
                            <div className="pr-2 pb-2">
                                <div className="p-1 border-2 border-gray-600 rounded-full px-2.5">
                                    <p className="text-gray-600 text-xs">Action</p>
                                </div>
                            </div>
                            <div className="pr-2 pb-2">
                                <div className="p-1 border-2 border-gray-600 rounded-full px-2.5">
                                    <p className="text-gray-600 text-xs">Adventure</p>
                                </div>
                            </div>
                            <div className="pr-2 pb-2">
                                <div className="p-1 border-2 border-gray-600 rounded-full px-2.5">
                                    <p className="text-gray-600 text-xs">Sci-Fi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-left text-gray-600">The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.</p>
                <p className="text-left text-gray-600 font-bold text-sm">Cast: </p>
                <p className="text-left text-gray-600 font-bold text-sm">Director: </p>
                <p className="text-left text-gray-600 font-bold text-sm">Writers: </p>
            </div>
        </div>
    </div> 
    );
}
 
export default MovieDetails;