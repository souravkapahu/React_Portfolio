import { Card } from "antd";
import { homeConstant } from "../constant";
import { useGetProfile } from "../hooks/profile";

const {
  skills,
  projects,
  images: { myPic, tagCode },
} = homeConstant;

export default function Home(): any {
  const { data, isLoading, error }: any = useGetProfile();

  const { about } = data?.data

  return (
    <div className="font-playfair">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-96 px-6 md:px-20 py-10 md:py-0 items-center">
        <div className="flex flex-col space-y-4">
          <div className="text-white text-4xl md:text-5xl font-bold">
            Saurav Kapahu
          </div>
          <div className="text-lg md:text-xl text-gray-400">
            Full Stack Developer
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md mt-6">
            {skills.map(({ skill, icon }, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white text-sm bg-slate-700 rounded px-3 py-2 transform transition duration-300 hover:scale-105 hover:-translate-y-1 shadow-md"
              >
                <img src={icon} className="w-5 h-5" alt={skill} />
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={myPic}
            alt="Profile"
            className="w-52 h-52 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-slate-700"
          />
        </div>
      </div>

      {/* Quote Section */}
      <div
        className="h-[60vh] md:h-[100vh] bg-cover bg-center flex px-6 md:px-20"
        style={{ backgroundImage: `url(${tagCode})` }}
      >
        <p className="text-slate-800 text-2xl md:text-5xl mt-14 font-semibold leading-snug">
          “Turning ideas into reality
          <br className="hidden sm:block" />
          one line at a time.”
          <br />
          <span className="text-lg md:text-2xl font-light">
            - Saurav Kapahu
          </span>
        </p>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="flex flex-col justify-center px-6 md:px-20 pt-12 pb-20 bg-slate-800 text-white"
      >
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="text-base md:text-lg leading-8 text-gray-300 max-w-5xl">
          I'm a{" "}
          <span className="text-white font-semibold">Full-Stack Developer</span>{" "}
          currently working as a{" "}
          <span className="text-red-400 font-semibold">
            Senior Software Developer
          </span>
          , with years of experience delivering scalable and performant web and
          mobile applications. I specialize in modern backend technologies like{" "}
          <span className="text-red-400">Node.js (Express, NestJS)</span>, and
          frontend development with{" "}
          <span className="text-red-400">React.js (Redux, Saga, TanStack)</span>
          .
          <br />
          <br />
          My expertise includes working with databases such as{" "}
          <span className="text-red-400">PostgreSQL, MongoDB, and MySQL</span>,
          integrating real-time features using{" "}
          <span className="text-red-400">Socket.io</span>, and implementing
          secure cloud solutions with{" "}
          <span className="text-red-400">Firebase, AWS S3, and Azure Blob</span>
          .
          <br />
          <br />I also have deep experience in{" "}
          <span className="text-red-400">
            payment gateway integrations
          </span>{" "}
          using{" "}
          <span className="text-red-400">Stripe, PayPal, and PayTabs</span>, and
          I take pride in writing clean, maintainable code and building systems
          that scale.
        </p>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="bg-white text-slate-800 px-6 md:px-20 py-16"
      >
        <h2 className="text-3xl font-bold mb-10">Key Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
          {projects.map(({ logo, title, description, link }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={title}
              className="w-full max-w-[240px]"
            >
              <Card
                hoverable
                className="flex flex-col justify-between items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-1 shadow-md h-[340px]"
              >
                <div className="flex justify-center w-full">
                  <img
                    src={logo}
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
          ))}
        </div>
      </div>
    </div>
  );
}
