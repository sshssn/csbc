"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: never;
  href?: string;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  href?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".75rem",
    paddingRight: ".75rem",
    width: "auto"
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".75rem" : 0,
    paddingLeft: isSelected ? "1.25rem" : ".75rem",
    paddingRight: isSelected ? "1.25rem" : ".75rem",
    width: isSelected ? "auto" : "40px"
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.05, type: "spring", bounce: 0, duration: 0.4 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [activeLink, setActiveLink] = React.useState<string | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Set active link based on current path
    const path = window.location.pathname;
    const activeIndex = tabs.findIndex(tab => 'href' in tab && tab.href === path);
    if (activeIndex >= 0) {
      setSelected(activeIndex);
      setActiveLink(path);
    }
  }, [tabs]);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    // If already selected, deselect it, otherwise select it
    setSelected(selected === index ? null : index);
    onChange?.(selected === index ? null : index);
    
    // Check if the tab has a href
    const tab = tabs[index] as Tab;
    if (tab && tab.href) {
      setActiveLink(tab.href);
    }
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex items-center gap-2 rounded-2xl bg-background/50 p-1.5 backdrop-blur-sm",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isActive = 'href' in tab && tab.href === activeLink;
        
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            custom={selected === index || isActive}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex items-center justify-center rounded-xl px-3 py-1.5 text-sm font-medium transition-colors duration-300",
              (selected === index || isActive)
                ? cn("bg-muted", activeColor)
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon size={18} />
            <AnimatePresence initial={false}>
              {(selected === index || isActive) && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}