import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function useStorage (setUser, setMode) {
  const dispatch = useDispatch()
  const isStateUser = useSelector(state => state.reducer.user)
  useEffect(() => {
    if (sessionStorage.user && !isStateUser) {
      dispatch(setUser(JSON.parse(sessionStorage.user)))
      dispatch(setMode('isUser'))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  
}

export default useStorage