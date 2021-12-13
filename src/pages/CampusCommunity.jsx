import React from 'react'
// import Data from '../elevationData'
// import Search from '../components/Search/Search'
import Accordion from '../components/Accordion/Accordion'
import Results from '../components/Results/Results'

export default function CampusCommunity() {
  return (
    <div>
      {/* <Search /> */}
      <div className="container">
        <div className="row">
          <Accordion />
           
          <Results />
        </div>
      </div>
      
     
    </div>
  )
}


// export default function CampusCommunity() {

//   const styleInfo = {
//       paddingRight: '10px'
//     }

//   const items = Data.map(data=>{
//     return (
    
//         <div>
//           <ul>
//             <li style={{position: 'relative', left: '10vh'}}>
//               <span style={styleInfo}>{data.campusName}</span>
//               <span style={styleInfo}>{data.description}</span>
//             </li>
//           </ul>

//         </div>
//       )

//   })

//   return items;
// }
