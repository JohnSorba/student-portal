import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../main";
function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Code to run on component mount
    const fetchAPI = async () => {
      const response = await axios.get(`${baseURL}`);
      const data = response.data;
      setData(data.message);
      console.log(data);
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <div>
        <div>Hello, React!</div>
        <p>{data && data}</p>
      </div>
    </div>
  );
}

export default HomePage;
