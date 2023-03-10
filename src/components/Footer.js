import React from "react";

function Footer() {
    return (
        <div className="bg-background2 flex justify-center h-14 items-center mt-10">
            <p className="mr-12 text-xs">
                This page tracks key metrics of
                <span className="text-pink-500"> ERC-20 </span>tokens on
                Ethereum. Kindly take note that only tokens with a Blue
                Checkmark are listed. Learn more about our Blue Checkmark
                feature in our
                <span className="text-pink-500"> Knowledge Base</span>🕵️
            </p>
        </div>
    );
}

export default Footer;
