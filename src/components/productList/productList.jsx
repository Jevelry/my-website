import Product from "../product/product"
import "./productList.css"

const productList = () => {
    return (
        <div className="pl">
            <div className="p1-texts">
                <h1 className="p1-title">
                    Create and Inspire
                </h1>
                <p className="p1-desc">
                    wuighiwuegiwuebgiwuebgiuwbeg
                </p>
            </div>
            <div className="p1-list">
                <Product/>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default productList
