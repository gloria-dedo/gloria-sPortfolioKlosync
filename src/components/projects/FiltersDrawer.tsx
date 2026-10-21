"use client";

import { useSyncExternalStore } from "react";
import { Drawer } from "@heroui/react/drawer";
import { ToggleButton } from "@heroui/react/toggle-button";
import { ToggleButtonGroup } from "@heroui/react/toggle-button-group";
import { FaSliders, FaXmark } from "react-icons/fa6";

export type FilterGroup = {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

/** Bottom sheet on phones, side panel from the right on larger screens. */
function usePlacement() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia("(min-width: 768px)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => (window.matchMedia("(min-width: 768px)").matches ? "right" : "bottom"),
    () => "bottom" as const,
  );
}

const CHIP =
  "h-auto min-h-0 rounded-full border border-white/15 bg-transparent px-4 py-2 font-sans text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white data-[selected=true]:border-[#FF99FF] data-[selected=true]:bg-[#FF99FF] data-[selected=true]:text-[#262226]";

export function FiltersDrawer({
  groups,
  resultCount,
  isOpen,
  onOpenChange,
  onClear,
}: {
  groups: FilterGroup[];
  resultCount: number;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClear: () => void;
}) {
  const placement = usePlacement();
  const active = groups.filter((group) => group.value).length;

  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
      <Drawer.Trigger
        aria-label={active ? `Filters, ${active} active` : "Filters"}
        className="flex cursor-pointer items-center gap-2.5 rounded-xl bg-white/10 px-4 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-white/15 md:text-base"
      >
        <FaSliders aria-hidden className="text-xs md:text-sm" />
        Filters
        {active > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF99FF] px-1.5 text-xs font-semibold text-[#262226]">
            {active}
          </span>
        )}
      </Drawer.Trigger>

      <Drawer.Backdrop variant="opaque" className="z-[100] bg-black/60">
        <Drawer.Content placement={placement} className="z-[100]">
          <Drawer.Dialog
            className={`flex flex-col bg-[#2E292E] text-white shadow-2xl ring-1 ring-white/10 ${
              placement === "right"
                ? "h-full w-full max-w-md rounded-l-3xl"
                : "max-h-[85svh] w-full rounded-t-3xl"
            }`}
          >
            {placement === "bottom" && <Drawer.Handle className="pt-3 [&>*]:bg-white/25" />}
            <Drawer.Header className="flex flex-row items-center justify-between gap-4 px-6 pt-5 pb-2 text-left md:px-8 md:pt-8">
              <Drawer.Heading className="font-display text-2xl font-semibold tracking-tight text-white">Filters</Drawer.Heading>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close filters"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <FaXmark aria-hidden />
              </button>
            </Drawer.Header>

            <Drawer.Body className="flex flex-1 flex-col items-stretch gap-7 overflow-y-auto px-6 py-4 text-left md:px-8">
              {groups.map((group) => (
                <section key={group.id} className="flex flex-col gap-3">
                  <h3 className="font-sans text-xs font-semibold tracking-[0.3em] text-white/50 uppercase">{group.label}</h3>
                  <ToggleButtonGroup
                    isDetached
                    aria-label={group.label}
                    selectionMode="single"
                    selectedKeys={group.value ? [group.value] : []}
                    onSelectionChange={(keys) => group.onChange((([...keys][0] as string | undefined) ?? ""))}
                    className="flex flex-wrap justify-start gap-2"
                  >
                    {group.options.map((option) => (
                      <ToggleButton key={option} id={option} className={CHIP}>
                        {option}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </section>
              ))}
            </Drawer.Body>

            <Drawer.Footer className="flex items-center gap-3 border-t border-white/10 px-6 py-5 md:px-8">
              <button
                type="button"
                onClick={onClear}
                disabled={!active}
                className="cursor-pointer rounded-xl px-4 py-3 font-sans text-sm font-medium text-white/70 transition-colors hover:text-white disabled:cursor-default disabled:text-white/30"
              >
                Clear all
              </button>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex-1 cursor-pointer rounded-xl bg-[#FF99FF] px-5 py-3 font-sans text-sm font-semibold text-[#262226] transition-colors hover:bg-[#ffb3ff] md:text-base"
              >
                Show {resultCount} {resultCount === 1 ? "project" : "projects"}
              </button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
