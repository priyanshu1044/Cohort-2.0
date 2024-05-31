import axios from "axios";

async function getUserDetails() {
  await new Promise((r)=>{setTimeout(r,2000)})
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

// async component - new thing NextJS
const Home= async () => {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>

  );
}

export default Home