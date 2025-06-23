import { FormInput, SubmitBtn } from "@/components";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { customFetch } from "@/utils";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ActionFunction, Form, Link, redirect } from "react-router-dom";

export const action: ActionFunction = async ({
  request
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/local/register", data);
    toast.success("Registered");
    return redirect("/login");
  } catch (error) {
    const errorMsg =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : "Resgistration Failed";
    toast.error(errorMsg);
    return null;
  }
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="text" name="username" />
            <FormInput type="email" name="email" />
            <FormInput type="password" name="password" />
            <SubmitBtn text="Register" className="w-full mt-4" />
            <p className="text-center mt-4">
              Already a member?{" "}
              <Button type="button" asChild variant="link">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
