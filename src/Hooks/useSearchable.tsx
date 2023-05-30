import { useCallback } from "react";

const useSearchable = () => {
  const search = useCallback(
    (items: any[], keyValue: string[], query: string) => {
      return items.filter((item) =>
        keyValue.some((key) =>
          item[key].toLowerCase().includes(query.toLowerCase())
        )
      );
    },
    []
  );

  return { search };
};

export default useSearchable;
