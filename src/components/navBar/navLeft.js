import React from 'react';
import {MDBIcon} from "mdb-react-ui-kit";
import {NavLink} from "react-router-dom";
import "./style.css"

export default function NavLeft() {
    return (
        <div className="border-solid border-r-2 border-blue-[#C4CCD4] h-[100%] w-[250px] fixed left-[0] pl-10 overflow-y-scroll max-h-[100%] ">
                <div className="header cursor-pointer">
                    <div className="flex items-center " >
                     <h1 className="text-lg  font-bold leading-9 mt-4 text-2xl bg-[blue] pr-4 rounded-[10px] text-white">   <MDBIcon fas icon="eye ml-4 mt-3"/> Nonton</h1>
                    </div>
                    <div>
                    <h1 className='text-lg leading-1.5  font-semibold -indent-2.5 pb-2 pt-4'>MENU</h1>
                    <NavLink to={`/`} className=" hover:text-[red]  text-base  text-slate-900 font-black flex justify-evenly items-center pr-[90px]"> <MDBIcon fas icon="home"/>HOME</NavLink> <br/>
                    <NavLink to={`/Community`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[50px] "> <MDBIcon fas icon="shield-alt"/>Community</NavLink> <br/>
                    <NavLink to={`/Discover`} className=" hover:text-[red]  text-base  text-slate-900 font-black flex justify-evenly items-center pr-[75px] "> <MDBIcon fas icon="compass"/>Discover</NavLink> <br/>
                    <NavLink to={`/Awords`} className=" hover:text-[red]  text-base  text-slate-900 font-black flex justify-evenly items-center pr-[79px] ">  <MDBIcon fas icon="brain"/>Awords</NavLink> <br/>
                    <NavLink to={`/Celebs`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[79px] ">  <MDBIcon fas icon="child"/>Celebs</NavLink> <br/>
                    </div>
                </div>
                <div className="mb-3">
                    <h1 className="text-lg m-1 font-semibold -indent-2.5">Library</h1>
                    <NavLink to={`/Recent`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[75px] pt-3 "><MDBIcon far icon="clock"/>Recent</NavLink> <br/>
                    <NavLink to={`/Top Rated`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[45px]  "> <MDBIcon fas icon="star" />Top Rated</NavLink> <br/>
                    <NavLink to={`/Downloaded`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[25px]  ">     <MDBIcon fas icon="cloud-download-alt"/>downloaded</NavLink> <br/>
                </div>
                <div className="mb-3">
                    <h1 className="text-lg m-1 font-semibold -indent-2.5">Gategory</h1>
                    <NavLink to={`/TV-Show`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[45px] pt-3"> <MDBIcon fas icon="tv"/>TV-show</NavLink> <br/>
                    <NavLink to={`/Movie`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[58px] "><MDBIcon fas icon="video"/>Movie</NavLink> <br/>
                    <NavLink to={`/Anime`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[58px] "> <MDBIcon fab icon="apple"/>Anime</NavLink> <br/>
                </div>
                <div>
                    <h1 className="text-lg  font-semibold -indent-2.5">Ceneral</h1>
                    <NavLink to={`/Settings`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[58px] mt-3 ">  <MDBIcon fas icon="cog"/>settings</NavLink> <br/>
                    <NavLink to={`/Log Out`} className=" hover:text-[red] text-base  text-slate-900 font-black flex justify-evenly items-center pr-[55px]  ">  <MDBIcon fas icon="sign-out-alt"/>Log Out</NavLink> <br/>
                </div>
        </div>
    );
}




