import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <AppCacheProvider {...pageProps}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppCacheProvider>
  );
};

export default api.withTRPC(MyApp);
