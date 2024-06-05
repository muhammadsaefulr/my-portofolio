import { GithubIcon, Instagram, MoonStarIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./@/components/ui/navigation-menu";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { PiLinkedinLogoFill } from "react-icons/pi";

function App() {
  const [darkMode, setDarkmode] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  AOS.init();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkmode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (!darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    console.log(localStorage.getItem("theme"), darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dataMenubar = [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Project",
      link: "#project",
    },
    {
      title: "Experience",
      link: "#experience",
    },
  ];

  const enjoyCreating = [
    {
      title: "Landing Page",
    },
    {
      title: "POS Website Platform",
    },
    {
      title: "And Other",
    },
  ];

  const projectsDetails = [
    {
      heading: "NimeStream",
      subHeading: "Platform nonton via website",
      description:
        "Platform streaming dan download anime sederhana dengan lingkungan runtime bun",
      projectPreview: "/project/ss-nimestream.jpeg",
      isAvailableOnGithub: true,
      githubLink: "https://github.com/muhammadsaefulr/NimeStream",
    },
    {
      heading: "Gopotek",
      subHeading: "Platform website manajemen apotek",
      description:
        "Platform website manajemen apotek sederhana yang dibuat untuk memdahkan pengguna memantau stok dan penjualan produk",
      projectPreview: "/project/ss-gopotek.png",
      isAvailableOnGithub: true,
      githubLink: "https://github.com/muhammadsaefulr/ApotekNextJS",
    },
    {
      heading: "Saksiummat",
      subHeading: "Platform Website Manajemen Data",
      description:
        "Platform Website yang digunakan untuk melihat data saksi partai ummat",
      projectPreview: "/project/ss-saksiummat.png",
      isAvailableOnGithub: false,
      githubLink: "",
    },
  ];

  return (
    <>
      <div className="flex flex-col ">
        <div
          className="bg-cube-strip bg-repeat absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
          style={{ maskImage: "linear-gradient(black, transparent)" }}
        />
        <header className="relative z-10">
          <nav
            className={`py-4 px-8 fixed top-0 left-0 w-full p-4 transition duration-300 ${
              isScrolled ? "bg-opacity-75 backdrop-blur-lg" : "bg-transparent"
            }`}
          >
            <div className="flex justify-between">
              <div className="">
                <div className="flex space-x-2">
                  <a href="/">
                    <div className="flex mx-2">
                      <img src={"/e-logo.png"} width={25} height={10} />
                      <p className="font-bold text-2xl text-maincolor">PUL</p>
                      <p className="font-bold text-black dark:text-white">
                        DEV
                      </p>
                    </div>
                  </a>
                  <ul className="lg:flex space-x-3 justify-between mx-3 mt-1 leading-tighter tracking-tighter text-white text-md sm: hidden">
                    {dataMenubar.map((data) => (
                      <a key={data.title} href={data.link}>
                        <li className="font-medium text-black dark:text-blue-400 hover:text-blue-200">
                          {data.title}
                        </li>
                      </a>
                    ))}
                  </ul>
                  <div className="lg:hidden sm:flex">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="p-3 space-x-3 justify-between mx-3 mt-1 leading-tighter tracking-tighter text-white text-md">
                              {dataMenubar.map((data) => (
                                <a key={data.title} href={data.link}>
                                  <li className="font-medium text-black dark:text-blue-400 hover:text-blue-200">
                                    {data.title}
                                  </li>
                                </a>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                </div>
              </div>
              <div className="flex justify-around space-x-3">
                <div className="">
                  <div
                    className="flex relative w-16 h-8 items-center dark:bg-gray-800 bg-teal-900 cursor-pointer transition duration-300 delay-100 ease-in rounded-full p-1"
                    onClick={() => setDarkmode(!darkMode)}
                  >
                    <MoonStarIcon className="text-white" size={18} />
                    <div
                      className="absolute bg-white dark:bg-gray-700 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
                      style={darkMode ? { left: "2px" } : { right: "2px" }}
                    ></div>
                    <SunIcon className="ml-auto text-yellow-500" size={18} />
                  </div>
                </div>
                <div className="lg:flex space-x-2 md: hidden">
                  <div className="rounded-full cursor-pointer bg-gray-800 dark:bg-white p-2 w-8 h-8 duration-100 transition ease-in hover:bg-cyan-100 p-2 flex justify-center">
                    <a href="https://github.com/muhammadsaefulr/">
                      <GithubIcon
                        className="pb-1 text-white dark:text-black"
                        size={20}
                      />
                    </a>
                  </div>
                  <div className="rounded-full cursor-pointer bg-gray-800 dark:bg-white p-2 w-8 h-8 duration-100 transition ease-in hover:bg-cyan-100 p-2 flex justify-center">
                    <a href="https://www.instagram.com/msaepul07_/">
                      <Instagram
                        className="pb-1 text-white dark:text-black"
                        size={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="lg:py-12 xl: py-1" />
        <main className="flex-1">
          <section className="w-full min-h-screen flex items-center justify-center">
            {" "}
            <div className="relative container flex justify-around lg:mx-8 xl:mx-2">
              <div className="container px-4 md:px-6">
                <div className="space-y-3">
                  <div
                    data-aos="fade-right"
                    className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                  >
                    Hi Everyone, My Name
                  </div>
                  <h1
                    data-aos="fade-right"
                    className="text-4xl font-bold tracking-tighter sm:text-3xl text-gray-600 dark:text-white md:text-6xl/none"
                  >
                    Muhammad Saeful Rahmat
                  </h1>
                  <div data-aos="fade-right" className="lg:w-1/2 sm: w-full">
                    <p className="text-gray-500 md:text-xl dark:text-gray-400 w-15">
                      Im want to be come{" "}
                      <a className="font-bold text-maincolor">
                        Fullstack Web Developer
                      </a>{" "}
                      Who likes clean code architecture, I love creating simple
                      and easy-to-use interfaces and I never give up on
                      learning.{" "}
                    </p>
                  </div>
                  <div data-aos="fade-up" className="flex gap-x-2">
                    <a href="https://www.linkedin.com/in/muhammadsaeful/">
                      <button className="flex p-2 px-3 rounded-md bg-maincolor text-black transition duration-100 ease-in hover:bg-gray-300">
                        Contact Me{" "}
                        <PiLinkedinLogoFill className="mx-2" size={24} />
                      </button>
                    </a>
                  </div>
                  <div className="py-12">
                    <p className="text-stone-500 pb-2 font-medium">
                      Currently using:{" "}
                    </p>
                    <div className="flex gap-x-4">
                      <SiTailwindcss
                        className="text-gray transition duration-100 ease hover:text-blue-400"
                        style={{ fontSize: "24px" }}
                      />
                      <FaReact
                        className="text-gray transition duration-100 ease hover:text-blue-600"
                        style={{ fontSize: "24px" }}
                      />
                      <TbBrandNextjs
                        className="text-gray-200 transition duration-100 ease hover:bg-white text-gray-800 rounded-full"
                        style={{ fontSize: "24px" }}
                      />
                      <SiTypescript
                        className="text-gray transition duration-100 ease hover:text-blue-600"
                        style={{ fontSize: "24px" }}
                      />
                      <FaGolang
                        className="text-gray transition duration-100 ease hover:text-blue-400"
                        style={{ fontSize: "26px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 h-96 mr-4 lg:block sm: hidden">
                <img
                  className="p-2 animate-wave-image mx-auto rounded-full border aspect-square object-cover object-center sm:w-full"
                  src="/epul.jpeg"
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="w-full min-h-full flex pb-12">
            <div className="container px-12">
              <div id="about" className="text-blue">
                <p className="text-5xl font-bold text-gray-400">About me</p>
                <p className="text-2xl pt-6 text-gray-400 dark:text-white">
                  See Who I Am, What Language I Use, and My Experience
                </p>
              </div>
              <div className="lg:flex pt-12 lg:space-x-20 sm:inline-block">
                <div className="lg:border-l lg:h-[195vh] sm:hidden"></div>
                <div className="lg:w-1/2 sm:w-full">
                  <div className="text-gray-400 ">
                    <div className="">
                      <h2 className="">
                        Hello, My name muhammad saeful rahmat im from Bekasi,
                        Indonesia, I've been tried programming{" "}
                        <a className="font-bold">2 Years A Go</a> And I try many
                        programming languages like Javascript, Typescript, GO,
                        C++ And Other
                      </h2>
                      <h2 className="pt-4">
                        After trying out a few things I mentioned earlier, I've
                        finally decided to become a{" "}
                        <a className="font-bold">Fullstack Web Developer.</a>
                      </h2>
                      <hr className="pt-6 mt-6" />
                      <h2 className="font-bold text-2xl">
                        Fullstack Web Developer
                      </h2>
                      <p className="pt-6">
                        I have a passion for creating a project that is
                        minimalist, simple, and user-friendly with my abilities,
                        so it can be useful to the general public.
                      </p>
                      <p className="pt-6">
                        I really enjoy creating websites like :
                      </p>
                      <div className="block">
                        {enjoyCreating.map((data) => (
                          <div className="flex text-xl pt-6">
                            <div className="border rounded-full mr-2 bg-white" />
                            <p className="font-bold text-gray-400 dark:text-white">
                              {data.title}
                            </p>
                          </div>
                        ))}

                        <p className="pt-6">
                          Saya tertarik untuk belajar hal baru tentang
                          teknologi, jadi saya memutuskan untuk mencoba apa yang
                          saya tau
                        </p>
                        <hr className="pt-6 mt-6" />
                        <div id="experience" className="">
                          <h2 className="font-bold text-2xl">
                            Pengalaman Kerja
                          </h2>

                          <div className="pt-8">
                            <img
                              className="w-48 py-3"
                              src="https://loginusa.id/assets/logo/logo.png"
                            />
                            <h2 className="font-bold text-xl">
                              Front End Developer - CV Agriva Teknologi
                              Nusantara (Intern)
                            </h2>
                            <div className="pt-3 mx-3">
                              <li>
                                Mempelajari Ekosistem ReactJS Dan REST API
                              </li>
                              <li>
                                Membuat Website Untuk Klien Dengan ReactJS
                              </li>
                              <li>
                                Mempelajari pembuatan REST API Dengan Java
                                Springboot
                              </li>
                            </div>
                          </div>

                          <div className="pt-8">
                            <img
                              className="w-48 py-3"
                              src="https://www.webnesia.co.id/wp-content/uploads/2018/12/logo-webnesia-web-developer.png.webp"
                            />
                            <h2 className="font-bold text-xl">
                              Article Writter & Social media management - PT
                              Ardev digital indonesia (intern)
                            </h2>
                            <div className="pt-3 mx-3">
                              <li>Mempelajari seo dan copywriting</li>
                              <li>
                                Mempelajari pembuatan website dengan wordpress
                                elementor
                              </li>
                              <li>
                                Mempelajari cara mempromosikan produk dengan
                                sosial media
                              </li>
                              <li>Membuat artikel</li>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 sm:w-full pt-6" id="#skills">
                  <p className="">
                    Beberapa Stack Yang Saya pakai dan yang saya pelajari
                  </p>
                  <div className="pt-6">
                    <h2 className="font-bold text-2xl">Javascript</h2>{" "}
                    <p className="text-gray-400 pt-4">
                      Saya Suka menggunakan Javascript karena bahasa nya mudah
                      dipelajari dan sederhana
                    </p>
                  </div>
                  <div className="pt-8">
                    <h2 className="font-bold text-2xl">ReactJS</h2>{" "}
                    <p className="text-gray-400 pt-4">
                      Saya Memulai React JS Sebagai library Javascript yang
                      pertama kali saya coba, dan saya menyukainya :D
                    </p>
                  </div>
                  <div className="pt-8">
                    <h2 className="font-bold text-2xl">NextJS</h2>{" "}
                    <p className="text-gray-400 pt-4">
                      Framework yang memudahkan saya membuat website fullstack
                      dalam satu waktu sehingga menghemat waktu development
                    </p>
                  </div>
                  <div className="pt-8">
                    <h2 className="font-bold text-2xl">TailwindCSS</h2>{" "}
                    <p className="text-gray-400 pt-4">
                      Berkat TailwindCSS Membuat syntax css lebih sederhana dan
                      mudah digunakan.
                    </p>
                  </div>
                  <div className="pt-8">
                    <h2 className="font-bold text-2xl">Typescript</h2>{" "}
                    <p className="text-gray-400 pt-4">
                      Typescript memudahkan pengembangan website saya karena
                      dengan typescript saya menjadi lebih mudah untuk
                      mengidentifikasi bug ketimbang dengan javascript.
                    </p>
                  </div>
                  <div className="pt-8">
                    <h2 className="font-bold text-2xl">Golang - GIN</h2>{" "}
                    <p className="text-gray-400 pt-4">
                      Bahasa dan library yang biasa saya gunakan untuk
                      mengembangkan bagian backend :D
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="project" className="pb-5 pt-12">
            <div className="container px-12">
              <div id="about" className="text-blue">
                <p className="text-5xl font-bold text-gray-400">My Projects</p>
                <p className="text-2xl pt-6 text-gray-400 dark:text-white">
                  See my latest related project
                </p>
              </div>
              <div className="py-12">
                {projectsDetails.map((data) => (
                  <a
                    className={
                      data.isAvailableOnGithub === true
                        ? ""
                        : "pointer-events-none"
                    }
                    href={data.githubLink}
                  >
                    <div className="lg:flex sm:block justify-between py-6">
                      <div className="lg:w-2/3 sm: w-full">
                        <div className="mb-12">
                          <p className="font-bold text-2xl text-maincolor">
                            {data.heading}
                          </p>
                          <div className="">
                            <h1 className="font-bold text-3xl w-25 py-3">
                              {data.subHeading}
                            </h1>
                            <p className="text-md lg:w-3/4 sm: w-full">
                              {data.description}
                            </p>
                          </div>
                        </div>

                        <div
                          className="lg:flex w-[80%] transition duration-200 ease-in border border-4 hover:border-2 rounded-lg p-2 py-3 gap-x-3 sm: hidden"
                          style={
                            data.isAvailableOnGithub === true
                              ? { borderColor: "#0079f2" }
                              : { borderColor: "gray" }
                          }
                        >
                          <FaGithub className="px-3" size={100} />
                          <div className="block p-2 pt-5">
                            <p
                              className="font-bold text-md"
                              style={
                                data.isAvailableOnGithub === true
                                  ? { color: "#00FCCE" }
                                  : {}
                              }
                            >
                              {data.isAvailableOnGithub === true
                                ? "Available On Github !"
                                : "Not Available On Github"}
                            </p>
                            <p className="text-lg">
                              {data.isAvailableOnGithub === true
                                ? "This Project Is Available On Github"
                                : "This Project Is Not Available On Github"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-2/3 block rounded-lg dark:bg-slate-800 light: bg-gray-400 sm: w-full">
                        <div className="flex justify-start gap-x-3 p-2 py-3">
                          <div className="rounded-full p-2 hover:bg-red-300 dark:hover:bg-red-600 light:hover:bg-red-300 dark:bg-gray-400 light:bg-red-300 lg: bg-red-400 sm:bg-red-300" />
                          <div className="rounded-full p-2 hover:bg-yellow-300 dark:hover:bg-yellow-600 light:hover:bg-yellow-300 dark:bg-gray-400 light:bg-yellow-300 lg: bg-yellow-400 sm:bg-yellow-300" />
                          <div className="rounded-full p-2 hover:bg-green-300 dark:hover:bg-green-600 light:hover:bg-green-300 dark:bg-gray-400 light:bg-green-300 lg: bg-green-400 sm:bg-green-300" />
                        </div>
                        <div className="bg-white flex justify-center items-center w-full">
                          <img
                            className="w-full h-full object-cover object-top max-h-96"
                            src={data.projectPreview}
                            alt="Project Preview"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
export default App;
