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
import Covid19Country from './Covid19Country'
import ChartLineSimple from '../../charts/ChartLineSimple'
import ChartBarSimple from '../../charts/ChartBarSimple'
import {API_URLS} from '../../../constants'
class Covid19 extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: {}
    };
  }
   componentDidMount() {
    fetch(API_URLS.all)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
    
    render() {
        const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
    <>
      <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header= {items.cases}
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
          header={items.active}
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
          header={items.recovered}
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
          header={items.deaths}
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
                data: [items.cases,items.active,items.recovered,items.deaths]
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
      <Covid19Country/>
   
    </>
  )
    }
}
}

export default Covid19
