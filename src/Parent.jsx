import Child from "./Child"
function Parent(){
    const course={
        courseName:"React JS",
        time:"2:00 PM",
        Fees:"95000"
    }

return <div className="parentContainer">
<h1>Parent Component</h1>
<AudioContext.provider value={course}>
    <Child/>
</AudioContext.provider>
    </div>
}

