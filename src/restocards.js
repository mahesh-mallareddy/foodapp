import { useEffect, useState } from "react";


// export function Bodycards({ cloudinaryImageId, name, costForTwoString, slaString, area }) {

//   return (
//     <div className="foodcards">
//       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="image" />
//       <div className="foodsinfo">
//         <h4>{name}</h4>
//         <p>{costForTwoString}<span>{"Delivary time: " + slaString}</span></p>
//         <p>{area}</p>
//         <input type="button" value="Order now"></input>
//       </div>
//     </div>
//   );
// };


export default Restocards = () => {

    const [restaurantlist, setrestaurantlist] = useState([]);

    let getrestolists = async () => {
        let fetchapi = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4370346&lng=78.444465&page_type=DESKTOP_WEB_LISTING")
        let data = await fetchapi.json()
        setrestaurantlist(data?.data?.cards[2].data.data.cards)
        // const getinfo = data?.data?.cards[2].data.data.cards
        console.log(data?.data?.cards[2].data.data.cards)

    };

    useEffect(() => {
        getrestolists()
    }, []);

    return (

            <div className="cards-grid">
            {
                restaurantlist.map((resto) => {
                    return (
                        <div className="foodcards">
                            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resto.data.cloudinaryImageId} alt="image" />
                            <div className="foodsinfo">
                                <h4>{resto.data.name}</h4>
                                <p>{resto.data.costForTwoString}<span>{"Delivary time: " + resto.data.slaString}</span></p>
                                <p>{resto.data.area}</p>
                                <input type="button" value="Order now"></input>
                            </div>
                        </div>
                    )
                })
            }
            </div>

       );
};
