import React from 'react';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    return (
        <div>
            <h3>Manage items haha</h3>
            <Link to="/additem">
     <button type="button">
          Add New Item
     </button>
 </Link>
        </div>
    );
};

export default ManageItems;