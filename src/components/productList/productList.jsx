import Product from "../product/product"
import "./productList.css"
import Git from "../../img/github.png"

const productList = () => {
    return (
        <div className="pl" id="software">
            <div className="p1-texts">
                <h1 className="p1-title">
                    SOFTWARE PROJECTS
                </h1>

            </div>
            <div className="p1-list">
                <Product/>
                <Product />
                <Product />

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
