
function StatementRow({statement, onChange}) {

    const handleFieldChange = (event) => {
      statement.field=event.target.value;
      onChange(statement.id, statement);
    }

    const handleValueChange = (event) => {
      statement.value=event.target.value;
      onChange(statement.id, statement);        
    }

    return (
      <div>
        <select value={statement.field} onChange={handleFieldChange} >
            <option value="" >Select an option</option>
            <option value="status">Status</option>
        </select>
        <label>=</label>
        <input
          type="text"
          onChange={handleValueChange}
          value={statement.value}
        ></input>
      </div>
    );

}

export default StatementRow;