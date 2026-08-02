const reactElement = {
    //react kya krta hai, jo bhi return hoti hai tags unka use krke ek tree bnata hai.
    //properties ka tree, using type, props
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
} //react ke under the hood har ek element ko in a similar this way likhta hai wo.

//customRender ko design krte hai:
function customRender(reactElement, container){
   /* //dom element create krte hai, fir baad mei inject krwayenge.
    const domElement = document.createElement(reactElement.type)
    //modular bnaye hai, means ki .type laga ke generic bnn gay hai, type change hoga toh createElement ka argument bhi change hoga, wrna direct hi likh dete createElement(a) krke.
    //element create ho gya, but abhi toh eement khaali hai, khaali container hai.

    //inner html inject krte hai.
    domElement.innerHTML = reactElement.children

    //uske andar ke attributes bhi set krne lagenge:
    domElement.setAttribute('href', reactElement.props.href) //yaha pe ek ekelement ko set krr rhe
    domElement.setAttribute('target', reactElement.props.target)
    //what if bahut saare nested form mei elements present hai.

    //we need a loop base form approach, which is more generic.

    container.appendChild(domElement)

    */

    //now we'll make this code a bit more modulated.

    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTML = reactElement.children

    //loop lagayenge 
    for (const prop in reactElement.props){
        //props ke andar agar children wagera hai, toh ek conditional to check
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]) //prop ko set krke uske andar value daalni hai reactElement.props ki.

    }
    container.appendChild(domElement)

    

    
}


const mainContainer = document.querySelector('#root')
//ab isko render krna hai, suppose a tag ko.

//humein ek method chahiye jo iss poore a tag/element ko root pe inject krr dega.
customRender(reactElement, mainContainer)
//yeh do cheezein expect krta hai, kaha se inject krna hai and kispe inject krna hai.
//reactElement se mainContainer pe inject krwana hai root pe.
