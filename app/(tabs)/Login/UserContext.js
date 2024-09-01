// UserContext.js


import React, { createContext } from 'react';

export const UserContext = createContext(); // Create context

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null); // This will hold the logged-in user's data

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };
