import ProfileImage1 from "../assets/images/ProfileImg_1.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HOME() {
  return (
    <>
      <main className="flex flex-row flex-wrap items-center justify-around h-[90vh] bg-gray-100">
        <Image
          src={ProfileImage1}
          width={200}
          height={200}
          alt="Profile Image 1"
          className="rounded-[30px] object-cover p-4"
        />
        <div className="flex flex-col items-left justify-left p-4 w-[320px]">
          <div className="text-center md:text-left p-4">
            <h1 className="text-black text-5xl font-extrabold">Welcome!</h1>
            <div className="justify-center md:justify-start">
              <p className="text-gray-700 text-lg">
                My name is{" "}
                <span className="font-bold text-blue-500">James Brown</span>,
              </p>
              <p className="text-gray-700 text-md md:text-sm">
                I&apos;m a{" "}
                <span className="font-bold text-blue-500">Designer</span> &{" "}
                <span className="font-bold text-blue-500">Developer</span>,
              </p>
            </div>
          </div>
          <p className="text-blue-500 font-bold text-md p-2 opacity-0 md:opacity-100">
            <Link
              href="/about"
              className="hover:border-b-blue-500 border-b-2 border-transparent transition duration-300 ease-in-out p-2"
            >
              Learn More
            </Link>
          </p>
          <button className="bg-black text-white text-md p-2 rounded md:hidden">
            <Link href="/about" className="p-2">
              Learn More
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}
