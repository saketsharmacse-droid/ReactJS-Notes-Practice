//yeh ek common sa button hai.
// kaafi baar kuch elements baar baar use hote hai toh hum aise bna lete hai and wr use them wherveeer we need afterwards.
import React from 'react'

function Button({
    children,
    type= 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}){

    return(
        
        <button className={`px-4 py-2 rounded-lg 
            ${className} 
            ${textColor}   
            ${bgColor}`}
            {...props}>
                        {children}
        </button>
    )
}

export default Button