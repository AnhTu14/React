import React, { Suspense, ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode; // Xác định rằng children có thể là bất kỳ node React hợp lệ nào
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children }) => {
  return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>;
};

export default LazyLoad;
