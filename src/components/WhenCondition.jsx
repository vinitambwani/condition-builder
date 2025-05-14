import { useState } from "react";
import ConditionRow from "./ConditionRow";

function WhenCondition() {
    
    const [conditions, setConditions] = useState([]);
    const [preview, setPreview] = useState('');

    const handleConditionUpdate = (id, newValue) => {
        const updatedConditions = conditions.map( condition =>
            condition.id === id ? {...condition, newValue} : condition
        );
        setConditions(updatedConditions);
        setPreview(conditions.map(condition => condition.andOrOperator + ' ' + condition.field + ' ' + condition.operator + ' ' + condition.value).join(" "));
    }

    const handleAddConditionButtonClick = () => {
        const condition = {
            id : conditions.length,
            andOrOperator: '',
            operator: '',
            value: ''
        };
        
        //condition.id = conditions?.length? conditions.length: 0;
        setConditions([...conditions, condition]);
    };

    const conditionsList = conditions?.map((condition) =>
        <ConditionRow key={condition.id} condition = {condition} onChange = {handleConditionUpdate} />
    );

    
    //console.log(conditions);
    return <div>
        <button onClick={handleAddConditionButtonClick}>Add Condition</button>
        {conditionsList}
        {preview}
    </div>;
}

export default WhenCondition;