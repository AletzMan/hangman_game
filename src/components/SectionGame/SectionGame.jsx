
import React from "react";
import "./SectionGame.css";
import three from "../../assets/tree-image.svg";
import cord from "../../assets/cord-image.svg";

function SectionGame({children}) {

    
    return (
        <section className="section">
            <img className="section__three" src={three}></img>
            <img className="section__cord" src={cord}></img>
            {children}
        </section>
    )
}

export { SectionGame };