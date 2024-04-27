import React from 'react'
import { ScrollParallax } from 'react-just-parallax'
import Notification from './Notification'
import { Gradient } from './design/Hero'

const About = () => {
  return (
    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
    <div className="relative bg-n-8 rounded-[1rem]">
        <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">

            <ScrollParallax isAbsolutelyPositioned>
                <Notification
                    className="hidden absolute -left-[2.5rem] xl:-left-[5.5rem] bottom-[20rem] w-[18rem] lg:flex"
                    title="Code generation"
                />
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned>
                <Notification
                    className="hidden absolute -right-[2.5rem] xl:-right-[5.5rem] bottom-[18rem] w-[18rem] lg:flex"
                    title="Code generation"
                />
            </ScrollParallax>

        </div>
    </div>

    <Gradient />
</div>
  )
}

export default About