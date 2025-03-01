import {  createContext, useContext, useState } from "react";

const AuctionContext = createContext();

export const useAuction = () => useContext(AuctionContext);

export const AuctionProvider = ({ children }) => {
  const [auctions, setAuctions] = useState([]);
  const [activeBides, setActiveBids] = useState([]);

  const updateAuctions = (newAuctions) => setAuctions(newAuctions);
  const updateActiveBids = (newBids) => setActiveBids(newBids);

  return (
    <AuctionContext.Provider
      value={{ auctions, activeBides, updateAuctions, updateActiveBids }}
    >
      {children}
    </AuctionContext.Provider>
  );
};
