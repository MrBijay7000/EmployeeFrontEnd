import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import Card from "../FormElements/Card";

const DropdownComponent = () => {
  //   const [userIds, setUserIds] = useState([]);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5001/api/admin/viewAllEmployee"
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  //   return (
  //     <div>
  //       <label htmlFor="loadedUsers">Select User:</label>
  //       <select id="loadedUsers">
  //         {loadedUsers.map((loadedUsers) => (
  //           <option key={loadedUsers} value={loadedUsers}>
  //             {loadedUsers}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  return (
    <div>
      {loadedUsers && loadedUsers.length > 0 ? (
        <React.Fragment>
          <label htmlFor="loadedUsers">User Name:</label>
          <select id="loadedUsers">
            {loadedUsers.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} {/* Assuming user object has a 'name' property */}
              </option>
            ))}
          </select>
        </React.Fragment>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default DropdownComponent;
