import React from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    return (
        <div>
            <p>6 sliced Items</p>
            <Link to="/inventory/:id">
     <button type="button">
          Manage Inventories
     </button>
 </Link>
        </div>
    );
};

export default Items;