import { useEffect, useState } from "react";

export const useData = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return { content };
};
