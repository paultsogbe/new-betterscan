import React from "react";

function SearchBar() {
    return (
        <div className="flex flex-col items-center mb-40 mt-40">
            <h1 className="w-8/12 text-4xl text-center mb-10">
                Recherchez une transaction dans la Blockchain Ethereum
            </h1>
            <div className="flex border border-purple-200 rounded w-3/5">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Coller une adresse, une transaction, un ENS, un jeton, une collection NFT…"
                />
                <button className="px-4 text-white bg-slate-400 rounded-r-md rounded-l-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
