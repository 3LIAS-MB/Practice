import { Link } from "react-router-dom";
import { Card } from "../components/ui";

function NotFound() {
  return (
    <div className="h-[calc(100vh-64px)] flex  justify-center items-center">
      <Card>
        <h1 className="text-4xl font-bold my-2">Page Not Found</h1>
        <h3>404</h3>

        <Link to="/">Go back to home</Link>
      </Card>
    </div>
  );
}

export default NotFound;
