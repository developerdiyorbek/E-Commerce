"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { loginSchema } from "@/lib/validation";
import { Formik, Form } from "formik";
import FieldForm from "../_components/FieldForm";
import customAxios from "@/configs/axios.config";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const initialValues = {
  username: "emilys",
  password: "emilyspass",
};

interface FormProps {
  username: string;
  password: string;
}

function Login() {
  const router = useRouter();

  // check if user login before
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  });

  // handle Submit
  const handleSubmit = async (values: FormProps) => {
    const values1 = {
      ...values,
      expiresInMins: 1,
    };
    try {
      const login = await customAxios.post(
        "auth/login",
        JSON.stringify(values1)
      );
      localStorage.setItem("token", login.data.token);
      localStorage.setItem("refreshToken", login.data.refreshToken);
      toast.success("Successfully login");
      router.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="mt-40 container mx-auto">
      <Card className="max-w-3xl w-full mx-auto">
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
                <FieldForm name="username" placeholder="Enter your username" />
                <FieldForm name="password" placeholder="Enter your password" />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto block"
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
