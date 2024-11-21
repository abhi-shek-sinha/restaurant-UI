// import { useState } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";

// const Authentication = () => {
//   const location = useLocation();
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(true);

//   if (isAuthenticated === null) {
//     // Loading state
//     return <div>Loading...</div>;
//   }

//   if (isAuthenticated) {
//     // Redirect authenticated users away from "/auth"
//     if (location.pathname === "/auth") {
//       return <Navigate to="/home" replace />;
//     }
//     return <Outlet />;
//   } else {
//     // Redirect unauthenticated users to "/auth"
//     if (location.pathname !== "/auth") {
//       return <Navigate to="/auth" replace />;
//     }
//     return <Outlet />;
//   }
// };

// export default Authentication;
