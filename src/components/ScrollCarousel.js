import React, { useState } from "react";
import nft from "../assets/images/nft.png";
import Nft from "./Nft";

import { getHomeData } from "./getHomeData";

function ScrollCarousel(props) {
    return (
        <div className="flex flex-col bg-white m-auto p-auto mb-20">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    {props.data.map((el, i) => (
                        <div className="inline-block px-3" key={i}>
                            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <Nft
                                    image={el.imgUrl}
                                    title={el.name}
                                    description="Plancher: 0.19 ETH"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScrollCarousel;
