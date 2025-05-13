"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { Form } from "../components/ui/form";

import FormFields from "./FormFields";
// import { Button } from "./ui/button";
// import { loginSchema } from "../lib/validations";
import { Form } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { loginSchema } from "../../lib/validations";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setLoading(true);
    try {
      console.log(data);
    } catch (error) {
      console.log("Error at login", error);
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormFields
          label="Email"
          name="email"
          placeholder="Enter your email."
          type="email"
          control={form.control}
        />
        <FormFields
          label="Password"
          name="password"
          placeholder="Enter your password."
          type="password"
          control={form.control}
        />

        <Button
          className="w-full bg-green-600 py-4 rounded-md  hover:bg-green-700 transition-all"
          type="submit"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white mx-auto"
              viewBox="3 3 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3v2a9 9 0 1 1-9 9h2a7 7 0 1 0 7-7V3z"
                fill="currentColor"
              />
            </svg>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
