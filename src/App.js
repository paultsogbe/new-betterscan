// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import icon from "./assets/images/icon2.svg";
import nft from "./assets/images/nft.png";

import "./App.css";
import DropDown from "./components/DropDown";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import SearchBar from "./components/SearchBar";
import Statistique from "./components/Statistique";
import Nft from "./components/Nft";
import ScrollCarousel from "./components/ScrollCarousel";
import { getHomeData } from "./components/getHomeData";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App() {
    const [data, setData] = useState([]);
    const [stat, setStat] = useState();
    const [jeton, setJeton] = useState([]);

    async function getResult() {
        let result = await getHomeData();
        return result;
    }
    let newData;
    async function doTask() {
        let data = await getResult();
        setData(data.collectionsFirstChunk.byTrend);
        setStat(data.stats);
        setJeton(data.tokensFirstChunk.byMarketCap);
        // console.log(newData);
        return newData;
    }

    useEffect(() => {
        console.log(newData);
        doTask();
        console.log(data);
        console.log(jeton);
    }, []);

    return (
        <>
            {/* Header */}
            <Header />

            {/* ---------------------------------------------------- */}

            <div className="container mx-auto  bg-background1  ">
                {/* Header 2 */}
                <Header2 />

                {/* Search bar */}
                <SearchBar />

                <div className="flex justify-around">
                    {stat && (
                        <Statistique
                            text="Prix de l'ETH"
                            number={stat.ethPrice}
                            image={icon}
                        />
                    )}
                    {!stat && <div>Loading</div>}

                    {stat && (
                        <Statistique
                            text="Frais de transaction"
                            comment="(15gwei)"
                            number={stat.averageTransactionFee}
                        />
                    )}
                    {!stat && <div>Loading</div>}

                    {stat && (
                        <Statistique
                            text="Dernier bloc"
                            number={stat.lastBlock}
                            time="il y a 2 min"
                        />
                    )}
                    {!stat && <div>Loading</div>}

                    {stat && (
                        <Statistique
                            text="Émission"
                            number={stat.emission}
                            time="Déflation(mensuel)"
                        />
                    )}
                    {!stat && <div>Loading</div>}
                </div>

                <div className="flex justify-between items-center content-center">
                    <p>Collection NFT</p>
                    <DropDown name="Tendances" />
                </div>
                <div className="flex justify-between mt-5"></div>
                <ScrollCarousel data={data} />

                <div className="flex justify-between items-center content-center">
                    <p>Jetons</p>
                    <DropDown name="Capitalization" />
                </div>
                {jeton ? <Table jeton={jeton} /> : <div>Loading</div>}
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default App;
