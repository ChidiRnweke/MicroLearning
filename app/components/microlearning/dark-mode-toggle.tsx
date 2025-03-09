import { Moon, Sun } from "lucide-react";

import { Toggle } from "~/components/ui/toggle";
import { useTheme } from "~/components/ui/theme-provider";
import { useState } from "react";

export function DarkModeToggle({ className }: { className?: string }) {
  const [checked, setChecked] = useState(false);
  const { setTheme } = useTheme();

  const changeTheme = () => {
    setChecked(!checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Toggle onClick={() => changeTheme()} className={className}>
      {checked ? <Sun /> : <Moon />}
    </Toggle>
  );
}
