import React, { useEffect } from 'react';
import { projects } from '../../constants';

const Projects = () => {
    useEffect(() => {
        const allCards = document.querySelectorAll(".card");

        window.addEventListener("mousemove", (ev) => {

            allCards.forEach((e) => {
                const blob = e.querySelector(".blob");
                const fblob = e.querySelector(".fakeblob");

                const rec = fblob.getBoundingClientRect();

                blob.animate(
                    [{
                        transform: `translate(${ev.clientX - rec.left - (rec.width / 2)}px,${ev.clientY - rec.top - (rec.height / 2)}px)`,
                    }],
                    {
                        duration: 100,
                        fill: "forwards",
                    }
                );
            });
        });
    }), [];

    return (
        <>
            <h1 className="text-center h1 mt-5 py-5 ">Web Projects</h1>
            <div className="cards p-5">
                {projects.map((project) => (
                    <a key={project.title} target='_blank ' href={project.link}>
                        <div className="card">
                            <div className="inner overflow-hidden w-full sm:w-[350px] h-[300px] flex flex-col gap-2 item-start justify-between">
                                <h1 className='font-bold text-2xl'>{project.title}</h1>
                                <div className='flex flex-col gap-2'>
                                    {/* <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-5 transition-opacity'>
                                        <img src={project.img} alt="" className='w-full h-full' />
                                    </div> */}
                                    <p className=' text-n-1/50 text-sm'>{project.desc}</p>
                                    <div className='flex gap-2'>
                                        {project.tags.map((tag) => (
                                            <p key={tag.name} className={`text-sm ${tag.color}`}>#{tag.name}</p>
                                        ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='absolute top-2 right-2 rounded-full text-xs green-pink-gradient'>{project.client}</div>
                            <div className="blob"></div>
                            <div className="fakeblob"></div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Projects;