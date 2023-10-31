const Job=(props)=>{
    console.log(props);
    return <div className={`Job ${props.className}`} > 
    <span> {props.title} </span>
    <div> 
    <span> {props.contractType} </span>
    <span> {props.country} </span><span> {props.city} </span>
    </div>
     </div>
}

export default Job