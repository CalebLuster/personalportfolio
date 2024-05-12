import React from 'react'
import works from '/image-3.png'
import games from '/image-2.png'
import resume from '/next.avif'
import education from '/online-learning.png'

const About = () => {
    return (
        <div
            className="relative border-b border-b-n-10 z-1 p-0.5 overflow-hidden pb-10"
            id='about'
        >
            <h1 className="h1 text-center my-10">About Me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 sm:px-[5rem]">
                <div className='flex flex-col items-end gap-4'>
                    <div className=' bg-n-9/20 backdrop-blur border border-n-1/10 rounded-[3rem] p-4'>
                        <img className='w-full' src={works} width={630} height={420} alt="" />
                        <div className='flex flex-col justify-between gap-2 py-10'>
                            <h1 className="text-4xl font-bold">Experience</h1>
                            <p className='text-n-1/50 text-sm'>I have over 3 years of experience working with modern and in demand technologies, such as, React.js, Next.js, MERN Stack, TypeScript, Prisma, MongoDB, and much more</p>
                        </div>
                    </div>
                    <div className=' bg-n-9/20 flex flex-col justify-center items-center backdrop-blur border border-n-1/10 rounded-[3rem] p-4'>
                        <img className='p-10 invert-[20%] w-[300px] lg:w-[380px]' src={education} width={380} height={380} alt="" />
                        <div className='flex flex-col justify-between gap-2 py-10'>
                            <h1 className="text-4xl font-bold">Education</h1>
                            <p className='text-n-1/50 text-sm'>I graduated from Colorado State University Global with a bachelors degree in Computer Science and a Full Stack Web Developer certificate from The University of Minnesota</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-4 sm:mt-[7rem]'>
                    <div className=' bg-n-9/20 backdrop-blur border border-n-1/10 rounded-[3rem] p-4'>
                        <img className='p-5' src={resume} width={4220} height={420} alt="" />
                        <div className='flex flex-col justify-between gap-2 py-10'>
                            <h1 className="text-4xl font-bold">Resume & Works</h1>
                            <p className='text-n-1/50 text-sm'>I have worked with 3 seperate clients making 10+ websites for their business, boosting their online presence If you want to check out my resume <a href="https://github.com/CalebLuster/personalportfolio/blob/main/README.md" className=' text-n-1 transition-colors hover:text-n-9'> Click Here </a> to view it.  </p>
                        </div>
                    </div>
                    <div className=' bg-n-9/20 backdrop-blur border border-n-1/10 rounded-[3rem] p-4'>
                        <img className='w-full' src={games} width={630} height={420} alt="" />
                        <div className='flex flex-col justify-between gap-2 py-10'>
                            <h1 className="text-4xl font-bold">Pixel Art</h1>
                            <p className='text-n-1/50 text-sm'>I create custom loading animations using pixel art for my clients websites, adding character, charm, and uniqueness to each project, helping them stand out from the competition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About