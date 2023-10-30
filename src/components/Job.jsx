const Job=(props)=>{
    console.log(props);
    return <div className="Job"> 
    <div> {props.classname} </div>
    <span> {props.title} </span>
    <span> {props.contractType} </span>
    <span> {props.country} </span>
    <span> {props.city} </span>
     </div>
}

export default Job