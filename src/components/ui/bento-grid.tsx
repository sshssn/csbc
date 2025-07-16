"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";
import React from "react";

export interface BentoItem {
    title: React.ReactNode;
    description: React.ReactNode;
    icon?: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: {
        text: string;
        href: string;
    } | string;
    className?: string;
    header?: React.ReactNode;
}

interface BentoGridProps {
    children?: React.ReactNode;
    items?: BentoItem[];
    className?: string;
}

interface BentoGridItemProps {
    title: React.ReactNode;
    description: React.ReactNode;
    header?: React.ReactNode;
    className?: string;
}

const BentoGrid = ({ children, items, className }: BentoGridProps) => {
    return (
        <div className={cn("grid grid-cols-1 gap-4 md:gap-6 px-2 sm:px-4", className)}>
            {items?.map((item, idx) => (
                <BentoGridItem
                    key={`${item.title}-${idx}`}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                />
            ))}
            {children}
        </div>
    );
};

const BentoGridItem = ({
    title,
    description,
    header,
    className,
}: BentoGridItemProps) => {
    return (
        <div 
            className={cn(
                "group/bento row-span-1 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/40 shadow-sm transition-all duration-200 hover:shadow-md hover:shadow-gray-100/50 dark:hover:shadow-black/30",
                className
            )}
        >
            {header && <div className="w-full">{header}</div>}
            <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                {typeof description === 'string' ? (
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
                ) : (
                  <div>{description}</div>
                )}
            </div>
        </div>
    );
};

export { BentoGrid, BentoGridItem }
