//projects mei state management is needed very much.
//hum ek global file bna ke saare variables rakh sakte hai, but wo ek optimised tareeks nhi hai as koi bhi method access krke modify krr lega jaha need nhi hai waha bhi.
//contextAPI is a library not a framework.

import React from 'react'

const UserContext = React.createContext()

export default UserContext;

//har ek context ek provider hai, context kya dega ek major cheez provider, as variable hi toh de rha hai.
//toh hum ek wrapper lagayenge<> </>  and components ko uske andar rakhne se wo saari states ka access le sakte hai.
//ek provider bnana oadta hai.
