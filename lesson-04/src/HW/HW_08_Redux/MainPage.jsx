import NewProduct from "./NewProduct"
import Products from "./Products"
import TotalPrice from "./TotalPrice"

function MainPage() {
    return (
        <div style={{ width: '1300px' }}>
            <div style={{ display: 'flex', }}>
                <div style={{ width: '45%' }}>
                    <TotalPrice /> <br /><br />
                    <NewProduct />
                </div>
                <br />
                <div style={{ width: '30%' }}>
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default MainPage