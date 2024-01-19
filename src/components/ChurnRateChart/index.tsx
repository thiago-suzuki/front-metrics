import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface DataProps {
    data: any;
}

const ChurnRateChart: FC<DataProps> = ({ data }) => {
  return (
    <BarChart width={800} height={600} data={data} title='Total por Hora'>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#fe6400" />
    </BarChart>
  );
};

export default ChurnRateChart;
