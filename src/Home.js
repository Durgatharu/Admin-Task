import React from 'react'
import Nav from './Nav'

function Home({Toggle}) {
  return (
    <div className='px-3'>
      <Nav  Toggle={Toggle}/>
      <div className='container-fluid'>
        <div className='row g-3 my-2'>

            <div className='col-md-3' id='box'>
                <div className='p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                
                  <div>
                    <p className='fs-6 color-green' id='para1'>BOOKING TRIP</p>
                    <h3 className='head3'>2</h3>
                  </div>

                </div>

                
            </div>

            <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-center rounded '>
                
                  <div>
                    <p className='fs-6' id='para1'>ONTRIP</p>
                    <h3 className='head3'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-center rounded '>
                
                  <div>
                    <p className='fs-6' id='para1'>DROPPING TODAY</p>
                    <h3 className='head3'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-center rounded '>
                
                  <div>
                    <p className='fs-6' id='para1'>ENQUIRYS</p>
                    <h3 className='head3'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-center rounded '>
                
                  <div>
                    <p className='fs-6' id='para'>NOT INTRESTED ENQUIRYS</p>
                    <h3 className='head4'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-center rounded '>
                
                  <div>
                    <p className='fs-6' id='para'>CONVERTED ENQUIRYS</p>
                    <h3  className='head4'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-center rounded '>
                
                  <div>
                    <p className='fs-6' id='para'>PENDING FOLLOWUPS</p>
                    <h3  className='head4'>909</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-center rounded '>
                
                  <div>
                    <p className='fs-6' id='para'>PRIORITY FOLLOWUPS</p>
                    <h3  className='head4'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-first baseline rounded '>
                
                  <div>
                    <p className='fs-6' id='para1'>OTHER ENQUIRYS</p>
                    <h3 className='head3'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-first baseline rounded '>
                
                  <div>
                    <p className='fs-6' id='para'>THIS WEEK'S FOLLOWUPS</p>
                    <h3  className='head4'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-first baseline rounded '>
                
                  <div>
                    <p className='fs-6' id='para'>TODAYS FOLLOWUPS</p>
                    <h3  className='head4'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-first baseline rounded '>
                
                  <div>
                    <p className='fs-7' id='para'>TODAY'SCOMPLETEDFOLLOW</p>
                    <h3>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-first baseline rounded '>
                
                  <div>
                    <p className='fs-6' id='para1'>ONROADZ</p>
                    <h3 className='head3'>206</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-first baseline rounded '>
                
                  <div>
                    <p className='fs-6' id='para1'>SELF DRIVE</p>
                    <h3 className='head3'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-first baseline rounded '>
                
                  <div>
                    <p className='fs-6' id='para1'>ROYAL PICKS</p>
                    <h3 className='head3'>0</h3>
                  </div>
              </div>
         </div>

         <div className='col-md-3' id='box'>
                <div className='p-2 bg-white  shadow-sm d-flex justify-content-around align-items-first baseline rounded '>
                
                  <div>
                    <p className='fs-6' id='para1'>CLOSED BOOKINS</p>
                    <h3 className='head3'>0</h3>
                  </div>
              </div>
         </div>


        </div>

      </div>
      
    </div>
  )
}

export default Home
