"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";
import { authStore } from "@/hooks/authStore";
import customAxios from "@/configs/axios.config";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  const { setLoading, setIsAuth } = authStore();

  useEffect(() => {
    if (typeof window !== undefined) {
      const checkUser = async () => {
        setLoading(true);
        try {
          const { data } = await customAxios.post(
            "/auth/refresh",
            JSON.stringify({
              refreshToken: localStorage.getItem("refreshToken"),
              expiresInMins: 60,
            })
          );
          localStorage.setItem("token", data.token);
          setIsAuth(true);
        } catch (error) {
          console.log(error);
          localStorage.removeItem("token");
          setIsAuth(false);
        } finally {
          setLoading(false);
        }
      };
      if (localStorage.getItem("token")) {
        checkUser();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextTopLoader showSpinner={false} />
        <Toaster position="top-right" />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
