import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  //import.meta.env instead of process.env

  const fetchData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}`);
      const resData = await res.json();
      if(resData) {
        setData(resData);
      }
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log('data',data);

  return (
    <>
      <h1>Connecting via Vercel</h1>
      <div 
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {data && data.map(d => <span key={d.id}>{d.name}</span>)}
      </div>
    </>
  )
}

export default App;
