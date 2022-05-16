import React from 'react';

const UserRow = ({user, index, refetch}) => {
    const {email, role} = user;
    const makeAdmin =()=>{
        fetch(`https://aqueous-beach-56376.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            console.log(res);
            if(res.status === 403){
                alert('failed to make an admin')
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('Successfully made as an admin')
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button className='btn btn-xs'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;