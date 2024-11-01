// import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// Sample data for pie chart
const data = [
  { label: 'Cash Customer', value: 30 },
  { label: 'Credit Customer', value: 70 },
];

const colors = ['hsl(210, 20%, 20%)', 'hsl(340, 20%, 80%)'];

const PieCenterLabel = ({ primaryText }: { primaryText: string }) => {
  return (
    <text
      x="35%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: '1.5rem', fontWeight: 'bold', fill: colors[0] }}
    >
      {primaryText}
    </text>
  );
};

export default function CustomerTypeChart() {
  return (
    <Card
      variant="outlined"
      className="flex items-center gap-5 p-5"
    >
      <Box className="flex items-center relative">
        <PieChart
          colors={colors}
          series={[
            {
              data,
              innerRadius: 50, // Inner radius to make room for the center label
              outerRadius: 80,
              paddingAngle: 10,
            },
          ]}
          width={280}
          height={280}
          slotProps={{
            legend: { hidden: true },
          }}
        >
          {/* Center label for displaying the total percentage */}
          <PieCenterLabel primaryText="100%" />
        </PieChart>
      </Box>
      <CardContent>
        {data.map((item, index) => (
          <Stack key={index} direction="row" alignItems="center" gap={1}>
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: colors[index],
              }}
            />
            <Typography variant="body2" sx={{ fontWeight: '500', color: 'text.primary' }}>
              {item.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', marginLeft: 'auto' }}>
              {item.value}%
            </Typography>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
