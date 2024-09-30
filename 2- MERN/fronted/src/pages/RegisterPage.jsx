// import { Input } from "../components/ui/Input";
// import { Card } from "../components/ui/Card";
// import { Button } from '../components/ui/Button'
import { Button, Card, Input } from "../components/ui/index";
import { useForm } from "react-hook-form";

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

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const dataSignup = await response.json()
    console.log(dataSignup)
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2x1 font-bold">Register</h3>

        <form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Enter your fullname"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && <p className="text-red-500">Name is requied</p>}

          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
            })}
          />

          {errors.email && <p className="text-red-500">Email is requied</p>}

          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />

          {errors.password && <p className="text-red-500">Password is requied</p>}

          <Button>Register</Button>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
