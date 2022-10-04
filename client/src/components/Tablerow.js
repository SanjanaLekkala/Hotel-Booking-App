function Tablerow(props){
    return(
<tr>
                                     <td>{props.id}</td>
                                     <td>{props.userid}</td>
                                     <td>{props.room}</td>
                                     <td>{props.fromdate}</td>
                                     <td>{props.todate}</td>
                                     <td>{props.status}</td>
                                 </tr>
    )
}
export default Tablerow;