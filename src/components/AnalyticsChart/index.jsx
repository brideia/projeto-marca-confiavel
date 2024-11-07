import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { ChartContainer, ChartHeader, TimeframeSelector } from './styles';

export const AnalyticsChart = ({ title, data, dataKey, timeframes }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  return (
    <ChartContainer>
      <ChartHeader>
        <h3>{title}</h3>
        <TimeframeSelector>
          {timeframes.map(timeframe => (
            <button
              key={timeframe.value}
              className={selectedTimeframe === timeframe.value ? 'active' : ''}
              onClick={() => setSelectedTimeframe(timeframe.value)}
            >
              {timeframe.label}
            </button>
          ))}
        </TimeframeSelector>
      </ChartHeader>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis 
            dataKey="name" 
            stroke="#666"
            tick={{ fill: '#999' }}
          />
          <YAxis 
            stroke="#666"
            tick={{ fill: '#999' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1A1A1A',
              border: '1px solid #333'
            }}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke="#00A878" 
            strokeWidth={2}
            dot={{ fill: '#00A878' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
