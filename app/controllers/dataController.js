import { useState, useEffect } from "react";
import { SORT_OPTIONS } from "../constant";

export default function useDataController() {
  const [files, setFiles] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("http://localhost:3000/api/data", {
          next: { revalidate: 0 },
        });
        const fileData = await data.json();
        setFiles(fileData?.files);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  function getSortedFileByFileNames(isAsc = true) {
    const sortedFiles = files.sort((a, b) => {
      const regex = /\d+|\D+/g;

      const partsA = a.fileName.match(regex);
      const partsB = b.fileName.match(regex);

      for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
        const partA = partsA[i];
        const partB = partsB[i];

        if (partA === undefined) return isAsc ? -1 : 1;
        if (partB === undefined) return isAsc ? 1 : -1;

        if (!isNaN(partA) && !isNaN(partB)) {
          const numA = Number(partA);
          const numB = Number(partB);
          if (numA !== numB) {
            return isAsc ? numA - numB : numB - numA;
          }
        } else {
          const strCompare = partA.localeCompare(partB);
          if (strCompare !== 0) {
            return isAsc ? strCompare : -strCompare;
          }
        }
      }

      return 0;
    });
    return [...sortedFiles];
  }

  const onChange = (e) => {
    const value = e.target.value;
    if (value === SORT_OPTIONS.SORT_BY_CREATED_AT) {
      setFiles([
        ...files.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
      ]);
    } else {
      setFiles(
        getSortedFileByFileNames(value === SORT_OPTIONS.SORT_BY_FILENAME_ASC)
      );
    }
  };

  return { sort, setSort, files, onChange };
}
