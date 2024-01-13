import { useTheme } from '@emotion/react'
import { ResponsiveLine } from '@nivo/line'
import { tokens } from '../../theme'

export default function LineChart({ data, isDashboard = false }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100]
            }
          },
          legend: {
            text: {
              fill: colors.grey[100]
            }
          },
          ticks: {
            text: {
              fill: colors.grey[100]
            }
          }
        },
        grid: {
          line: {
            strokeWidth: 0
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
      colors={isDashboard ? { scheme: 'set3' } : { scheme: 'nivo' }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
      yFormat=' >-.2f'
      curve='natural'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? '' : 'transportation',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: 5,
        legend: isDashboard ? '' : 'count',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      pointSize={10}
      enableCrosshair={false}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor', modifiers: [] }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  )
}
