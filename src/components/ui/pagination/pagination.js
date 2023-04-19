import React from "react";
import {DOTS, usePagination} from "./usePgination";
import {MDBIcon} from "mdb-react-ui-kit";


export default function Pagination({
                                       currentPage = 1,
                                       allPages,
                                       onChangePage,
                                   }) {
    const pages = usePagination({
        currentPage,
        itemsCount: allPages,
        pageSize: 1,
    });


    function changePrevPage() {
        onChangePage(currentPage - 1);
    }

    function changeNextPage() {
        onChangePage(currentPage + 1);
    }

    function selectedPage(page) {
        onChangePage(page);
    }

    return (
        <div className="py-3 flex items-center gap-2 justify-center ">
            {allPages}
            <button
                className="p-3 bg-[#26567E] text-white rounded-md disabled:bg-[#B8C1CC] disabled:cursor-no-drop"
                disabled={currentPage <= 1}
                onClick={changePrevPage}
            >
                <MDBIcon fas icon="angle-double-left"/></button>
            {pages.map((page, index) => {
                if (page === DOTS) {
                    return "...";
                }
                return (
                    <button
                        className="py-2 px-3 border-1 border-solid border-[#26567E]"
                        style={{
                            background: page === currentPage ? "#26567E" : "none",
                            color: page === currentPage ? "white" : "black",
                        }}
                        onClick={() => selectedPage(page)}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                className="p-3 bg-[#26567E] text-white rounded-md disabled:bg-[#B8C1CC] disabled:cursor-no-drop"
                onClick={changeNextPage}
                disabled={currentPage === allPages - 1}
            >
                <MDBIcon fas icon="angle-double-right"/>
            </button>
        </div>
    );
}