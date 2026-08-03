//App.jsx mei j code hai counter waala:
//actually yeh ek interview question hai famous:

function App() {
    const [couter, setCounter] = useState(15)

    const addValue = () => {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1) 

        //interviewer isko multiple times likh dega and puchega ki kya counter kaise update hoga, ek baar hoga yaa 5 baar jaise bhi.
    }
}

//concept: actually mei, ek baar hi update hoga same aise statements likhne se.
//kyoki jo useState hook hai wo bundle mei update krta hai, packets/batch bna ke update krta hai.
//suppose multiple times same yhi likha hai, toh the batch will be considered to do it once only, as a batch will be formed to update the ui aur wo dekhega ki same hi toh cheez hai jo paanch baar krwa rhe, toh ek hi kaam krega.

//but what if practically aisi situation aayi jaha pe mujhe chahiye aise work.
//toh, in that case, we will use :
// setCounter((prevCounter) => prevCounter + 1)
// setCounter((prevCounter) => prevCounter + 1)
// setCounter((prevCounter) => prevCounter + 1)
// setCounter((prevCounter) => prevCounter + 1)
// setCounter((prevCounter) => prevCounter + 1)

//prevCounter is not a k/w, yeh sirf ek variable hai.
//setCounter( () => {})
//actually yeh set method hai and yeh ek arrow function pass krta hai, jispe previous values as an as an argument aati hai aur new value gets updates in the function method.
//ab yaha pe ek arrow function hai, toh callstack kya krta hai jab tak ek function ka call poora execute nhi hota dusre mei nhi jayega, toh sab individually run hote hai.

