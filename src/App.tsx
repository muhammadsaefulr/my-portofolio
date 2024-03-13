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
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";

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
      link: "#about",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Experience",
      link: "#experience",
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
                  <div className="flex mx-2">
                    <img src={"src/assets/e-logo.png"} width={25} height={15} />
                    <p className="font-bold text-2xl text-maincolor">PUL</p>
                    <p className="font-bold text-black dark:text-white">DEV</p>
                  </div>
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
                  <div className="rounded-full bg-gray-800 dark:bg-white p-2 w-8 h-8 duration-100 transition ease-in hover:bg-cyan-100 p-2 flex justify-center">
                    <GithubIcon
                      className="pb-1 text-white dark:text-black"
                      size={20}
                    />
                  </div>
                  <div className="rounded-full bg-gray-800 dark:bg-white p-2 w-8 h-8 duration-100 transition ease-in hover:bg-cyan-100 p-2 flex justify-center">
                    <a href="">
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
                      Im{" "}
                      <a className="font-bold text-maincolor">
                        Fullstack Web Developer
                      </a>{" "}
                      Who likes clean code architecture, I love creating simple
                      and easy-to-use interfaces and I never give up on
                      learning.{" "}
                    </p>
                  </div>
                  <div data-aos="fade-up" className="flex gap-x-2">
                    <a href="https://www.instagram.com/msaepul07_/">
                      <button className="flex p-2 px-3 rounded-md bg-maincolor text-black transition duration-100 ease-in hover:bg-gray-300">
                        Contact Me
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
                  src="src/assets/epul.jpeg"
                  alt=""
                />
              </div>
            </div>
          </section>

          <section id="about" className="w-full min-h-full flex">
            <div className="container px-12">
              <div className="text-blue">
                <p className="text-5xl font-bold text-gray-400">About me</p>
                <p className="text-2xl pt-6 text-gray-400 dark:text-white">
                  See Who I Am, What Language I Use, and My Experience
                </p>
              </div>
              <div className="flex pt-12 lg:space-x-20 xl: space-x-4">
                <div className="border-l h-[195vh]"></div>
                <div className="w-1/2">
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
                        <div className="flex text-xl pt-6">
                          <div className="border rounded-full mr-2 bg-white" />
                          <p className="font-bold text-gray-400 dark:text-white">
                            Platform Website
                          </p>
                        </div>

                        <div className="flex text-xl pt-6">
                          <div className="border rounded-full mr-2 bg-white" />
                          <p className="font-bold text-gray-400 dark:text-white">
                            ERP System
                          </p>
                        </div>

                        <div className="flex text-xl pt-6">
                          <div className="border rounded-full mr-2 bg-white" />
                          <p className="font-bold text-gray-400 dark:text-white">
                            And Other
                          </p>
                        </div>

                        <p className="pt-6">
                          Saya tertarik untuk belajar hal baru tentang
                          teknologi, jadi saya memutuskan untuk mencoba apa yang
                          saya tau
                        </p>
                        <hr className="pt-6 mt-6" />
                        <div className="">
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
                                Membuat pembuatan REST API Dengan Java Springboot
                              </li>
                            </div>
                          </div>

                          <div className="pt-8">
                            <img
                              className="w-48 py-3"
                              src="https://www.webnesia.co.id/wp-content/uploads/2018/12/logo-webnesia-web-developer.png.webp"
                            />
                            <h2 className="font-bold text-xl">
                              Article Writter & Social media management - PT Ardev digital indonesia (intern)
                            </h2>
                            <div className="pt-3 mx-3">
                              <li>
                                Mempelajari seo dan copywriting
                              </li>
                              <li>
                                Mempelajari pembuatan website dengan wordpress elementor
                              </li>
                              <li>
                                Mempelajari cara mempromosikan produk dengan sosial media
                              </li>
                              <li>Membuat artikel</li>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <p>Beberapa Stack Yang Saya pakai dan yang saya pelajari</p>
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
          <section>
          </section>
        </main>
      </div>
    </>
  );
}
export default App;
