import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default Restomenu = () => {
    const { paramsid } = useParams();

    const [restomenulist, setrestomenulist] = useState([])

    async function getrestomennulist() {
        let fetchurl = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5366218&lng=78.4844811&restaurantId=667695")
        let restodata = await fetchurl.json()
        console.log(restodata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards )
    };

    useEffect(() => {
        getrestomennulist()
    }, []);

    return (
        <div>
            <h2>resto id : {paramsid}</h2>
        </div>
    );
};

