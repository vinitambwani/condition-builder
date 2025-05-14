import React, { useState } from "react";
import StatementRow from "./StatementRow";


function ThenStatement() {

    const [statements, setStatements] = useState([]);
    const [preview, setPreview] = useState('');

    const handleResultsUpdate = (id, newValue) => {
        const updatedStatements = statements.map( statement => 
            statement.id === id ? {...statement, newValue} : statement
        );
        setStatements(updatedStatements);
        setPreview(statements.map(statement => statement.field + '  =  ' + statement.value).join(" && "));

    };

    const handleAddResultButtonClick = () => {
        const statement = {
            id : statements.length,
            field: '',
            value: ''
        };
        
        //condition.id = conditions?.length? conditions.length: 0;
        setStatements([...statements, statement]);
    };

    //const resultsList = results.map((result) => <ThenRow key={result.id} result={result} onChange={handleResultsUpdate} />);
    const statementsList = statements?.map((statement) => 
        <StatementRow key={statement.id} statement={statement} onChange={handleResultsUpdate}/> 
    );
    
    return <div>
        <button onClick={handleAddResultButtonClick}>Add Then Statement</button>
        {statementsList}
        {preview}
    </div>;

}

export default ThenStatement;