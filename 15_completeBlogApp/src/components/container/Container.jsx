import React from 'react'

//container sirf ek box hota hai jisme upar header neeche kuch aur.
//container properties accept krta hai as its children.

function Container({children}){
    return
        <div className='w-full max-w-7 mx-auto px-4'>
            {children}
        </div>;
    
} //jab bhi ek hi line reduce hori hai, toh its not necessary to put parenthesis with return.
//optionally ek semicolon laga do for better readibility.

export default Container