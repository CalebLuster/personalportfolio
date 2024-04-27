import { curve, heroBackground, logo, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../../constants";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Notification from "./Notification";
import { Typewriter } from "react-simple-typewriter";
import ParticlesComponent from "./ParticlesComponent";

const Hero = () => {
    const parallaxRef = useRef(null);


    const stars = [
        { key: 1, left: '10vw', top: '15vh', size: 10 },
        { key: 2, left: '20vw', top: '30vh', size: 8 },
        { key: 3, left: '35vw', top: '50vh', size: 12 },
        { key: 4, left: '50vw', top: '20vh', size: 15 },
        { key: 5, left: '65vw', top: '70vh', size: 7 },
        { key: 6, left: '80vw', top: '10vh', size: 14 },
        { key: 7, left: '15vw', top: '80vh', size: 9 },
        { key: 8, left: '40vw', top: '60vh', size: 11 },
        { key: 9, left: '60vw', top: '40vh', size: 13 },
        { key: 10, left: '85vw', top: '25vh', size: 6 },
    ];

    useEffect(() => {
        // Add code here to update the stars array or perform any other necessary actions
    }, []);

    return (
        <>
            <div className="relative w-full h-[calc(100vh-8rem)]">
                <div className="flex items-center justify-between p-10 w-full h-full">
                    <h1 className="h1 mb-6">
                        I'm Caleb, a{' '}
                        <div>
                            <Typewriter
                                words={['Full Stack Developer', 'Web Designer', 'Freelancer']}
                                loop={0}
                                typeSpeed={60}
                                deleteSpeed={60}
                                delaySpeed={1250}
                                cursor
                            />
                        </div>
                    </h1>
                </div>

                {/* MouseParallax with Tailwind styles */}
                <MouseParallax strength={20} parallaxContainerRef={parallaxRef}>
                    <div className="w-full h-full relative overflow-hidden">
                        {/* Render each star as a separate div */}
                        {stars.map((star) => (
                            <div
                                key={star.key}
                                className={`absolute rounded-full bg-white shadow-lg `}
                                style={{
                                    left: star.left,
                                    top: star.top,
                                    width: star.size,
                                    height: star.size,
                                }}
                            />
                        ))}
                    </div>
                </MouseParallax>
            </div>
        </>
    );
};

export default Hero;