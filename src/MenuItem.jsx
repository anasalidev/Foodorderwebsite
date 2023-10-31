import React from 'react'

const MenuItem = (props) => {
    return (
        <>
            {/*=================== main section is start============== */}


                <div className="box">


                    {
                        props.items.map((ele) => {
                            const {  name, image, description, price } = ele;
                            return (

                                    <div className="bo" >
                                        <div className="imgbx">
                                            <img src={image} alt="" />
                                        </div>
                                        <div className="text">
                                            <h1>{name}</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Possimus voluptates.</p>
                                            <div className="butn">
                                                <p>Price : {price}</p>
                                                <button className='btn btn-primary' >Order Now</button>
                                            </div>
                                            <h4>{description}</h4>
                                        </div>
                                    </div>
                            )
                        })
                    }

                </div>
        </>
    )
}

export default MenuItem
