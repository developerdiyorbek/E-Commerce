"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { loginSchema } from "@/lib/validation";
import { Formik, Form } from "formik";
import FieldForm from "../../../components/shared/FieldForm";
import customAxios from "@/configs/axios.config";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authStore } from "@/hooks/authStore";

const initialValues = {
  username: "noahh",
  password: "noahhpass",
};

interface FormProps {
  username: string;
  password: string;
}

function Login() {
  const router = useRouter();
  const { setIsAuth, setLoading, isAuth } = authStore();

  // handle Submit
  const handleSubmit = async (values: FormProps) => {
    setLoading(true);
    try {
      const login = await customAxios.post(
        "auth/login",
        JSON.stringify({
          ...values,
          expiresInMins: 1,
        })
      );
      localStorage.setItem("token", login.data.token);
      localStorage.setItem("refreshToken", login.data.refreshToken);
      setIsAuth(true);
      toast.success("Successfully login");
      router.push("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  };

  // check if user is already authenticated
  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <section className="mt-40 container mx-auto" aria-labelledby="login page">
      <Card className="max-w-3xl w-full mx-auto" aria-label="Login form">
        <CardHeader>
          <h1 className="mx-auto text-2xl max-md:text-xl">Login</h1>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <FieldForm
                  name="username"
                  placeholder="Enter your username"
                  aria-required="true"
                />
                <FieldForm
                  name="password"
                  placeholder="Enter your password"
                  aria-required="true"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto block"
                  aria-label="Submit login form"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </section>
  );
}

export default Login;
