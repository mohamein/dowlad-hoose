"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AddReceipt from "./add/AddReceipt";
import { Card, CardHeader, CardTitle } from "../../components/ui/card";

const AddReceiptPage = () => {
  const [selected, setSelected] = React.useState<boolean>(true);
  const [receiptType, setReceiptType] = React.useState<string>("");
  const handleTitleChange = (title: any) => {
    setReceiptType(title);
    setSelected(false);
  };
  const title: any = [
    {
      id: 1,
      title: "Cashuur Ardiyad",
    },
    {
      id: 2,
      title: "Ganaax",
    },
    {
      id: 3,
      title: "Liisan Ganacsi",
    },
    {
      id: 4,
      title: "Premeim of Land",
    },
    {
      id: 5,
      title: "Kala Wareejin (Dollar)",
    },
    {
      id: 6,
      title: "Mulkiyad(Dollar)",
    },
  ];
  return (
    <div className="px-4 mt-10 h-screen">
      {selected ? (
        <div className="grid grid-cols-3 gap-4">
          {title.map((item: any) => (
            <Card
              key={item.id}
              onClick={() => handleTitleChange(item.title)}
              className="w-full h-92 rounded-sm bg-green-800 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer mb-4"
            >
              <CardHeader className="border-b">
                <CardTitle className="text-lg text-white font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-col w-full gap-4 items-start">
            <div>
              <h2 className="text-2xl text-gray-700 font-semibold">
                {receiptType}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                You can Use this form to add a new receipt to your household.
                Fill in the necessary details and click 'Submit'.
              </p>
            </div>

            <AddReceipt receiptType={receiptType} />
          </div>
        </>
      )}
    </div>
  );
};

export default AddReceiptPage;
