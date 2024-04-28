import React from 'react'
import {
    Button,
    Input,
  } from "@material-tailwind/react";

function Header() {
  return (
    <div className='w-full'>
        <div className='flex justify-between items-center'> 
            <div>
                <h1 className='text-2xl font-bold text-[#222222]'>Dashboard</h1>
            </div>
            <div>
                <div className="relative flex w-full gap-2 md:w-max">
                    <Input
                        type="search"
                        color="white"
                        label="Type here..."
                        className="pr-20"
                        containerProps={{
                        className: "min-w-[288px]",
                        }}
                    />
                    <Button
                        size="sm"
                        color="white"
                        className="!absolute right-1 top-1 rounded"
                    >
                     Search
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header