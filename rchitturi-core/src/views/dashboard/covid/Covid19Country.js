import React from 'react'

import {
    CImg
} from '@coreui/react';

import CIcon from '@coreui/icons-react'

import {API_URLS} from '../../../constants'
class Covid19Country extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
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
    return (
    <>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th></th>
                    
                    <th >Country</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recoverd</th>
                    <th>Deceased</th>
                  </tr>
                </thead>
                <tbody>
                       {items.map(item => (
            
                  <tr key={item.countryInfo._id}>
                    <td className="text-center">
                        <CImg src={item.countryInfo.flag} height={25}   /> 
                    </td>
         
                    <td >
                        
                      {item.country}
                      
                    </td>
         
                    <td>
                      {item.cases}
                    </td>
                    <td>
                      {item.active}
                    </td>
  <td>
                      {item.recovered}
                    </td>
  <td>
                      {item.deaths}
                    </td>
  
                    </tr>
          ))}
         </tbody>
              </table>

    </>
  )
    }
}
}

export default Covid19Country
