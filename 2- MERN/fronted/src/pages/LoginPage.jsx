import { Card, Input, Button, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { signin } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await signin(data);
    navigate("/profile");
  });

  return (
    <div className="h-[calc(100vh-64px)] flex  justify-center items-center">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">Sign in</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <Button>Sign</Button>

          <div className="flex justify-between my-4">
            <p>Dont have an account</p>
            <Link to="/register" className="font-bold">
              Register
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
