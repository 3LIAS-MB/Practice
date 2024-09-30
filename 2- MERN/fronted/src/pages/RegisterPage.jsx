// import { Input } from "../components/ui/Input";
// import { Card } from "../components/ui/Card";
// import { Button } from '../components/ui/Button'
import { Button, Card, Input, Label } from "../components/ui/index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  // 'useForm()' nos provee una forma de encontrar los inputs
  // sin manejar los estados el utiliza una referencia 'ref'
  // Hay que enlazar react-hook-form con los inputs

  // Register -> onChange. name. value
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 'data' -> {name: 'nuwa1', email: 'nuwa1234@gmail.com', password: '1234'}
  const onSubmit = handleSubmit(async (data) => {
    // const response = await fetch("http://localhost:3000/api/signup", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //   },
    // });

    // const dataSignup = await response.json();

    const res = await axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true,
    });

    console.log(res);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2x1 font-bold">Register</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            placeholder="Enter your fullname"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && <p className="text-red-500">Name is requied</p>}

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
            })}
          />

          {errors.email && <p className="text-red-500">Email is requied</p>}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />

          {errors.password && (
            <p className="text-red-500">Password is requied</p>
          )}

          <Button>Register</Button>

          <div className="flex justify-between my-4">
            <p>Already have an count?</p>
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
