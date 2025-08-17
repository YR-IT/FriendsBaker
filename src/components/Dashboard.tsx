
import { useState, useEffect } from "react";

function Dashboard() {
  const [stats, setStats] = useState({});
  const [applications, setApplications] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("Total");

//   useEffect(() => {
//     fetchStats();
//     fetchApplications(selectedStatus);
//   }, [selectedStatus]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">CRM Dashboard</h1>

      {/* Status Cards */}
      <div className="grid grid-cols-5 gap-4 my-4">
        {["Total", "Pending", "In Process", "Payment Not Completed", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className="bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-600"
          >
            {status} ({stats[status] || 0})
          </button>
        ))}
      </div>

      {/* Applications Table */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">{selectedStatus} Applications</h2>
        <table className="w-full mt-2 border">
          <thead>
            <tr className="bg-gray-200">
              <th>Ref No</th>
              <th>Client</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app._id}>
                <td>{app.referenceNo}</td>
                <td>{app.clientName}</td>
                <td>{app.status}</td>
                <td>{app.paymentStatus}</td>
                <td>{new Date(app.updatedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Application + Track */}
      <div className="flex gap-4 mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">+ New Application</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Continue / Track Application</button>
      </div>
    </div>
  );
}
export default Dashboard;
