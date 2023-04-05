

const Shimmer = () => {
    return (
        <div className="cards-grid shimmer-grid">

            {Array(6)
            .fill("")
            .map((e) => (
            <div className="cards-shimmer">  </div>
            ))}
        </div>
    )
}

export default Shimmer