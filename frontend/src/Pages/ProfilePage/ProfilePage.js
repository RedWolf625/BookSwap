import React, { useState, useEffect, useContext } from "react";

import MaleAvatarProfile from "../../Assets/Male Avatar Profile.png";

import { InfoRow, Library } from "../../Components";
import useApi from "../../Api/useApi";
import requests from "../../Api/requests";
import "./ProfilePage.css";
import AuthContext from "../../Context/AuthContext";

const headings = ["Username's Library", "Username's Wishlist"];
const headingLinks = ["/library", "/wishlist"];

function ProfilePage(props) {
  const profileDetails = useApi(requests.getProfileDetails);
  const [userInfo, setUserInfo] = useState(null);
  const [library, setLibrary] = useState(null);
  const [wishlist, setWishlist] = useState(null);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    if (userId) {
      profileDetails.request(userId);
    }
  }, []);

  useEffect(() => {
    if (profileDetails.data !== []) {
      setUserInfo(profileDetails.data.userInfo);
      setLibrary(profileDetails.data.library);
      setWishlist(profileDetails.data.wishlist);
    }
  }, [profileDetails.data]);

  return (
    <div className="pageBody">
      <div className="profileInfoSection">
        <div className="profileHeader">
          <img src={MaleAvatarProfile} alt="Avatar" className="avatarProfile" />
          <p className="profileInfo">{userInfo ? userInfo.username : "..."}</p>
          <p className="profileEmail">{userInfo ? userInfo.email : "..."}</p>
        </div>
        <div className="profileFooter">
          <InfoRow
            label="Points Spent"
            value={userInfo ? userInfo.pointsSpent : "0"}
          />
          <InfoRow
            label="Points in Wallet"
            value={userInfo ? userInfo.pointsInWallet : "0"}
          />
          <InfoRow
            label="Books Given"
            value={userInfo ? userInfo.booksGiven : "0"}
          />
          <InfoRow
            label="Book Requested"
            value={userInfo ? userInfo.booksReceived : "0"}
          />
        </div>
      </div>
      <div className="librarySection">
        <Library
          headings={headings}
          book_arrays={[library, wishlist]}
          headingLinks={headingLinks}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
