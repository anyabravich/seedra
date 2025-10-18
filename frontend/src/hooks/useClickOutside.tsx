import { useEffect, useRef } from "react";

interface UseClickOutsideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const useClickOutside = <T extends HTMLElement = HTMLDivElement>({
  isOpen,
  onClose,
}: UseClickOutsideProps) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return ref;
};
