"use client"

const Profile = (user:any) => {
const {email} = user || {}
    return (
        <div>
            {email ? (<div>{email}</div>):(<div>user</div>)}
        </div>
    );
};

export default Profile;