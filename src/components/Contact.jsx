import React, { useRef, useState } from 'react'
import { ScrollParallax } from 'react-just-parallax'
import Notification from './Notification'
import { Gradient } from './design/Hero'
import emailjs from '@emailjs/browser';
import Button from './Button';


const Contact = () => {
    const [send, setSend] = useState('Send')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSend('Sending...')
        emailjs
            .sendForm('service_z0csq0r', 'template_scv8f2t', form.current, {
                publicKey: '4S_kNuqi96fhfksFe',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSend('Message Sent!')
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSend('Failed to Send')

                },
            )
            .finally(() => {
                setTimeout(() => {
                    setSend('Send');
                }, 2000);
            });
    };
    return (
        <div 
        id='contact'
        className="relative border-b border-b-n-10 z-1 p-0.5 m-[5rem] 2xl:mx-auto rounded-2xl max-w-screen-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] ">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                <div className=" p-5 rounded-b-[0.9rem] overflow-hidden  z-2">
                    <h1 className='text-center h1 mb-4'>Contact Me</h1>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center justify-center mx-auto gap-5 max-w-[350px] xl:max-w-xl z-5'>
                        <div className='w-full'>
                            <label className=' '>Name</label>
                            <input
                                required
                                type="text"
                                placeholder='Name'
                                name="user_name"
                                className='w-full p-2 rounded-xl bg-n-9/40 backdrop-blur border border-n-1/10 focus:outline-none focus:ring-0'
                            />
                        </div>
                        <div className='w-full'>

                            <label>Email</label>
                            <input
                                required
                                type="email"
                                placeholder='Email'
                                name="user_email"
                                className='w-full p-2 rounded-xl bg-n-9/40 backdrop-blur border border-n-1/10 focus:outline-none focus:ring-0'
                            />
                        </div>
                        <div className='w-full'>

                            <label>Message</label>
                            <textarea
                                required
                                name="message"
                                placeholder='Message'
                                className='w-full p-2 rounded-xl bg-n-9/40 backdrop-blur border border-n-1/10 focus:outline-none focus:ring-0'
                                rows='4'
                            />
                        </div>
                        <Button className=" text-n-1/50 hover:text-n-1 w-full flex" href="#login">
                            <input
                                type="submit"
                                value={send}
                                className='cursor-pointer px-32 py-2'
                            />
                        </Button>
                    </form>
                </div>
                <div className='relative z-2'>
                    <ScrollParallax isAbsolutelyPositioned>
                        <Notification
                            className="hidden absolute -left-[2.5rem] xl:-left-[5.5rem] bottom-[16rem] w-[18rem] lg:flex"
                            title="Email Address"
                            time='CWL117@outlook.com'
                        />
                    </ScrollParallax>

                    <ScrollParallax isAbsolutelyPositioned>
                        <Notification
                            className="hidden absolute -right-[2.5rem] xl:-right-[5.5rem] bottom-[18rem] w-[18rem] lg:flex"
                            title="Phone Number"
                            time='(507) 398-5340'
                        />
                    </ScrollParallax>
                </div>

            </div>


            <Gradient />
        </div>
    )
}

export default Contact