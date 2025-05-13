/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../../../components/ui/form";
import { receiptSchema } from "../../../lib/validations";
import { Button } from "../../../components/ui/button";
import FormFields from "../FormFields";

interface ReceiptTypeProps {
  receiptType: string;
}
const AddReceipt = ({ receiptType }: ReceiptTypeProps) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof receiptSchema>>({
    resolver: zodResolver(receiptSchema),
    defaultValues: {
      place: "",
      telephone: "",
      receipt_code: "",
      receipt_number: "",
      receipt_date: "",
      cabbirka: "",
      dhisan: "",
      tax_ref: "",
      receivedFrom: "",
      total_amount: "",
      amount_in_words: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof receiptSchema>) => {
    setLoading(true);
    const receipt_code = receiptType;
    try {
      console.log(data, receipt_code);
    } catch (error) {
      console.error("Error adding receipt:", error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <div className="grid grid-cols-2 gap-4 bg-white p-2 rounded-sm">
          <FormFields
            label="Place"
            name="place"
            placeholder="Enter place."
            type="text"
            control={form.control}
          />
          <FormFields
            label="Telephone"
            name="telephone"
            placeholder="Enter telephone."
            type="text"
            control={form.control}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 bg-white p-2 rounded-sm">
          <FormFields
            label="Receipt Number"
            name="receiptNumber"
            placeholder="Enter receipt number."
            type="text"
            control={form.control}
          />
          <FormFields
            label="Date"
            name="date"
            type="date"
            control={form.control}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 bg-white p-2 rounded-sm">
          <FormFields
            label="Cabbirka"
            name="cabbirka"
            type="text"
            control={form.control}
          />
          <FormFields
            label="Dhisan"
            name="dhisan"
            type="text"
            control={form.control}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 bg-white p-2 rounded-sm">
          <FormFields
            label="Tax Ref"
            name="taxRef"
            placeholder="Enter tax ref."
            type="text"
            control={form.control}
          />
          <FormFields
            label="Received From"
            name="receivedFrom"
            placeholder="Enter received from."
            type="text"
            control={form.control}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 bg-white p-2 rounded-sm">
          <FormFields
            label="Total Amount(Xadiga Lacagta)"
            name="totalAmount"
            placeholder="Enter total amount."
            type="text"
            control={form.control}
          />
          <FormFields
            label="Amount in Words"
            name="amountInWords"
            placeholder="Enter amount in words."
            type="text"
            control={form.control}
          />
        </div>
        <Button
          className="w-full bg-green-600 py-4 rounded-md  hover:bg-green-700 transition-all"
          type="submit"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
                />
              </svg>
              <span>Loading...</span>
            </div>
          ) : (
            "Add Receipt"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AddReceipt;
