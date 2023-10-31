import React from 'react'

const Navbar = ({ filterItem, catItem }) => {
    return (
        <>
            <div className="navbar">
                    {
                        catItem.map((curElems) => {
                            return <button className='btn btn-warning' onClick={() => filterItem(curElems)} > {curElems} </button>

                        })
                    }
                </div>
        </>
    )
}

export default Navbar
