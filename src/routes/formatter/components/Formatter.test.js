import React from 'react';
import renderer from 'react-test-renderer';
import Formatter from './Formatter';
import FormatterInput from './FormatterOutput';
import ReactTestUtils from 'react-dom/test-utils';

it('renders output correctly', () => {
    const input = {
        "0":
            [{
                "id": 10,
                "title": "House",
                "level": 0,
                "children": [],
                "parent_id": null
            }],
        "1":
            [{
                "id": 12,
                "title": "Red Roof",
                "level": 1,
                "children": [],
                "parent_id": 10
            }]
    };

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

    const tree = ReactTestUtils.renderIntoDocument(<Formatter/>);
    const formatterInput = ReactTestUtils.findRenderedDOMComponentWithClass(tree, 'formatter-input');
    const formatterOutput = ReactTestUtils.findRenderedDOMComponentWithClass(tree, 'formatter-output');

    ReactTestUtils.Simulate.change(formatterInput, {
        target: {
            value: JSON.stringify(input)
        }
    });

    expect(formatterOutput.value).toEqual(JSON.stringify(output, undefined, 2));

    expect(formatterInput).toMatchSnapshot();
    expect(formatterOutput).toMatchSnapshot();
});