import React from 'react'
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
const Enroll = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
       <Button className="md:ml-3" onClick={handleOpen}>Enrollment</Button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Enroll
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                You can Enroll Here.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Your Name
              </Typography>
              <Input label="Your Name" size="lg" />
              <Typography className="-mb-2" variant="h6">
                Your Email
              </Typography>
              <Input label="Email" size="lg" />
              <Typography className="-mb-2" variant="h6">
                Your Mobile-No
              </Typography>
              <Input label="Mob" size="lg" />
              {/* <Input label="Email" size="lg" /> */}
              <Typography className="-mb-2" variant="h6">
                Your Password
              </Typography>
              <Input label="Password" size="lg" />
              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleOpen} fullWidth>
                Enroll
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signin"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleOpen}
                >
                  Sign in
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </Dialog>
    </>
  )
}

export default Enroll
