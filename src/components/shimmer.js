

const Shimmer = () => {
    return (
        <div className="cards-grid shimmer-grid">

            {Array(6)
            .fill("")
            .map((e, index) => (
            <div className="cards-shimmer" key={index}>  </div>
            ))}
        </div>
    )
}

export default Shimmer