import React, { useState } from "react";

function Nft(props) {
    // const[Data, setData] = useState({})
    // const[isLaording, setIsLaording] = useState(true)
    return (
        <>
            {/* <div>{isLaording === true ? <p></p> : <div>{Data.Nft.name}</div>}</div> */}
            <div className="">
                <img className="w-full h-64 mb-5" src={props.image} alt="nft" />
                <h2 className="text-base text-text3">{props.title}</h2>
                <p className="text-sm text-text2">{props.description}</p>
            </div>
        </>
    );
}

export default Nft;
