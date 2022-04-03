import "./BrowseCategoryMedicine.css"
import { Link } from "react-router-dom"
export const BrowseCategoryMedicine = () => {
    return(
        <div>
            <div id="BrowseCategoryMedicine">
                <div className="BrowseCategoryMedicineCategoryHeading">
                    <p>Browse medicines & health products</p>
                </div>
                <div>
                    <div><p className="BrowseCategoryMedicineCategoryNaame">Health condition</p></div>
                    <div id="HealthConditionCategory">
                        <Link to={"/products"} ><div className="BrowseCategoryMedicineCategoryHoverImg"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png" alt="" /></div></Link>

                        <Link to={"/products"}><div className="BrowseCategoryMedicineCategoryHoverImg"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-6.51626a1a.png" alt="" /></div></Link>
                        
                        <Link to={"/products"}><div className="BrowseCategoryMedicineCategoryHoverImg"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-7.476668e1.png" alt="" /></div></Link>
                        
                        <Link to={"/products"}><div className="BrowseCategoryMedicineCategoryHoverImg"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-4.5e130b77.png" alt="" /></div></Link>
                        
                    </div>
                </div>

                <div>
                    <div><p>Categories</p></div>
                    <div id="HealthConditionCategory">
                        <div className="BrowseCategoryMedicineCategoryHoverImg"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-2.640dcfd5.png" alt="" /></div>
                        <div className="BrowseCategoryMedicineCategoryHoverImg"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-6.aa7d1cba.png" alt="" /></div>
                        <div className="BrowseCategoryMedicineCategoryHoverImg"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-9.5029c27e.png" alt="" /></div>
                        <div className="BrowseCategoryMedicineCategoryHoverImg"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-8.c4cbe33a.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}