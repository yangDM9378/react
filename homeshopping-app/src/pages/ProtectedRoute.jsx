import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  // 로그인 사용자가 있는지 확인
  // 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true인 경우 로그인 되어야 하며, 어드민 권한도 가지고 잇어야함
  // 조건에 맞지 않으면 상위경로로 이동
  // 조건에 맞는 경우만 children을 보여주기
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
