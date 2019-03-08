import React from 'react';

function Search (props) {
    return (
        <input type="text" placeholder="Search" onChange={props.searchHandler} value={props.search}></input>
    )
}

export default Search