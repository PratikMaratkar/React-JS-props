import "./MyInformation.css";
function MyInformation(props)
{
    return(
        <div className='myInformation'>
            <ol>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <li>Contact No: {props.no}</li>
                    <p>
                        {props.children}
                    </p>
            </ol>
        </div>
    );

}
export default MyInformation;