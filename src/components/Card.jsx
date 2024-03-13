import React, { useState } from "react";
import Modal from "./Modal";


const Card = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return (
        <>
            {
                book.map((item,index) => {
                    const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
                    const amount = item.saleInfo?.listPrice?.amount;
                    const title = item.volumeInfo?.title;
                    {
                        return (
                            <>
                            <div key={index}className="card" onClick={()=>{setShow(true);setItem(item)}}>
                            {thumbnail && <img src={thumbnail} alt="" />}
                        <div className="bottom">
                            {title && <h3 style={{marginTop:'20px'}} className="title">{title}</h3>}
                            {amount  && <p style={{marginTop:'-20px',marginBottom:'-30px'}} className="amount">&#8377;{amount}</p>}                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default Card;