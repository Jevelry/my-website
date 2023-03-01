import Loopmania from "../product/loopmania"
import Website from "../product/website"
import Tcp from "../product/tcp"
import RestaurantTracker from "../product/restaurantTracker"
import TrackworkBot from "../product/trackworkbot"
import "./productList.css"

const productList = () => {
    return (
        <div className="pl" id="software">
            <div className="p1-texts">
                <h1 className="p1-title">
                    SOFTWARE PROJECTS
                </h1>

            </div>
            <div className="p1-list">
                
                <Website/>
                <RestaurantTracker/>
                <TrackworkBot/>
                <Loopmania/>
                <Tcp/>
                
                
            </div>
            <div className="pl-github">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://github.com/Jevelry', "_blank");
                    }}
                > Link to GitHub</button>
                
            </div>
        </div>
    )
}

export default productList
