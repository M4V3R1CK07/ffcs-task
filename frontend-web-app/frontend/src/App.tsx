import React, { useState, useEffect } from "react";
import { fetchRecords, searchRecords } from "./services/api";
import { Record } from "./types";
import DataTable from "./components/DataTable";
import SearchBar from "./components/SearchBar";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorDisplay from "./components/ErrorDisplay";

const App: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    try {
      setLoading(true);
      const fetchedRecords = await fetchRecords();
      setRecords(fetchedRecords);
      setError(null);
    } catch (err) {
      setError("Failed to fetch records. Please try again.");
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const searchResults = await searchRecords(query);
      setRecords(searchResults);
      setError(null);
    } catch (err) {
      setError("Search failed. Please try again.");
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Record Management System
      </h1>

      <SearchBar onSearch={handleSearch} />

      {error && <ErrorDisplay message={error} />}

      {loading ? <LoadingSpinner /> : <DataTable records={records} />}
    </div>
  );
};

export default App;
