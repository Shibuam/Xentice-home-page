import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
let job=[{
  name:'worker',
  url:'jobs/worker.ab3bc8e0.png'

},
{
  name:'Engineer',
  url:'jobs/engineer.877f1aa6.png'
},
{
  name:'Finance',
  url:'jobs/finance.15ca8db9 (1).png'
},
{
  name:'Forest',
  url:'jobs/forest.102fd61a.png'
},
{
  name:'Lawyer',
  url:'jobs/lawyer.f762a229 (2).png'
},{
  name:'Mentor',
  url:'jobs/mentor.46f9b157.png'
},
{
  name:'Women',
  url:'jobs/woman.4c9f4456.png'
},
{
  name:'Admin',
  url:'jobs/admin.e6b7a902.png'
},
{
  name:'Architect',
  url:'jobs/Architect.png'
}
]


const Jobs = () => {
  return (
    <div className='jobs'>
     { job.map((ele)=>
     <>
     <Box className='box' >
 <img src={ele.url} className='jobs-image'/>
 <Typography className='jobs-title'>{ele.name}</Typography>
 </Box>
     </>
     
     )}
        
         
        
  
 



   
    </div>
  )
}

export default Jobs
