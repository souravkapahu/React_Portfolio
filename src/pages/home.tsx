import { Card, Spin, Alert } from "antd";
import { homeConstant } from "../constant";
import { useGetProfile } from "../hooks/profile";
import { useGetSkills } from "../hooks/skill";
import { useGetProjects } from "../hooks/project";

const imageURL = import.meta.env.VITE_IMAGE_BASE_URL;

const {
    images: { tagCode },
} = homeConstant;

export default function Home() {
    const {
        data: profileData,
        isLoading: profileLoading,
        error: profileError,
    } = useGetProfile();

    const profile = profileData?.data;
    const { _id, name, jobTitle, image } = profile || {};

    localStorage.setItem("profile", JSON.stringify(profile));

    const {
        data: skillsData,
        isLoading: skillsLoading,
        error: skillsError,
    } = useGetSkills(_id);

    const skills = skillsData?.data ?? [];

    const {
        data: projectsData,
        isLoading: projectsLoading,
        error: projectsError,
    } = useGetProjects({ user: _id });

    const projects = projectsData?.data?.list ?? [];

    // Show loading spinner while any API is in progress
    if (profileLoading || skillsLoading || projectsLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-900">
                <Spin tip="Loading portfolio..." size="large" />
            </div>
        );
    }

    // Show error alert if any API fails
    if (profileError || skillsError || projectsError) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-900 px-6">
                <Alert
                    message="Error"
                    description={
                        profileError?.message ||
                        skillsError?.message ||
                        projectsError?.message ||
                        "Something went wrong while loading your portfolio."
                    }
                    type="error"
                    showIcon
                />
            </div>
        );
    }

    return (
        <div className="font-playfair">
            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-96 px-6 md:px-20 py-10 md:py-0 items-center">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">{name}</h1>
                    <p className="text-lg md:text-xl text-gray-400">{jobTitle}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md mt-6">
                        {skills.map(({ name, icon }: any, index: number) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-white text-sm bg-slate-700 rounded px-3 py-2 transform transition duration-300 hover:scale-105 hover:-translate-y-1 shadow-md"
                            >
                                <img
                                    crossOrigin="anonymous"
                                    src={`${imageURL}/${icon}`}
                                    alt={name}
                                    className="w-5 h-5"
                                />
                                {name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                    <img
                        crossOrigin="anonymous"
                        src={`${imageURL}/${image}`}
                        alt="Profile"
                        className="w-52 h-52 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-slate-700"
                    />
                </div>
            </section>

            {/* Quote Section */}
            <section
                className="h-[60vh] md:h-[100vh] bg-cover bg-center flex px-6 md:px-20"
                style={{ backgroundImage: `url(${tagCode})` }}
            >
                <p className="text-slate-800 text-2xl md:text-5xl mt-14 font-semibold leading-snug">
                    “Turning ideas into reality
                    <br className="hidden sm:block" />
                    one line at a time.”
                    <br />
                    <span className="text-lg md:text-2xl font-light">
                        - {name}
                    </span>
                </p>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="flex flex-col justify-center px-6 md:px-20 pt-12 pb-20 bg-slate-800 text-white"
            >
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-base md:text-lg leading-8 text-gray-300 max-w-5xl">
                    I'm a{" "}
                    <span className="text-white font-semibold">Full-Stack Developer</span>{" "}
                    currently working as a{" "}
                    <span className="text-red-400 font-semibold">
                        Senior Software Developer
                    </span>
                    , with years of experience delivering scalable and performant web and
                    mobile applications. I specialize in backend technologies like{" "}
                    <span className="text-red-400">Node.js (Express, NestJS)</span>, and
                    frontend development with{" "}
                    <span className="text-red-400">React.js (Redux, Saga, TanStack)</span>
                    .
                    <br />
                    <br />
                    My expertise includes databases like{" "}
                    <span className="text-red-400">PostgreSQL, MongoDB, and MySQL</span>,
                    real-time features using{" "}
                    <span className="text-red-400">Socket.io</span>, and secure cloud
                    solutions with{" "}
                    <span className="text-red-400">Firebase, AWS S3, and Azure Blob</span>
                    .
                    <br />
                    <br />I also have deep experience in{" "}
                    <span className="text-red-400">payment gateway integrations</span>{" "}
                    using{" "}
                    <span className="text-red-400">Stripe, PayPal, and PayTabs</span>,
                    and I take pride in writing clean, maintainable code that scales.
                </p>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="bg-white text-slate-800 px-6 md:px-20 py-16"
            >
                <h2 className="text-3xl font-bold mb-10">Key Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
                    {projects.map(
                        ({ logo, title, description, link }: any, index: number) => (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="w-full max-w-[240px]"
                            >
                                <Card
                                    hoverable
                                    className="flex flex-col justify-between items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-1 shadow-md h-[340px]"
                                >
                                    <div className="flex justify-center w-full">
                                        <img
                                            crossOrigin="anonymous"
                                            src={`${imageURL}/${logo}`}
                                            alt={title}
                                            className="w-16 h-16 object-contain mb-4 rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-400">
                                            {title}
                                        </h3>
                                        <p className="text-sm text-slate-800 mt-1">{description}</p>
                                    </div>
                                </Card>
                            </a>
                        )
                    )}
                </div>
            </section>
        </div>
    );
}