import React from 'react';
import NavLeft from "../navBar/navLeft";
import NavRight from "../navBar/navRight";

export default function Layout({children}) {
    return (
        <div className="flex">
            <NavLeft/>
            <div className="ml-[210px] mr-[310px]">{children}</div>
            <NavRight/>
        </div>
    );
}

