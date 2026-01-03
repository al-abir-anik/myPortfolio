import CopyEmail from "./CopyEmail";

const About = () => {
  const myEmail = "alabiranik56@gmail.com";
  const myResume =
    "https://drive.google.com/file/d/1LV5e8SfJKJKcwObT6zOKIK7i5UmHbuiH/view";

  return (
    <div className="w-full flex flex-col-reverse lg:flex-col gap-8">
      {/* about */}
      <div>
        <p className="mb-4">
          <span className="text-3xl">I’</span>m a developer passionate about
          crafting accessible, pixel-perfect user interfaces. My favorite work
          lies at the intersection of design and development, creating
          experiences that not only look great but are meticulously built for
          performance and usability.
        </p>
        <p className="mb-4">
          Currently, I’m persuing my Bsc in CSE from Uttara University. And I’m
          looking forward to join a professional team where I can apply my
          skills, contribute to bigger projects and learn from real-world
          challenges.
        </p>

        {/* <p className="mb-4">
        In the past, I've had the opportunity to develop software across a
        variety of settings — from{" "}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://us.mullenlowe.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="advertising agency (opens in a new tab)"
        >
          advertising agencies
        </a>
        and to and
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://upstatement.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="digital product studio (opens in a new tab)"
        >
          small digital product studios
        </a>
        . Additionally, I also released a{" "}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.newline.co/courses/build-a-spotify-connected-app"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="online video course (opens in a new tab)"
        >
          comprehensive video course
        </a>{" "}
        a few years ago, guiding learners through building a web app with the
        Spotify API.
      </p> */}

        <p>
          My goal is to grow further in this field and continuously challenge
          myself to become better than yesterday.
          {/* <span className="group/korok inline-flex lg:font-medium lg:text-slate-200">
          <span className="sr-only">Korok seeds</span>
          <span
            className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
            aria-hidden="true"
          >
            K
          </span>
          <span
            className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
            aria-hidden="true"
          >
            r
          </span>
          <span
            className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
            aria-hidden="true"
          >
            k
          </span>
          <span
            className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
            aria-hidden="true"
          >
            &nbsp;
          </span>
          <span
            className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            s
          </span>
          <span
            className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
            aria-hidden="true"
          >
            d
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            s
          </span>
        </span> */}
          .
        </p>
      </div>

      {/*    buttons    */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <CopyEmail value={myEmail} />
        <a
          href={myResume}
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit px-7 py-4 text-xs font-medium text-white flex items-center gap-2 border border-white bg-secondary-gradient rounded-full hover:underline"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
