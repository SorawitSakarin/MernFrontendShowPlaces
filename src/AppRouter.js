import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
const Home = lazy(() => import("./users/pages/Home"));
const Users = lazy(() => import("./users/pages/Users"));
const Places = lazy(() => import("./places/pages/Userplaces"));
const NewPlaces = lazy(() => import("./places/pages/NewPlace"));
const UpdatePlace = lazy(() => import("./places/pages/UpdatePlace"));
const Auth = lazy(() => import("./users/pages/Auth"));
const AboutUs = lazy(() => import("./shared/page/AboutUs"));
const Print = lazy(() => import("./shared/page/Print"));
const Import = lazy(() => import("./shared/page/Import"));


const AppRouter = () => {
  const {token, login,logout, userId} = useAuth();

  let routes;

  if (!token) {
    //Status: Log out  >> need Log in
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId/places" element={<Places />} />
        <Route path="/user" element={<Users />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/print" element={<Print />} />
        <Route path="/import" element={<Import />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    );
  } else {
    // Status: Log in
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId/places" element={<Places />} />
        <Route path="/user" element={<Users />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/places/new" element={<NewPlaces />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <MainNavigation />
        <main>
          <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
        </main>
      </AuthContext.Provider>
    </Router>
  );
};
export default AppRouter;

// const AppRouter = () => (

//     <Router>
//       <MainNavigation />
//       <main>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/:userId/places" element={<Places />} />
//             <Route path="/user" element={<Users />} />
//             <Route path="/places/new" element={<NewPlaces />} />
//             <Route path="/places/:placeId" element={<UpdatePlace />} />
//             <Route path="/auth" element={<Auth />} />
//             <Route path="/aboutus" element={<AboutUs />} />
//             {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
//           </Routes>
//         </Suspense>
//       </main>
//     </Router>
// );
