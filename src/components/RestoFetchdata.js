import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN } from "../constants";

export default RestoFetchdata = () => {
    const { paramsid } = useParams();

    const [restomenulist, setrestomenulist] = useState([])



    async function getrestomennulist() {
        let fetchurl = await fetch
        ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5161534&lng=78.4496168&restaurantId="+paramsid)
        let restodata = await fetchurl.json()
        let data = restodata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards

        // fetching data from url-api
        const getinfo = data.map((menudata) => {
            if (menudata.card.card["title"] === "Recommended")
                return menudata.card.card
        });
        console.log(getinfo)
        //modified the data to get defined one
        const modifydata = {
            card: getinfo.filter((value) => value !== undefined)
        }

        const finalmenudata = modifydata.card[0].itemCards;
        console.log(modifydata)

        setrestomenulist(finalmenudata)
        let getfinalmenu = finalmenudata.map((finaldata) => {
            return finaldata.card.info.name
        });

        console.log(getfinalmenu)

    };

    useEffect(() => {
        getrestomennulist()
    }, []);
    
    return (
        <div className="resto-main">
            <div className="restomenu-head">
                <h3> Recommended </h3>
            </div>
            {
                restomenulist.map((finaldata) => {
                    return (<>
                        <hr></hr>
                        <div className="restomenu">
                            <div className="restomenu-content">
                                <h4>{finaldata.card.info.name}</h4>
                                <p>&#8377;{finaldata.card.info.cost/ 100}</p>
                                <p className="discription">{finaldata.card.info.description}</p>
                            </div>
                            <div className="restomenu-img">
                                <img src={IMG_CDN + finaldata.card.info.imageId} />
                            </div>
                        </div>
                    </>)
                })
            }
        </div>
    )
};


