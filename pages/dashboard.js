import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePgae = async () => {
      const session = await getSession();
      console.log(session);
      if(session === null){
        signIn()
      }else{
        setLoading(false);
      }
    }
    securePgae()
}, [loading]);
if(loading){
    return <h2>...Loading</h2>
}
  return <h1>Dashboard</h1>;
}

export default Dashboard;
