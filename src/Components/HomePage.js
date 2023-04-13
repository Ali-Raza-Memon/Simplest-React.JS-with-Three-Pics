import React from "react";




export const HomePage = () =>{

    const name = "Ali Raza"

    const img1 = "https://picsum.photos/seed/picsum/200/300";
    const img2 = "https://picsum.photos/200/300?grayscale";
    const img3 = "https://picsum.photos/200/300";
    return(
    <>

        
        <h1 class='heading'>Hello, Mr. {name}</h1>



        <div className="box">

            <img src={img1} alt="Random Picture from picsum"/>
            <img src={img2} alt="Random Picture from picsum"/>
            <img src={img3} alt="Random Picture from picsum"/>



        </div>
    
    
    </>
    )

}




/* This code is for taking date and time from PC


export const HomePage = () =>{

   
    const name = "Ali Raza"
    const img1 = "https://picsum.photos/seed/picsum/600/300"
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    return(
        <>
        
            <h1 contentEditable="true" >Hello,My name is {name}</h1>
            <p>todays Date is {currentDate} </p>
            <p>Current Time is {currentTime} </p>
            <img src={img1} alt="simple pic" />

        </>
    )

} */