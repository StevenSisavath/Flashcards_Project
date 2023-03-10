import React, { useState } from 'react';

const Collection = (props) => {

    return ( 
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {props.parentCollections.map((collection, index) => {
                    return (
                    <tr key={collection.id}>
                        <td onClick=''>{collection.id}</td>
                        <td>{collection.title}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default Collection;