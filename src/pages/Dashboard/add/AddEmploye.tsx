/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { Form } from "../../ui/form";
import { userSchema } from "../../../lib/validations";
import { Form } from "../../../components/ui/form";
import FormFields from "../FormFields";
import { Button } from "../../../components/ui/button";
import SideParsm from "../components/SideParm";
import Nav from "../components/Nav";
// import { Button } from "../../ui/button";
// import FormFields from "../../FormFields";

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof userSchema>) => {
    setLoading(true);
    try {
      console.log(data);
    } catch (err) {
      console.log("Error at creating user", err);
      setLoading(false);
    }
  };
  return (
    <Form {...form} >

<div className='p-3  flex items-center justify-between gap-2  '>

<h1 className='lg:hidden '>

      <SideParsm  />
   </h1>
    <div className="navhome p-0 flex w-full justify-end ">
     <Nav/>
         </div>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-2 gap-4 bg-white p-16  rounded-sm">
          <FormFields
            label="Username"
            name="username"
            type="text"
            placeholder="Enter username"
            control={form.control}
          />
          <FormFields
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email"
            control={form.control}
          />
          <FormFields
            label="Phone Number"
            name="phone"
            type="text"
            placeholder="Enter phone number"
            control={form.control}
          />
          <FormFields
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            control={form.control}
          />
        </div>
        <Button
          type="submit"
          className={`w-full mt-4 ${loading ? "bg-green-500" : "bg-green-700"}`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Add Employe"}
        </Button>
      </form>
    </Form>
  );
};

export default AddEmployee;
