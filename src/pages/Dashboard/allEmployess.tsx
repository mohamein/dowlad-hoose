// import { SheetCreateV } from '@/Pages/CreateVendor';

// import { TableContainer } from '@mui/material';
// import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

import SideParsm from "./components/SideParm";
import Nav from "./components/Nav";
import DataUsersCom from "./dataEmploye";

function ALLEmployee() {
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <div className="p-3  flex items-center justify-between gap-2  ">
        <h1 className="lg:hidden ">
          <SideParsm />
        </h1>
        <div className="navhome p-0 flex w-full justify-end">
          <Nav />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center my-2">
          <h1 className="font-semibold">All Users</h1>
          <Link to={"Create"}>
            <button className="bg-white rounded-xl text-green-600  flex gap-1 p-2 items-center">
              <GoPlus /> Add New
            </button>
          </Link>
        </div>
        <div className=" bg-white rounded-xl overflow-x-hidden max-w-[970px]">
          <DataUsersCom />
        </div>
      </div>
    </div>
  );
}

export default ALLEmployee;
