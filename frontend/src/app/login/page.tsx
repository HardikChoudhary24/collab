"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <Card className="p-10">
        <CardHeader className=" flex items-center">
          <CardTitle className="text-2xl px-6">
            Log in to your account
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <Input
            type="email"
            placeholder="Email"
            className="my-5 w-full h-12"
          />
          <Input
            type="password"
            placeholder="Password"
            className="my-5 w-full h-12"
          />
        </CardContent>
        <CardFooter className="p-0 flex flex-col justify-center items-center">
          <Button className="w-full h-12 text-md">Login</Button>
          <p className="m-4">
            Dont have an account?
            <Link href="/signup" className="font-semibold">
              {" "}
              Signup
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
