"use client";

import AuthContextProvider, { useAuth } from "@/context/AuthContext";
import AdminLayout from "./components/AdminLayout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { CircularProgress } from "@nextui-org/react";

export default function Layout({ children }) {
  return (
    <AuthContextProvider>
      <AdminChcking>{children}</AdminChcking>
    </AuthContextProvider>
  );
}

function AdminChcking({children}){
  const {user, isLoading} = useAuth()
  const router = useRouter()
  useEffect(() => {
    if(user && isLoading){
      router.push("/login")
    }
  } ,[user , isLoading])

  if(isLoading){
    return <div className="h-screen w-screen flex justify-center items-centeer">
      <CircularProgress />
    </div>
  }

  if(!user){
    return <div className="h-screen w-screen flex justify-center items-centeer">
      <h1>please login first</h1>
    </div>
  }

  return <AdminLayout>{children}</AdminLayout>
}
