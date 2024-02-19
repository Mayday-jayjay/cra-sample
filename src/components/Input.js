const Input = ({id,text,value,onChangeHandler})=>{
    return (<>
    <label htmlFor={id} className="">{text}</label>
        <input type="text" value ={value} id={id} 
        onChange={onChangeHandler}/>
    </>)
}
export default Input