import CardContainerHome from "../components/CardContainerHome";
import { cardData, homeData, raceData, raceInfo } from "../components/data";
import Header from "../components/Header";
import ListGroup from "../components/ListGroup";

function Home() {

  
    return (
        <div>
            <div>
            <CardContainerHome race={raceInfo} title="Bolder Boulder" date="May 26, 2025"/>
            </div>
            <ListGroup title="Upcoming Races" races={raceData} />
            </div>
    );
}

export default Home;