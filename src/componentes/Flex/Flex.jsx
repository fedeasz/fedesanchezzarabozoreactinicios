import "./Flex.css";
function Flex (props){
    return(
    <div className="FlexContainer">
        {props.children}
    </div>)

}
 export default Flex;