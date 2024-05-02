import { useEffect } from "react";
function useDocumentTitle(count) {
  useEffect(() => {
    document.title=`Document ${count}`
  }, [count]);
}
export default useDocumentTitle;
