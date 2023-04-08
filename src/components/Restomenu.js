import { IMG_CDN } from "../constants"

export const Resto = () => {
    return (
        <>
            <div className="restomenu-head">
                <h3> Recommended </h3>
            </div>
            <hr></hr>
            <div className="restomenu">
                <div className="restomenu-content">
                    <h3>Multigrain Roti with Kadai Veg</h3>
                    <p>&#8377; 249</p>
                    <p className="discription">Serves 1 | A nutritious appetizing platter consisting of 03 rotis made up of millets served with choice of Kadai vegetable Curry.</p>
                </div>
               <div className="restomenu-img">
                    <img src={IMG_CDN+"soqxkyc0dziughrb1iv1"} />
                </div>
            </div>
            <hr></hr>
        </> 
    )
}

export default Restodata = ()=>{
    return <div className="resto-main">
        <Resto/>
    </div>
}