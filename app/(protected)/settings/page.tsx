"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="rounded-xl bg-white p-10">
      <button type="submit" onClick={onClick}>
        sign out
      </button>
    </div>
  );
};

export default SettingsPage;
