import { useActiveSection } from "@/hooks/useActiveSection";
import { HeaderData } from "./navigation.data";
import { A } from "@/ui/A";
import { t } from "i18next";
import { useMemo } from "react";

export function Navbar() {
  const sectionIds = useMemo(
    () => HeaderData.navLinks.map((link) => link.id),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full items-center gap-6 bg-neutral-800 px-6 py-2 pb-[calc(env(safe-area-inset-bottom)+1rem)] md:relative md:w-fit md:border-t-0 md:border-none md:bg-transparent md:py-0 md:pb-0 dark:border-t dark:border-neutral-900">
      <ul className="flex items-center justify-around gap-6">
        {HeaderData.navLinks.map(({ id, link }) => (
          <li key={id}>
            <A
              href={link}
              className={
                activeSection === id
                  ? "border-b-2 border-indigo-500 text-indigo-500 hover:border-rose-500 active:border-indigo-500"
                  : ""
              }
            >
              {t(`${HeaderData.path}.${id}`)}
            </A>
          </li>
        ))}
      </ul>
    </nav>
  );
}
