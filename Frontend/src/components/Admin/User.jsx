const Users = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">👤 Manage Users</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border-b">
            <td className="p-3">Mayank Sharma</td>
            <td className="p-3">mayank@email.com</td>
            <td className="p-3">User</td>
            <td className="p-3">
              <button className="bg-red-600 px-3 py-1 text-white rounded">Block</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
