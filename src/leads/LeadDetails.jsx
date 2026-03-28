import API from "../services/api";

const LeadDetails = ({ chat }) => {
  if (!chat) return null;

  const updateStatus = async (status) => {
    await API.put(`/leads/${chat.leadId}/status`, {
      status,
    });

    alert("Updated to " + status);
  };

  return (
    <div className="w-64 border-l p-4 bg-white">
      <h2 className="text-lg font-bold mb-2">Lead Info</h2>

      <p><b>ID:</b> {chat.leadId}</p>
      <p><b>Status:</b> {chat.status || "new"}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        <button onClick={() => updateStatus("hot")} className="bg-red-500 text-white px-2 py-1 rounded">Hot</button>
        <button onClick={() => updateStatus("warm")} className="bg-yellow-500 text-white px-2 py-1 rounded">Warm</button>
        <button onClick={() => updateStatus("cold")} className="bg-blue-500 text-white px-2 py-1 rounded">Cold</button>
        <button onClick={() => updateStatus("paid")} className="bg-green-600 text-white px-2 py-1 rounded">Paid</button>
      </div>
    </div>
  );
};

export default LeadDetails;
