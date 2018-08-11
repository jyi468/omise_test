import React from 'react';
import renderer from 'react-test-renderer';
import FormatterOutput from './FormatterOutput';

it('renders output correctly', () => {
    const output = [
        {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [
                {
                    "id": 12,
                    "title": "Red Roof",
                    "level": 1,
                    "children": [],
                    "parent_id": 10
                }
            ],
            "parent_id": null
        }
    ];
    const tree = renderer
        .create(<FormatterOutput output={output}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});