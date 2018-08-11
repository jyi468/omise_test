import React from 'react';

const FormatterInput = (props) => (
    <div className="form-group col-lg-6">
        <label htmlFor="formatterInput">Input (Editable Field)</label>
        <textarea
            className="form-control formatter-input"
            id="formatterInput"
            rows="20"
            onChange={props.onInput}
            placeholder="Input here please..."/>
    </div>
);

export default FormatterInput;