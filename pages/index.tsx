import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <h1 className="text-8xl font-bold hover:animate-bounce hover:cursor-pointer text-white">
        Hello world!
      </h1>
    </div>
  );
}
