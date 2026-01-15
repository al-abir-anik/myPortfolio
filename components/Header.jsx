"use client";
import { socialLinks } from "@/data/data";

const Header = () => {
  const menuList = ["about", "projects", "skills"];

  return (
    <header className="w-full lg:max-w-130 lg:h-screen py-3 lg:py-24 flex flex-col lg:justify-between gap-2 lg:sticky lg:top-0">
      <div className="w-full">
        {/* Al Abir Anik */}
        <div className="text-center lg:text-left">
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-5xl md:text-6xl font-medium cursor-pointer"
          >
            Al Abir Anik
          </h1>
          <h2 className="mt-3 text-2xl font-medium">Front End Developer</h2>
          <p className="lg:w-95 mt-4 text-lg">
            I build accessible, pixel-perfect digital experiences for the web .
          </p>
        </div>

        {/* navbar */}
        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {menuList.map((menu) => (
              <li key={menu}>
                <a
                  href={`#${menu}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(menu);
                    if (el) {
                      const y =
                        el.getBoundingClientRect().top + window.scrollY - 96;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="group flex items-center py-3 active"
                >
                  <span className="mr-4 h-px w-8 bg-zinc800 transition-all group-hover:w-16 group-hover:bg-blue group-focus-visible:w-16 group-focus-visible:bg-blue motion-reduce:transition-none"></span>
                  <span className="text-[13px] font-semibold uppercase tracking-wider text-zinc800 group-hover:text-blue group-focus-visible:text-blue">
                    {menu}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* social links */}
      <ul
        className="pt-1 flex items-center justify-center lg:justify-start gap-5"
        aria-label="Social media"
      >
        {socialLinks.map((s) => (
          <li key={s.platform}>
            <a
              className={`${s.hoverColor} block p-2.5 shrink-0 text-2xl text-zinc500 bg-white rounded-full hover:scale-125 transition-transform ease-in-out duration-300`}
              href={s.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${s.platform} opens in a new tab`}
              title={s.platform}
            >
              {s.logo}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
