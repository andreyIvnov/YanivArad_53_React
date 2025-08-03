import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Stage_03() {
    const [city, setCity] = useState(null)

    const navigate = useNavigate();

    const submitNext = (e) => {
        e.preventDefault()

        if (city && city !== 'No') {
            const userData = { ...(JSON.parse(localStorage.getItem("userData"))), city: city };
            localStorage.setItem("userData", JSON.stringify(userData));
            navigate('/stage_04')
        }
    }


    return (
        <>
            <div style={{ background: 'lightblue', padding: '10px 20px 10px 20px' }}>
                <h3>Select city:</h3>
                <form onSubmit={submitNext}>
                    <select name="city" onChange={e => setCity(e.target.value)}>
                        <option value="No"></option>
                        <option value="Tel Aviv">Tel Aviv</option>
                        <option value="Haifa">Haifa</option>
                        <option value="Jerusalim">Jerusalim</option>
                        <option value="Gevataim">Gevataim</option>
                        <option value="Ramat Gan">Ramat Gan</option>
                    </select><br /><br />
                    <button type='submit'>Next</button>
                </form>
            </div>
        </>
    )
}

export default Stage_03