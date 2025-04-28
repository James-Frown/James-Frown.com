import ProfileImage2 from "../assets/images/ProfileImg_1.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HOME() {
  return (
    <>
      <main className="flex flex-row flex-wrap items-center justify-around h-[90vh] bg-gray-100">
        <Image
          src={ProfileImage2}
          width={150}
          height={150}
          alt="Profile Image"
          className="rounded-[10px] object-cover p-4"
        />
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-black text-4xl font-bold">Hello!</h1>
          <p className="text-black text-lg">Welcome to my portfolio!</p>
          <p className="text-black text-md p-2 hover:text-blue-500">
            <Link
              href="/about"
              className="hover:border-b-blue-500 border-b-2 border-transparent transition duration-300 ease-in-out p-2"
            >
              Learn More
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
