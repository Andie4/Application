import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import api from "../services/api";

export default function Example() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const { ok, data } = await api.get("/list");
      if (!ok) return console.log("error fetching lists");
      setLists(data);
    };
    fetchLists();
  }, []);

  return (
    <FlatList
      data={lists}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}