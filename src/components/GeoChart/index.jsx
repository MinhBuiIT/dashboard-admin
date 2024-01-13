import { useTheme } from '@emotion/react'
import { ResponsiveChoropleth } from '@nivo/geo'
import React from 'react'
import { geoFeatures } from '../../data/MockGeoFeatures.js'
import { tokens } from '../../theme.js'

export default function GeoChart({ data, isDashboard }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <ResponsiveChoropleth
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
        tooltip: {
          container: {
            color: '#000'
          }
        }
      }}
      graticuleLineWidth={0}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors={isDashboard ? 'purples' : 'blues'}
      domain={[0, 1000000]}
      unknownColor='#666666'
      label='properties.name'
      valueFormat='.2s'
      projectionScale={isDashboard ? 60 : 150}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor='#dddddd'
      borderWidth={0.5}
      borderColor='#152538'
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: colors.grey[500],
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]
          : undefined
      }
    />
  )
}
