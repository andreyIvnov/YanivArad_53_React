import { useSelector } from "react-redux"

function TotalPrice() {
    const totalPrice = useSelector((state) => state.totalPrice);

    return (
        <>
            <div style={{width:'200px', height:'100px', border:'2px solid red'}}>
                TotalPrice: {totalPrice}
            </div>
        </>
    )
}

export default TotalPrice