import React from 'react'

import {API_URLS} from '../../../constants'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CImg
} from '@coreui/react';



const fields = [" ","Country","Confirmed","Active","Recoverd","Deceased"]
const data = []
class Covid19Country extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  handleCovidData(items){
    items.map(item => ( 
        data.push({"Flag":item.countryInfo.flag 
    ,"Country":item.country ,"Confirmed": item.cases ,
                    "Active":item.active,
                    "Recoverd":item.recovered,
                    "Deceased":   item.deaths})
    ))
            
  }
   componentDidMount() {
    fetch(API_URLS.states)
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
        this.handleCovidData(items)
    return (
    <>
        <CCol >
          <CCard>
            <CCardHeader>
              Covid 19 Cases By Country
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={data}
              fields={fields}
              itemsPerPage={15}
              pagination
              scopedSlots = {{
                ' ':
                  (item)=>(
                    <td>
                      <CImg src={item.Flag} height={25}   />
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      
    </>
  )
    }
}
}

export default Covid19Country
