function customRender(reactElement, container){        //The customRender function is designed to create a DOM element based on a given React-like element and insert it into a specified container on the webpage
    /*
    const domElement = document.createElement(reactElement.type)   //This line creates a new DOM element (like a div, a, span, etc.) based on the type property of the reactElement. For example, if reactElement.type is "a", it creates an <a> element.
    domElement.innerHTML = reactElement.children          //This line sets the inner HTML (content) of the created DOM element to whatever is in reactElement.children. For example, if reactElement.children is "Click here", the element's inner content becomes "Click here".
    domElement.setAttribute('href', reactElement.props.href)   //href is set to the value of reactElement.props.href
    domElement.setAttribute('target', reactElement.props.target)   //target is set to the value of reactElement.props.target

    container.appendChild(domElement)    //This line appends the created DOM element to the specified container. This means it adds the new element into the existing DOM, making it visible on the webpage.
     */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children')            //Loops through the properties in reactElement.props, setting each as an attribute on the DOM element, except for children.
        continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)

/*Calling customRender(reactElement, container) will:

1-Create an <a> element.
2-Set its inner content to "Click me to visit google".
3-Set its href attribute to https://google.com.
4-Set its target attribute to _blank.
5-Append this <a> element to the container.
*/