import { useAuth } from "../context/AuthContex";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();
  // console.log(data)

  return (
    <Card>
      <h1 className="text-3xl font-bold my-4">HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere
        molestias ducimus ab cupiditate. Culpa veniam facilis, ex eveniet hic
        sit, nesciunt quia nostrum natus dolorem, accusamus temporibus. Maiores,
        veniam?
      </p>
    </Card>
  );
}

export default HomePage;
