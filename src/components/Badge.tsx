import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

const Badge = ({ children }: BadgeProps): JSX.Element => {
  return (
    <div className="inline-flex ml-1 mr-1 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-200 text-blue-900">
      {children}
    </div>
  );
};

export default Badge;
