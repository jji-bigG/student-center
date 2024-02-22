// the default when authenticated we show this header and footer
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import React, { ReactNode, useEffect } from "react";
import NavSimple from "./simple";
import Footer from "./4_column_with_newsletter_below";
import { redirect } from "next/navigation";

function DefaultAuth({ children }: { children: ReactNode }) {
  const { data } = useSession({ required: true });

  return (
    <>
      <Head>
        <title>Cornell Roster/Schduler</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <main>
        <NavSimple />
        <div className="mx-auto mt-5 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Hello, {data?.user.name}
          </h1>
        </div>
        {children}
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default DefaultAuth;
