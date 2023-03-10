import React from "react";

function Header() {
  return (
    <div className="bg-background2 flex justify-center h-14 items-center">
      <p className="mr-12">
        Vous voulez faire de BetterScan votre explorateur par défaut ?🕵️
      </p>
      <button className="bg-white rounded h-10 px-4">
        Ajouter l'extension
      </button>
    </div>
  );
}

export default Header;
