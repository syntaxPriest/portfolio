import React from "react";
import FadeIn from "./fadeIn";

const Reviews = () => {
    return(
        <React.Fragment>
            <FadeIn>
                <div className="comment-widget">
                    <h3 
                        className="little-text-head"
                        style={{
                            textAlign: 'center'
                        }}
                    >Comments & Reviews</h3>
                    <div>
                        {
                            commentList.map((item) => <CommentCard key={item.id} img={item.img} name={item.name} msg={item.msg} />)
                        }
                    </div>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default Reviews;

export const CommentCard = ({img, name, role, msg}) => {
    return(
        <React.Fragment>
            <div className="comment-card">
                <div className="flex">
                    <img 
                        src={img}
                        alt='Reviewer' 
                    />
                    <div>
                        <h4>{name}</h4>
                        <p>{msg}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const commentList = [
    {
        id:"1",
        name: "Femi Fatokun",
        img:"images/User/avatar-male-1.png",
        msg:'"Daniel has been my friend and Code mate. We have created and partner on different project and I can only say he is the best I have seen."'
    },
    {
        id:"2",
        name: "Opeyemi Adewole",
        img:"images/User/avatar-male-2.png",
        msg:'"This guy ehnnn, he is just too good. I am always marveled at how he gets his designs right."'
    }
]