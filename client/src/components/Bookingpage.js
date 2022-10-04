function Bookingpageelement(props){

    return(
               <div className='bs m-1 p-2'>
                <h1>{props.name}</h1>
                <p>BookingId : {props.id}</p>
                <p>TransactionId : {props.transactionId}</p>
                <p><b>Check In : </b>{props.fromdate}</p>
                <p><b>Check Out : </b>{props.todate}</p>
                <p><b>Amount : </b> {props.totalAmount}</p>
                <p><b>Status</b> : {props.status}</p>
                <div className='text-right'>
                {props.booking}
                </div>
                </div>
    )
}
export default Bookingpageelement;