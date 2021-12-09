import React from 'react'
// import Data from '../elevationData'
import Search from '../components/Search/Search'

export default function CampusCommunity() {
  return (
    <div>
      <Search />
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
