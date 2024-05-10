import React, { useEffect } from 'react';
import { projects, sprites } from '../../constants';

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
            <h1 className="text-center h1 mt-5 py-5 " id='projects'>Web Projects</h1>
            <div className="cards p-5 pb-12">
                {projects.map((project) => (
                    <a key={project.title} target='_blank ' href={project.link}>
                        <div className="card">
                            <div className="inner overflow-hidden w-full sm:w-[350px] h-[300px] flex flex-col gap-2 item-start justify-between">
                                <h1 className='font-bold text-2xl'>{project.title}</h1>
                                <div className='flex flex-col gap-2'>
                                    <p className=' text-n-1/50 text-sm'>{project.desc}</p>
                                    <div className='flex flex-wrap sm:flex-nowrap gap-2'>
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

            <h1 className="text-center h1 mt-5 py-5 " id='loaders'>Custom Sprites</h1>
            <div className="cards-sprites p-5 pb-12">
                {sprites.map((sprite) => (
                    <div className="card max-sm:w-full">
                        <div className="inner overflow-hidden w-full sm:w-[350px] h-[300px] flex flex-col gap-2 item-start">
                            <h1 className='font-bold text-2xl'>{sprite.title}</h1>
                            <div className='flex justify-center items-center w-full h-full gap-2'>
                                <div className={` ${sprite.class}`}>
                                </div>
                            </div>
                        </div>
                        <div className="blob"></div>
                        <div className="fakeblob"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;