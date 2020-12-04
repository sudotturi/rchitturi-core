import React from 'react'

import {
  CWidgetDropdown,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react';

import {
  CChartDoughnut
} from '@coreui/react-chartjs'

import ChartLineSimple from '../../charts/ChartLineSimple'
import ChartBarSimple from '../../charts/ChartBarSimple'
const Covid19 = () => {
  return (
    <>
      <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="65729273"
          text="Confirmed Cases"
          footerSlot={
            <ChartLineSimple
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label="Cases"
              labels="Cases"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="18654430"
          text="Active Cases"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Cases"
              labels="Cases"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-success"
          header="45559376"
          text="Recoverd Cases"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Cases"
              labels="Cases"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="secondary"
          header="1515467"
          text="Total Death"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Cases"
              labels="Cases"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
     
    <CCard>
        <CCardHeader>
        Covid19 Total Cases(Doughnut Chart)
        </CCardHeader>
        <CCardBody>
          <CChartDoughnut
            datasets={[
              {
                backgroundColor: [
                  '#E46651',
                  '#41B883',
                  '#00D8FF',
                  '#CED2D8'
                ],
                data: [65729273, 18654430, 45559376, 1515467]
              }
            ]}
            
          
            labels={['Confirmed Cases', 'Active Cases', 'Recoverd Cases', 'Total Death']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Covid19
