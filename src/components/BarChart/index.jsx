import { useTheme } from '@emotion/react'
import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import { tokens } from '../../theme'

export default function BarChart({ data, isDashboard }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy='country'
      theme={{
        axis: {
          legend: {
            text: {
              fill: colors.grey[100],
              fontSize: 14,
              textTransform: 'capitalize'
            }
          },
          ticks: {
            text: {
              fill: colors.grey[100]
            }
          }
        },
        legends: {
          text: {
            fill: colors.grey[100]
          }
        },
        tooltip: {
          container: {
            color: '#000'
          }
        }
      }}
      margin={{ top: isDashboard ? 20 : 50, right: isDashboard ? 50 : 130, bottom: isDashboard ? 20 : 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'fries'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? '' : 'country',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? '' : 'food',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      legends={
        !isDashboard
          ? [
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]
          : undefined
      }
      role='application'
      ariaLabel='Nivo bar chart demo'
      barAriaLabel={(e) => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
    />
  )
}
