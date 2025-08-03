import { useNavigate } from "react-router-dom"

function Stage_01() {
    const navigate = useNavigate();

    const submitStart = (e) => {
        e.preventDefault()
        navigate('/stage_02')
    }

    return (
        <>
        <div style={{background:'pink', width:'400px', height:'200px'}}>
            <h2>Welcome</h2>
            <form onSubmit={submitStart}>
                <button type='submit'>Start</button>
            </form>
        </div>
        </>
    )
}

export default Stage_01