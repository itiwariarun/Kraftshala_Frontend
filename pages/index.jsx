import Head from "next/head";
import Image from "next/image";
import FlipClock from "@/components/Flip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Launch Countdown</title>
        <meta name="description" content="Launching Soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <div className="container">
        <h1>WE&lsquo;RE LAUNCHING SOON</h1>
        <FlipClock />
          <Image
            src="/images/bg-stars.svg"
            alt="Pattern stars"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority
          />
        <Footer />
      </div>
    </>
  );
}
