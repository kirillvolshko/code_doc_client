"use client";
import { RootState } from "@/store";
import { useRefreshMutation } from "@/store/auth/authService";
import { setToken } from "@/store/auth/authSlice";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { access_token, refresh_token } = useSelector(
    (state: RootState) => state.auth
  );
  const [refresh] = useRefreshMutation();

  useEffect(() => {
    if (access_token) {
      const refreshToken = async () => {
        setInterval(async () => {
          const { accessToken } = await refresh({
            refresh_token,
          }).unwrap();
          dispatch(setToken(accessToken));
        }, 4.5 * 60 * 1000);
      };
      refreshToken();
    }
  }, [access_token, dispatch, refresh, refresh_token]);
  return <>{children}</>;
};
