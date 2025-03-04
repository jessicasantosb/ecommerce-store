"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Color, Size } from "@/types";

import { Filter } from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filtros <Plus size={20} />
      </Button>

      <Dialog
        open={isOpen}
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 flex z-40">
          <DialogPanel className="relative size-full max-w-xs ml-auto py-4 pb-6 flex flex-col overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Tamanhos" data={sizes} />
              <Filter valueKey="colorId" name="Cores" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
