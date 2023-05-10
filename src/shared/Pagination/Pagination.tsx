import { CustomLink } from "data/types";
import React, { FC, useState } from "react";
import twFocusClass from "utils/twFocusClass";

const DEMO_PAGINATION: CustomLink[] = [
  {
    label: "1",
    href: "#",
  },
  {
    label: "2",
    href: "#",
  },
  {
    label: "3",
    href: "#",
  },
  {
    label: "4",
    href: "#",
  },
  {
    label: "5",
    href: "#",
  },
];

export interface PaginationProps {
  className?: string;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  className = "",
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  const onClick1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    if (onPageChange) {
      onPageChange(Number(1));
    }
  };
  const onClick2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    if (onPageChange) {
      onPageChange(Number(2));
    }
  };
  const onClick3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setIsActive4(false);
    setIsActive5(false);
    if (onPageChange) {
      onPageChange(Number(3));
    }
  };
  const onClick4 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(true);
    setIsActive5(false);
    if (onPageChange) {
      onPageChange(Number(4));
    }
  };
  const onClick5 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(true);
    if (onPageChange) {
      onPageChange(Number(5));
    }
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
      {/* <button
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        disabled
      >
        {DEMO_PAGINATION[0].label}
      </button> */}
      <button
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200  dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700  ${
          isActive1 ? "bg-primary-6000 text-white" : ""
        } ${twFocusClass()}`}
        onClick={onClick1}
      >
        {DEMO_PAGINATION[0].label}
      </button>
      <button
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200  dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700  ${
          isActive2 ? "bg-primary-6000 text-white" : ""
        } ${twFocusClass()}`}
        onClick={onClick2}
      >
        {DEMO_PAGINATION[1].label}
      </button>
      <button
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200  dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700  ${
          isActive3 ? "bg-primary-6000 text-white" : ""
        } ${twFocusClass()}`}
        onClick={onClick3}
      >
        {DEMO_PAGINATION[2].label}
      </button>
      <button
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200  dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700  ${
          isActive4 ? "bg-primary-6000 text-white" : ""
        } ${twFocusClass()}`}
        onClick={onClick4}
      >
        {DEMO_PAGINATION[3].label}
      </button>
      <button
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200  dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700  ${
          isActive5 ? "bg-primary-6000 text-white" : ""
        } ${twFocusClass()}`}
        onClick={onClick5}
      >
        {DEMO_PAGINATION[4].label}
      </button>
    </nav>
  );
};

export default Pagination;
