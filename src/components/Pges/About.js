import React , {useState , useEffect} from 'react'

/**
* @author
* @function About
**/

function About () {

  const [details , setDetails] = useState([]);

  // function getRandomColor() {
  //   var letters = '0123456789ABCDEF'.split('');
  //   var color = '#';
  //   for (var i = 0; i < 6; i++ ) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  //       }



  useEffect(()=> {
    fetch('http://localhost:3001/getAllDetails').
    then(response => response.json())
    .then((data) => {
        //console.log(data);
        setDetails(data);
        console.log(details);  
    })
  
  }, [])
  return(
    <div class="pa4">
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th class="fw6 bb b--black-20 tl pb3 pr3 ">Name</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 ">Email</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 ">Branch</th>
          
        </tr>
      </thead>
      <tbody class="lh-copy">
      {details.map((item,index)=> {
        return(
          <tr  key={index}>
            <td  class="pv3 pr3 bb b--black-20" >{item.name}</td>
            <td class="pv3 pr3 bb b--black-20" >{item.email}</td>
            <td class="pv3 pr3 bb b--black-20" >{item.branch}</td>
          </tr>

        )
      })}
  


        
        
        
        
      </tbody>
    </table>
  </div>
</div>

   )

 }

export default About