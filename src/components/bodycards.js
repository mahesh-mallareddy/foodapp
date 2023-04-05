import { useEffect, useState } from "react";
import { IMG_CDN } from "../constants";

export function Bodycards({ cloudinaryImageId, name, costForTwoString, slaString, area }) {

  return (
    <div className="foodcards">
      <img src={IMG_CDN + cloudinaryImageId} alt="image" />
      <div className="foodsinfo">
        <h4>{name}</h4>
        <p>{costForTwoString}<span>{"Delivary time: " + slaString}</span></p>
        <p>{area}</p>
        <input type="button" value="Order now"></input>
      </div>
    </div>
  );
};

let filter = (restaurant, getsearch) => {
  let setfilter = restaurant.filter((restaurant) => restaurant.data.name.toLowerCase().includes(getsearch.toLowerCase())
  );
  return setfilter
}

export const Cards = () => {
const [allrestaurant,setallrestaurant] = useState([])
  const [filterrestaurant, setfilterrestaurant] = useState([]);
  const [getsearch, setsearch] = useState()

  let getrestolist = async () => {
    let fetchapi = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5009599&lng=78.4566031&page_type=DESKTOP_WEB_LISTING")
    let data = await fetchapi.json()
    setfilterrestaurant(data?.data?.cards[2]?.data?.data?.cards)
    setallrestaurant(data?.data?.cards[2]?.data?.data?.cards)
  };

  useEffect(() => {
    getrestolist()
  }, []);

  if(!allrestaurant) return null;

if(filterrestaurant.length === 0) 
return <h2>No restaurant are found</h2>;
  
  return ( 
    <>
      <div className="sreachinput">
        <input className="search" type="text" placeholder="Search your food"
          value={getsearch}
          onChange={(e) => {
            setsearch(e.target.value)
          }}
        />
        <button onClick={() => {
          setfilterrestaurant(filter(allrestaurant, getsearch)); 
        }}>search</button>
      </div>

      <div className="cards-grid">
        {
          filterrestaurant.map((resto) => {
            return <Bodycards {...resto.data} key={resto.data.id} />
          })
        }
      </div>
    </>
  );
};
