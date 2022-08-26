import React, { Children, useEffect } from 'react';


function IconButton({icon}) {
    useEffect(() => {
        console.log();
    })
    return (
        <>
            <li className="flex">
                <button
                    className="rounded-md focus:outline-none focus:shadow-outline-purple"
                    aria-label="Toggle color mode"
                >
                
               
                </button>
            </li>
        </>
    )
}

export default IconButton