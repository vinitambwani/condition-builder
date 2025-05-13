
function ThenRow({result, onChange}) {

    const handleFieldChange = (event) => {

    }

    const handleValueChange = (event) => {
        
    }

    return (
      <div>
        <select value={result.field} onChange={handleFieldChange} defaultValue="">
            <option value="" disabled >Select an option</option>
            <option value="status">Status</option>
        </select>
        <label>=</label>
        <input
          type="text"
          onChange={handleValueChange}
          value={result.value}
        ></input>
      </div>
    );

}

export default ThenRow;