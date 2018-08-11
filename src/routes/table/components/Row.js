import React from 'react';

const Row = ({data}) => (
    // Add href for html_url
    <tr key={data.id}>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>{data.owner.login}</td>
        <td>
            <a href={data.html_url} target="_blank">{data.html_url}</a>
        </td>
        <td>{data.description}</td>
    </tr>
);

export default Row;