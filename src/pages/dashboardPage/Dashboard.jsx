import React, { useContext } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { FriendContext } from "../../context/friendContextProvider";




const Dashboard = () => {
 

const { calls, texts, videos } = useContext(FriendContext);

  const data = [
    { name: "Text", value: calls.length, fill: "#7F37F5"},
    { name: "Call", value: texts.length, fill: "#244D3F"},
    { name: "Video", value: videos.length, fill: "#37A163" },
    
  ];

  return (
    <div>
      <h2 className="font-bold text-[48px] container mx-auto">Friendship Analytics</h2>
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">

      <h2 className="text-2xl text-[#647488]">By Interaction Type</h2>
      
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />

        <Legend/>
        <Tooltip/>
      </PieChart>
    </div>
    </div>
  );
};

export default Dashboard;