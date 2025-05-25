"use client";


import { useAuth } from "@/context/authContext";
import { auth } from "@/lib/firestore/firebase";
import { Button } from "@heroui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);
  return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:p-20 p-10 min-h-screen ">
      <section className="flex flex-col gap-3">
        <div className="flex justify-center items-center">
          <img src="/logo.png" alt="logo" className="h-20" />
        </div>
        <div className=" flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
          <h1 className="font-bold text-xl">Login with Email </h1>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="user-email"
              id="user-email"
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <input
              type="password"
              placeholder="Enter Your password"
              name="user-password"
              id="user-pasword"
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <Button color="primary">Login</Button>
          </form>

          <div className="flex justify-between items-center">
            <Link href={`/signup`}>
              <button className="font-semibold text-blue-700 text-sm hover:underline capitalize">
                new? Create an Account
              </button>
            </Link>
            <Link href={`/forgot-password`}>
              <button className="font-semibold text-blue-700 text-sm hover:underline capitalize ">
                Forgot Password?
              </button>
            </Link>
          </div>
          <hr />
          <SignInWithGoogleComponent />
        </div>
      </section>
    </main>
  );
}

function SignInWithGoogleComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    try {
        const user = await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
          toast.error(error.message);
        }
        setIsLoading(false);
  };
  return <Button isLoading={isLoading} isDisabled={isLoading} onClick={handleLogin}>Sign in with Google</Button>;
}
