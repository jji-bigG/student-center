import React from "react";
import DefaultAuth from "~/layouts/DefaultAuth";
import ProfileForm from "~/components/profile/two_column_with_cards";

function Profile() {
  return (
    <DefaultAuth>
      <div className="p-10">
        <ProfileForm />
      </div>
    </DefaultAuth>
  );
}

export default Profile;
