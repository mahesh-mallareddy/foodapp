import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default Restomenu = () => {
    const { paramsid } = useParams();

    const [restomenulist, setrestomenulist] = useState([])



    async function getrestomennulist() {
        let fetchurl = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5161534&lng=78.4496168&restaurantId=42085&submitAction=ENTER")
        let restodata = await fetchurl.json()
        let data = restodata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards

        const getinfo = data.map((menudata) => {
            return menudata.card.card
        });


        let iteminfo = getinfo.map((itemcards) => {
            return (itemcards?.title === "Recommended" ) ?  itemcards.itemCards : null ;
            
        }
           
        );

        console.log(getinfo)
        console.log(iteminfo)

       
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

