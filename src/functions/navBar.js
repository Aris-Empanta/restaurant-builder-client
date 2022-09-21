//The function that shows and hide the cataloque submenu on nav-bar.
export const catalogueChoices = () => {

    let addProduct = document.getElementById("addProduct")
    let preview = document.getElementById("preview")
    let catalogue = document.getElementById("catalogue")
    let display = preview.style.display
    let arrow = document.getElementById("expandArrow")

    if(display === "none"){
        addProduct.style.display = "initial"
        preview.style.display = "initial"
        catalogue.style.marginBottom = "30px"
        catalogue.style.marginTop = "40px"
        arrow.style.transform = "rotate(90deg)"
    } else {
        addProduct.style.display = "none"
        preview.style.display = "none"
        catalogue.style.marginBottom = "0"
        catalogue.style.marginTop = "0"
        arrow.style.transform = "rotate(0)"
    }                                
}

//The function to fetch the number  of unread messages
export const fetchUnread = (axios, callback) => {

    
    axios.get('http://localhost:5000/chat-messages/unread-messages')
         .then((res) => {                          
                          //If unread messages are '0', They will not be displayed in navbar. 
                          res.data[0].Unread === '0' ? callback("") : 
                                                       callback(res.data[0].Unread)                          
                        })
    
}

 //The function to fetch the number  of unchecked orders
export const fetchUncheckedOrders = (axios, callback) => {


    axios.get('http://localhost:5000/orders/unchecked-orders')
        .then((res) => { 
                        
                        //If unread messages are '0', They will not be displayed in navbar. 
                        res.data.length === 0 ? callback("") : 
                                                callback(res.data.length)  
                    })
}


//The function to change the list item color on navBar onClick.
export const focus = (id, className ) => {

    let elements = document.getElementsByClassName("navBarList")
    let currentId = document.getElementById(id)
    let currentClass = document.getElementsByClassName(className)
    let fontsColor = document.getElementsByClassName("fontsColor")

    //Restore all items background to initial color
    for( let element of elements) {

        element.classList.remove("focusBackground")
    }

    //Restore all fonts color to initial
    for(let font of fontsColor ) {

        font.classList.remove("focusColor")
    }

    //Change the chosen list item font's color
    for( let item of currentClass ) {

        item.classList.add("focusColor")
    }

    //Change the chosen list item background color
    currentId.classList.add("focusBackground")
}

export const soundNotification = (id) => {

    document.getElementById(id).play()
}