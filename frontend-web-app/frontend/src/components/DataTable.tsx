import React from "react";
import { Record } from "../types";

interface DataTableProps {
  records: Record[];
}

const DataTable: React.FC<DataTableProps> = ({ records }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created At
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {records.map((record) => (
            <tr key={record.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">{record.id}</td>
              <td className="px-6 py-4">{record.name}</td>
              <td className="px-6 py-4">{record.description}</td>
              <td className="px-6 py-4">
                {new Date(record.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {records.length === 0 && (
        <div className="text-center py-4 text-gray-500">No records found</div>
      )}
    </div>
  );
};

export default DataTable;
