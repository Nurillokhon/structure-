/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProviderI {
  children: React.ReactNode;
}
const AuthProvider: React.FC<ProviderI> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("login");
    } else {
      setIsLoading(false);
    }
  }, [token, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export { AuthProvider };
