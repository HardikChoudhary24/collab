import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-start h-screen py-28 bg-gradient-to-r from-rose-100 to-teal-100">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-lg">Join a workspace</CardTitle>
          <CardDescription className="text-[0.95rem]">
            Join a workspace and start uploading videos!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700 my-2">
            Ask the creator for the invite code,then enter it here.
          </p>
          <Input
            placeholder="Enter the code"
            className="text-sm text-gray-700 my-2"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Join</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default page
