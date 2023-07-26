import React from 'react'
import './style.css'


function Sidebar() {
  return (
    <div className='bg-white sidebar p-2 '  >
        <div className='m-2'>
        {/* <i className='bi bi-bootstrap-fill my-2'></i> */}
      <span className='brand-name fs-6'>Admin Dashboard</span>

        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>

        <a className='list-group-item py-2'>
           <i className='bi bi-speedometer2 fs- me-2' ></i>
                <span className='fs-7'>Dashboard</span>
            </a>

            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-bookmark-check-fill fs-7 me-2'></i>
                <span className='fs-7'>Booking</span>
            </a>

            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-google fs-7 me-2'></i>
                <span className='fs-7'>Google Sheet</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-archive fs-7 me-2'></i>
                <span className='fs-7'>Deleted Booking</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-bookmark-x fs-7 me-2'></i>
                <span className='fs-7'>Skipped Booking</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-patch-exclamation fs-7 me-2'></i>
                <span className='fs-7'>Approve Review</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-patch-exclamation fs-7 me-2'></i>
                <span className='fs-7'>City</span>
            </a>

            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-book-fill fs-7 me-2'></i>
                <span className='fs-7'>Branch</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-people fs-7 me-2'></i>
                <span className='fs-7'>Employee</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-amd fs-7 me-2'></i>
                <span className='fs-7'>Brand</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-collection fs-7 me-2'></i>
                <span className='fs-7'>Model</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-box2 fs-7 me-2'></i>
                <span className='fs-7'>Package</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-box2 fs-7 me-2'></i>
                <span className='fs-7'>Special Package</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-sign-turn-right fs-7 me-2'></i>
                <span className='fs-7'>Routes Package</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-car-front fs-7 me-2'></i>
                <span className='fs-7'>Car</span>
            </a>
            
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-person fs-7 me-2'></i>
                <span className='fs-7'>User</span>
            </a>
            
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-cash-coin fs-7 me-2'></i>
                <span className='fs-7'>Coupon</span>
            </a>
            
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-person-fill-dash fs-7 me-2'></i>
                <span className='fs-7'>Service Dashboard</span>
            </a>
            
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-geo-alt fs-7 me-2'></i>
                <span className='fs-7'>GPS Tracking</span>
            </a>

            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-repeat fs-7 me-2'></i>
                <span className='fs-7'>Followup Reset</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-credit-card-2-front fs-7 me-2'></i>
                <span className='fs-7'>Payment Report</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-check-square fs-7 me-2'></i>
                <span className='fs-7'>Terms and Conditions</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-check-lg fs-7 me-2'></i>
                <span className='fs-7'>App Terms and Conditions</span>
            </a>

            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-lock fs-7 me-2'></i>
                <span className='fs-7'>Privacy Policy</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-wallet fs-7 me-2'></i>
                <span className='fs-7'>Wallet</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-wallet2 fs-7 me-2'></i>
                <span className='fs-7'>Trip Wallet</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-gift fs-7 me-2'></i>
                <span className='fs-7'>Refer and Earn</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-speedometer2 fs-7 me-2'></i>
                <span className='fs-7 '>Notification</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-speedometer2 fs-7 me-2'></i>
                <span className='fs-7'>FAQ</span>
            </a>

            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-gear fs-7 me-2'></i>
                <span className='fs-7'>Settings</span>
            </a>

            

            

        </div>
      
    </div>
  )
}

export default Sidebar
