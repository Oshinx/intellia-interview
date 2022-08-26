import React from 'react'

function Card({customStyle, children }) {
    return (
        <>
            <div className={`${customStyle} p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}>
                {children}
            </div>


        </>
    )
}

export default Card