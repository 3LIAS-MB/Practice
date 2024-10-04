import { useAuth } from "../context/AuthContex";

function HomePage() {
  const data = useAuth()
  // console.log(data)
  
  return (
    <div>HomePage</div>
  )
}

export default HomePage;
