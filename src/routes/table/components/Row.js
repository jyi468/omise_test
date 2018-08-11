import React from 'react';

const Row = ({data}) => (
    // Add href for html_url
    <tr key={data.id}>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>{data.owner.login}</td>
        <td>{data.html_url}</td>
        <td>{data.description}</td>
    </tr>
);

export default Row;