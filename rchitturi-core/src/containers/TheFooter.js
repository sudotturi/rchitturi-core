import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://rahulchitturi.gq" target="_blank" rel="noopener noreferrer">ChittuRI</a>
        <span className="ml-1">&copy; 2020 Rahul Chitturi.</span>
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://rahulchitturi.gq" target="_blank" rel="noopener noreferrer">Rahul Chitturi</a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
