import { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DataProps {
    data: any;
}

const MonthlyRecurringRevenueChart: FC<DataProps> = ({ data }) => {
  return (
    <LineChart width={800} height={600} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }} title='Total por Hora'>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#fe6400" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default MonthlyRecurringRevenueChart;