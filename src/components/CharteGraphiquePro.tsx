import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSalaryData } from './hooks/useSalaryData';


export const SalaryEvolutionChart = () => {
  const { data } = useSalaryData()
  return (
    <Box sx={{ 
      width: '100%', 
      height: 300,
      p: 3,
      mt: 4,
      border: '1px solid #e0e0e0',
      borderRadius: 2,
      boxShadow: 1
    }}>
      <Typography variant="h6" gutterBottom>
        Évolution du salaire moyen en 2024
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Données mensuelles en euros bruts
      </Typography>
      
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis 
            dataKey="mois" 
            tick={{ fill: '#616161' }}
            axisLine={{ stroke: '#bdbdbd' }}
          />
          <YAxis 
            domain={[2800, 3200]}
            tick={{ fill: '#616161' }}
            axisLine={{ stroke: '#bdbdbd' }}
            tickFormatter={(value: string) => `${value}€`}
          />
          <Tooltip 
            formatter={(value: string) => [`${value}€`, 'Salaire moyen']}
            labelFormatter={(label: string) => `Mois : ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="salaire" 
            stroke="#1976d2" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, stroke: '#1976d2', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
