import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading'
import UserRow from '../Dashboard/UserRow'

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('https://aqueous-beach-56376.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()))

    console.log(users);

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Position</th>
        <th>Remove User</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map((user, index) => <UserRow key={index} user={user} index={index} refetch={refetch}></UserRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;