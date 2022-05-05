import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    return (
        <div>
            <h2>This page for dynamic Id</h2>
            <Link to="/manageitems">
     <button type="button">
          Manage Inventories
     </button>
 </Link>
        </div>
    );
};

export default Inventory;