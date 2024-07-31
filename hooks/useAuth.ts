"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { BASE_URL } from "@/constants";
import { DecodedToken } from "@/types";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const checkTokenExpiration = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const { exp } = jwtDecode<DecodedToken>(token);
      const now = Date.now();

      if (now >= exp * 1000) {
        try {
          const response = await axios.post(`${BASE_URL}/auth/refresh`, {
            refreshToken: localStorage.getItem("refreshToken"),
            expiresInMins: 30,
          });
          localStorage.setItem("token", response.data.token);
          window.location.reload();
        } catch (error) {
          console.error("Refresh token olishda xatolik:", error);
          router.push("/login");
        }
      }
    };

    checkTokenExpiration();
  }, [router]);
};

export default useAuth;
