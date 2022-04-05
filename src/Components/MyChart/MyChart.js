import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './MyChart.css';

const MyChart = () => {
    const [data, setData] = useState();

    useEffect(() =>{
     fetch('data.json')
     .then(res => res.json())
     .then(data => setData(data));
    }, []);
    

    return (
    <ResponsiveContainer width="100%" height="100%">
        <div className='ml-4 md:ml-36 mt-8 mb-8'>
        
     <div className='md:flex mb-8 md:mb-24'>
         <div>
            <p className='text-xl text-blue-600 font-semibold'>Month Wise Sell</p>

            <LineChart width={500} height={400} data={data}>
         <Line dataKey={'sell'} ></Line>
         <XAxis dataKey={'month'}></XAxis>
         <YAxis></YAxis>
         <Tooltip></Tooltip>

       </LineChart>
        </div>

        <div className='md:ml-48'>
                <p className='text-xl text-blue-600 font-semibold mb-4'>Investment VS Revenue</p>

             <BarChart
               width={500}
               height={400}
               data={data} >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
    </div>
   </div>

      <div className='flex'>
         <div>
         <p className='text-xl text-blue-600 font-semibold mb-0'>Investment VS Revenue</p>
         <PieChart className='' width={500} height={400}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />

          <Tooltip/>
          
        </PieChart>
       
         </div>


         <div className='ml-48'>
          <p className='text-xl text-blue-600 font-semibold mb-6'>Investment VS Sell & Revenue</p>

         <AreaChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
          
        </AreaChart>
         </div>
     </div>   
        
  </div>
    </ResponsiveContainer>
    );
};

export default MyChart;