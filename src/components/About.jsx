import React from 'react'
import { ScrollParallax } from 'react-just-parallax'

const About = () => {
    return (
        <div
            className="relative border-b border-b-n-10 z-1 p-0.5 overflow-hidden"
            id='about'
        >

            {/* Grid container with scroll parallax effects */}
            <div className="grid grid-cols-2 gap-4 p-4 ">
                <ScrollParallax strength={0.8} className="">
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>

                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>
                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>

                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>
                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>


                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>
                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>

                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>
                        <div className='flex flex-col items-center p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>
                    </div>
                </ScrollParallax>
                <ScrollParallax lerpEase={0.1} strength={0.3} className="">
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col items-center justify-center h-[400px] p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>

                        <div className='flex flex-col items-center justify-center h-[400px] p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>
                        <div className='flex flex-col items-center justify-center h-[400px] p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>

                        <div className='flex flex-col items-center justify-center h-[400px] p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>
                        <div className='flex flex-col items-center justify-center h-[400px] p-20 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl '>
                            <h3>Experience</h3>

                        </div>
                    </div>
                </ScrollParallax>

            </div>
        </div>
    )
}

export default About