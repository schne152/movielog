import React, { useState } from 'react'
import MoviePreview from '../components/MoviePreview';
import { SpinnerCircularFixed } from 'spinners-react'

const SearchResults = () => {

    const imdb_API = "https://imdb-api.com/en/API/SearchTitle/";
    const imdb_key = "k_5w4vey65";
    let [search_result, setResults] = useState(null);
    let [search_title, setTitle] = useState("");
    let [loading, setLoading] = useState(false);

    // swap data_blob with search_result and uncomment handleSearch to enable search
    const data_blob = {"searchType":"Title","expression":"inception","results":[{"id":"tt1375666","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg","title":"Inception","description":"(2010)"},{"id":"tt7321322","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BYWJmYWJmNWMtZTBmNy00M2MzLTg5ZWEtOGU5ZWRiYTE0ZjVmXkEyXkFqcGdeQXVyNzkyOTM2MjE@._V1_Ratio0.7273_AL_.jpg","title":"Inception","description":"(2014) (Short)"},{"id":"tt1790736","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.7273_AL_.jpg","title":"Inception: The Cobol Job","description":"(2010) (Video)"},{"id":"tt2762020","resultType":"Title","image":"https://imdb-api.com/images/original/nopicture.jpg","title":"Inception of Chaos","description":"(2012) (Short)"},{"id":"tt5295990","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.7273_AL_.jpg","title":"Inception: Jump Right Into the Action","description":"(2010) (Video)"},{"id":"tt1686778","resultType":"Title","image":"https://imdb-api.com/images/original/nopicture.jpg","title":"Inception: 4Movie Premiere Special","description":"(2010) (TV Movie)"},{"id":"tt12960252","resultType":"Title","image":"https://imdb-api.com/images/original/nopicture.jpg","title":"Inception Premiere","description":"(2010)"},{"id":"tt14825954","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMGI0MzIxMTUtZGFiMC00NGRmLWE4YmQtYjRkNGJkMDJmNzFlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.3182_AL_.jpg","title":"Exception","description":"(2022) (TV Series)"},{"id":"tt0800240","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNjAzODA2NjM5Ml5BMl5BanBnXkFtZTcwNDgwNDQ2MQ@@._V1_Ratio0.7273_AL_.jpg","title":"Deception","description":"(2008)"}],"errorMessage":""};
    
    const handleSearch = () => {
        // setLoading(true);
        // const search_value = imdb_API.concat(imdb_key,"/",search_title);
        // fetch(search_value)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         setResults(data);
        //         setLoading(false);
        //     })
    }

  return (
    <div>
        <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
                <div className="p-4">
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex items-stretch w-full mb-4">
                            <input value={search_title} required onChange={(e) => setTitle(e.target.value)} type="search" className="border-r-0 form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-bl rounded-tl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"></input>
                            <button onClick={handleSearch} className="bg-primary btn inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded-tr rounded-br shadow-md active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="fill-white w-4 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <SpinnerCircularFixed enabled={loading} color="#6610F2" secondaryColor="#ffffff" className="mb-10"/>
                </div>
                {data_blob && data_blob.results.map((movie) => (
                    <div key={movie.id}>
                        <MoviePreview movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
export default SearchResults