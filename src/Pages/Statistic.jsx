import React from 'react';
import { Helmet } from 'react-helmet';
import {
  ComposedChart, Bar, Area, Scatter, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from 'recharts';

const data = [
    { name: 'Lap A', price: 1200, rating: 4.5 },
    { name: 'Phn B', price: 999, rating: 4.8 },
    { name: 'Wch C', price: 399, rating: 4.2 },
    { name: 'Lap D', price: 1500, rating: 4.7 },
    { name: 'Phn E', price: 750, rating: 4.3 },
    { name: 'Wch F', price: 299, rating: 4.6 },
    { name: 'Lap G', price: 850, rating: 4.1 }
];

const Statistic = () => {
    return (
        <div className='flex mt-24 flex-col items-center justify-center'>
            <Helmet>
                <title>Gadget Heaven - Statistic</title>
                <meta name="description" content="Welcome to Gadget Heaven, your one-stop shop for all the latest gadgets." />
            </Helmet>
            <h1 className='text-3xl font-bold mb-5'>Price vs Product Statistics</h1>
            <ComposedChart width={800} height={400} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: 'Rating', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                
                {/* Area for Price */}
                <Area yAxisId="left" type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" fillOpacity={0.3} />

                {/* Bar for Price */}
                <Bar yAxisId="left" dataKey="price" barSize={30} fill="#413ea0" />

                {/* Scatter for Rating */}
                <Scatter yAxisId="right" dataKey="rating" fill="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Statistic;
