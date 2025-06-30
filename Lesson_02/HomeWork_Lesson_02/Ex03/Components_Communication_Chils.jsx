
function Components_Communication_Chils({ movieData }) {
    return (
        <>
            {movieData && movieData.name &&
                <div style={{ border: '5px solid blue', textAlign: 'center', width: '60%' }}>
                    Name: {movieData.name} <br /> <br />
                    <img src={movieData.pic} />
                </div>
            }
        </>
    )
}

export default Components_Communication_Chils