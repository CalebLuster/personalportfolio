import React from 'react'
import logo from '../assets/logo.png'
import { socials } from '../../constants'

const Footer = () => {
    return (
        <div
            className={`bottom-0 left-0 w-full z-50 border-t border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm`}
        >
            <div className="flex items-center w-full justify-between px-5 lg:px-7.5 xl:px-10 py-4">
                <a className="flex items-center justify-start w-[12rem] xl:mr-8" href="#hero">
                    <img src={logo} width={50} height={60} alt="Brainwave" className="invert" />
                    <h1 className=" font-bold text-3xl">Caleb</h1>
                </a>

                <div className="flex items-center gap-4">
                    <ul className="flex gap-5 flex-wrap">
                        {socials.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                            >
                                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                            </a>
                        ))}
                    </ul>
                </div>
            </ div>
        </div>
    )
}

export default Footer