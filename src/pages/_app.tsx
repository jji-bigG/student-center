import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import PrelineScript from "~/components/PrelineScript";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <PrelineScript />
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
