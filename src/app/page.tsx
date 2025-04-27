import ProfileImage2 from "../assets/images/ProfileImg_1.jpg";
import Image from "next/image";

export default function HOME() {
  return (
    <>
      <main className="">
        <div className="flex flex-row items-center justify-around h-[90vh] bg-gray-100">
          <Image
            src={ProfileImage2}
            width={150}
            height={150}
            alt="Profile Image"
            className="rounded-[10px] object-cover"
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black text-4xl font-bold">Hello!</h1>
            <p className="text-black text-lg">Welcome to my portfolio!</p>
          </div>
        </div>
      </main>
    </>
  );
}
