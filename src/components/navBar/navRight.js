import React from 'react';
import {MDBIcon} from "mdb-react-ui-kit";

export default function NavRight() {
    return (
        <div
            className=" border-solid border-l-2 border-blue-[#C4CCD4] h-[100%] w-[280px]  fixed right-[0] cursor-pointer">
            <div className="flex items-center">
                <MDBIcon fas icon="search" className="ml-8 z-10 position-absolute text-slate-900  "/> <input className="m-4
                border-2 rounded-3xl pl-8 position-relative w-6- h-10 bg-[#D2D3D8] text-slate-900 outline-none text-[#15161B]"
                                                                                                             type="text"
                                                                                                             placeholder="Search..."/>
            </div>
            <div className="flex items-center justify-around">
                <h1 className='text-lg leading-1.5  font-semibold -indent-2.5'>Popular Movies</h1> <p
                className="font-sans font-black">..</p>
            </div>
        </div>
    );
}