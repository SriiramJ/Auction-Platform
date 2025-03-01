import { useAuction } from "../context/AuctionContext";
import Card from "../components/Card";

const Dashboard = () => {
  const { auctions = [], activeBids = [] } = useAuction(); // Default to empty arrays if undefined

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Active Auctions</h2>
        {auctions.length === 0 ? (
          <p>No active auctions available.</p>
        ) : (
          auctions.map((auction) => <Card key={auction.id} product={auction} />)
        )}
      </div>
      <div>
        <h2>Active Bids</h2>
        {activeBids.length === 0 ? (
          <p>No active bids available.</p>
        ) : (
          activeBids.map((bid) => <div key={bid.id}>{bid.amount}</div>)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
