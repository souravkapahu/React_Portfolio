import images from '../assets/index'
import { Card } from 'antd';

const { nodejs, reactjs, mongodb, nestjs, postgresql, myPic, program, tagCode, wedo80, chess, kat } = images

export default function Home(): any {
    const skills = [
        {
            skill: 'Node.js',
            icon: nodejs
        },
        {
            skill: 'Nest.js',
            icon: nestjs
        },
        {
            skill: 'MongoDB',
            icon: mongodb
        },
        {
            skill: 'PostgreSQL',
            icon: postgresql
        },
        {
            skill: 'React.js',
            icon: reactjs
        }
    ]

    const projects = [
        {
            logo: wedo80,
            title: 'WeDo 80',
            description: `Built admin panel and mobile APIs
with Node.js, MongoDB, React.
Implemented WebSocket for real-
time chats.`
        },
        {
            logo: chess,
            title: 'Chess Arena',
            description: `Built admin and game APIs for
tournaments with Node.js, MongoDB.
Integrated PayPal and coin-based
gameplay with Socket.io.`
        },
        {
            logo: kat,
            title: 'KAT',
            description: `Developed core backend using
NestJS and MongoDB
Implemented real-time messaging
and notifications with WebSocket
Designed modular API architecture
with admin analytics`
        }
    ]
    return (
        <div className='font-playfair'>
            <div className="grid grid-cols-2 h-96">
                <div className="flex flex-col ml-20">
                    <div className="text-white text-[50px]">
                        Saurav Kapahu
                    </div>
                    <div className="text-[18px] text-gray-400 mt-2">
                        Full Stack Developer
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-fit mt-12">
                        {skills.map(({ skill, icon }, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-white text-sm bg-slate-700 rounded px-3 py-1 
             transform transition duration-300 hover:scale-105 hover:-translate-y-1 shadow-md"
                            >
                                <img src={icon} className="w-5 h-5" />
                                {skill}
                            </div>

                        ))}
                    </div>
                </div>

                <div className='flex justify-end mr-20'>
                    <img src={myPic} alt="" className='w-72 h-72 rounded-full object-cover' />
                </div>
            </div >

            <div className="h-[100vh] bg-cover bg-center pt-10" style={{ backgroundImage: `url(${tagCode})` }}>
                <p className='text-slate-800 ml-20 text-[60px]'>
                    &ldquo;Turning ideas into reality<br /> one
                    line at a time.&rdquo;<br />
                    <span className='text-[20px]'>
                        – Saurav Kapahu
                    </span>
                </p>
            </div>

            <div id='about' className='flex flex-col h-[80vh] justify-center pl-20 pt-4 bg-slate-800 text-white'>
                <h1 className='text-[30px]'>About Me</h1>
                <p className="text-lg leading-8 text-gray-300 max-w-4xl">
                    I'm a <span className="text-white font-semibold">Full-Stack Developer</span> currently working as a <span className="text-red-400 font-semibold">Senior Software Developer</span>, with years of experience delivering scalable and performant web and mobile applications. I specialize in modern backend technologies like <span className="text-red-400">Node.js (Express, NestJS)</span>, and frontend development with <span className="text-red-400">React.js (Redux, Saga, TanStack)</span>.
                    <br /><br />
                    My expertise includes working with databases such as <span className="text-red-400">PostgreSQL, MongoDB, and MySQL</span>, integrating real-time features using <span className="text-red-400">Socket.io</span>, and implementing secure cloud solutions with <span className="text-red-400">Firebase, AWS S3, and Azure Blob</span>.
                    <br /><br />
                    I also have deep experience in <span className="text-red-400">payment gateway integrations</span> using <span className="text-red-400">Stripe, PayPal, and PayTabs</span>, and I take pride in writing clean, maintainable code and building systems that scale.
                </p>
            </div>

            <div className='flex flex-col bg-white h-[80vh] text-slate-800'>
                <h2 className='text-[30px] pl-20 pt-8'>Key Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 py-12">
                    {projects.map(({ logo, title, description }) => (
                        <Card
                            key={title}
                            hoverable
                            style={{ width: 240 }}
                            className="flex flex-col items-center text-slate-800 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-1 shadow-md mx-auto"
                        >
                            <div className="flex justify-center w-full">
                                <img src={logo} alt={title} className="w-16 h-16 object-contain mb-4 rounded-full" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-red-400">{title}</h3>
                                <p className="text-sm text-slate-800 mt-1">{description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </div >
    )
}