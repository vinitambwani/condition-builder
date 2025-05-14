//import React, { useState } from "react";

function ConditionRow({condition, onChange}) {

    const handleAndOrOperatorChange =(event)=>{
        condition.andOrOperator = event.target.value;
        onChange(condition.id, condition);

    }

    const handleFieldChange = (event) => {
        condition.field = event.target.value;
        onChange(condition.id, condition);
    }

    const handleOperatorChange = (event) => {
        condition.operator = event.target.value;
        onChange(condition.id, condition);
    }

    const handleValueChange = (event) => {
        condition.value = event.target.value;
        onChange(condition.id, condition);
    }

    return <div>
        <select value={condition.andOrOperator} onChange={handleAndOrOperatorChange} disabled={condition.id===0}>
            <option value="">Logical Operators</option>
            <option value="&&">AND</option>
            <option value="||">OR</option>
        </select>

        <select value={condition.field} onChange={handleFieldChange} >
            <option value="" >Select an option</option>
            <option value="status">Status</option>
        </select>
        <select value={condition.operator} onChange={handleOperatorChange} >
            <option value=""></option>
            <option value="!=">!=</option>
            <option value="==">==</option>
            <option value=">=">&gt;=</option>
            <option value=">">&gt;</option>
            <option value="<=">&lt;=</option>
            <option value="<">&lt;</option>
        </select>
        <input type="text" onChange={handleValueChange} value={condition.value}></input>

    </div>


}

export default ConditionRow;