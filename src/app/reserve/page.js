"use client"
import {Input} from "@heroui/input"
import {Button} from "@heroui/button"
import {Form} from "@heroui/form"
import { DatePicker } from "@heroui/date-picker"
import React, {useState} from "react"
import {parseDate} from "@internationalized/date"







function Page() {
const [submitted, setSubmitted] = useState(null)
const [email, setEmail] = useState("")

const onSubmit = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))

    setSubmitted(data)
}
    return (
        <section>
            <div>
                <Form className="w-full max-w-xs" onSubmit={onSubmit}>
                    <Input 
                    isRequired
                    errorMessage= "please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onValueChange={setEmail}                   />
                    <Button type="submit" variant="shadow" className="border-black " radius="lg">
                        Submit
                    </Button>
                    <DatePicker className="max-w-[284px]" label="Birth date" />
                    {submitted && (
                        <div>
                            you submitted: <code>{JSON.stringify(submitted)}</code>
                        </div>
                    )}
                </Form>
            </div>
        </section>
    )
}

export default Page