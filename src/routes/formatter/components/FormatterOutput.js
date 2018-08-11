import React from 'react';

const FormatterOutput = ({output}) => (
    <div className="form-group col-lg-6">
        <label htmlFor="formatterOutput">Output</label>
        <textarea className="form-control formatter-output" id="formatterOutput" rows="20" disabled value={output}/>
    </div>
);

export default FormatterOutput;