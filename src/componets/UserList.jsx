import React, { useState, useEffect } from "react";

function UserList({ userLists }) {
    const [user, setUser] = useState(userLists);

    useEffect(() => {
        setUser(userLists);
    }, [userLists]);

    const deleteUser = (id) => {
        const filterData = user.filter((data) => data.id !== id);
        setUser(filterData);
    };

    return (
        <div>
            {user.map((data) => (
                <div className="datadivmain" key={data.id}>
                    <div className="datadiv">{data.name}</div>
                    <span>
                        <button className="deletebtn" onClick={() => deleteUser(data.id)}>
                            <img className="image" src="./src/assets/delete.png" alt="" />
                        </button>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default UserList;
