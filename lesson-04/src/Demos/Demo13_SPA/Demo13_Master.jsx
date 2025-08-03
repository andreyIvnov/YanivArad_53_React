import {Link} from "react-router-dom"
function Demo13_Master() {
    return (
        <div >
            <ul>
                <li>
                    <Link to="/product/1">TV</Link>
                </li>
                <li>
                    <Link to="/product/2">PC</Link>
                </li>
                <li>
                    <Link to="/product/3">Watch</Link>
                </li>

            </ul>


        </div>
    )
}

export default Demo13_Master