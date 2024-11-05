import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [
    { name: 'Lap A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Phn B', uv: 300, pv: 2200, amt: 2100 },
    { name: 'Wch C', uv: 500, pv: 2600, amt: 2800 },
    { name: 'Lap D', uv: 200, pv: 2000, amt: 1900 },
    { name: 'Phn E', uv: 450, pv: 2700, amt: 2600 },
    { name: 'Wch F', uv: 320, pv: 2300, amt: 2400 },
    { name: 'Lap G', uv: 380, pv: 2500, amt: 2500 }
  ];
  
  

const Statistic = () => {
    return (
        <div className='flex mt-20 flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold'>Statistic</h1>
            <BarChart width={700} height={400} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
</div>
    );
};

export default Statistic;