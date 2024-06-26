import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
    const navigate = useNavigate();
  const { user, loading, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth === false) {
     navigate("/login");
    }
  }, [navigate, isAuth]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
         <MetaData title={user ? `${user.name}'s Profile` : "User Profile"} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              {user && user.avatar && (
  <img src={user.avatar.url} alt={user.name} />
                 )}
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                {user ? <p>{user.name}</p> : <p>Loading...</p>}
              </div>
              <div>
                <h4>Email</h4>
                {user ? <p>{user.email}</p> : <p>Loading...</p>}
              </div>
              <div>
              <h4>Joined On</h4>
                {user && user.createdAt ? (
                  <p>{String(user.createdAt).substring(0, 10)}</p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
