import { logo } from "../assets";
import { MouseParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    const parallaxRef = useRef(null);
    const [stars, setStars] = useState([]);
    const [mounted, setMounted] = useState(false);


    const generateStars = () => {
        const starCount = 25; 
        const newStars = [];

        for (let i = 0; i < starCount; i++) {
            newStars.push({
                key: i,
                left: Math.random() * 100 + 'vw', // Random position across the width
                top: Math.random() * 100 + 'vh', // Random position across the height
                size: Math.random() * 3 + 5, // Random size between 3px and 8px
            });
        }

        return newStars;
    };



    useEffect(() => {
        setStars(generateStars());
        setMounted(true);
    }, []);

    return (
        <>
            <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden border-b border-b-n-6" id="hero">

                <div className="absolute top-1 left-[50%] w-[100px] h-[1000px] blur-3xl rounded-full rotate-[80deg]"
                    style={{
                        background: "linear-gradient(to top, #2a2a3a, #1f1f30, #0a0a0a, #080808, #2a1f3f)",
                    }}
                />
               

                <div className="flex items-center justify-between p-10 w-full h-full ">
                    <h1 className="h1 mb-6 z-5">
                        I'm Caleb, a{' '}
                        <div>
                            <Typewriter
                                words={['Full Stack Developer', 'Web Designer', 'Freelancer', 'React Developer', 'Next.js Developer', 'Pixel Artist', 'UI/UX Designer', ]}
                                loop={0}
                                typeSpeed={60}
                                deleteSpeed={60}
                                delaySpeed={1250}
                                cursor
                            />
                        </div>
                    </h1>
                </div>

                <MouseParallax isAbsolutelyPositioned strength={0.035} parallaxContainerRef={parallaxRef}>
                    <div className="w-full h-full relative p-10">
                        {stars.map((star) => (
                            <div
                                key={star.key}
                                className="absolute rounded-full -z-1 transition-all duration-500 ease-in-out"
                                style={{
                                    left: star.left,
                                    top: star.top,
                                    width: `${star.size}px`,
                                    height: `${star.size}px`,
                                    backgroundColor: star.size < 6 ? '#add8e6' : '#f0f8ff', // Larger stars are pale gold, smaller stars are white
                                    boxShadow: star.size < 6 ? '0 0 10px #add8e6' : '0 0 5px #f0f8ff', // Adjust the glow based on size

                                }}
                            />
                        ))}
                    </div>
                </MouseParallax>
                <MouseParallax isAbsolutelyPositioned strength={0.1} parallaxContainerRef={parallaxRef}>
                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                        <div
                            className={`w-2 h-2 -ml-1 mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                        <div
                            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                        <div
                            className={`w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                        <div
                            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                        <div
                            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                        <div
                            className={`relative w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                        <div
                            className="absolute moon rounded-full rotate-[70deg]"
                            style={{
                                width: '5px',
                                height: '5px',
                                background: 'linear-gradient(to left, #f0f8ff, #000000)',
                                animation: 'orbit 15s linear infinite', // Apply the orbit animation
                                top: '50%', // Adjust to center the moon relative to the planet
                                left: '50%', // Adjust to center the moon relative to the planet
                                transform: 'translate(-50%, -50%)', // Center the moon on the orbit path
                            }}
                        />
                        </div>
                    </div>
                </MouseParallax>
            </div>
        </>
    );
};

export default Hero;