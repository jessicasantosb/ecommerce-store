import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

export function GalleryTab({ image }: { image: ImageType }) {
  return (
    <Tab className="relative flex items-center justify-center aspect-square cursor-pointer rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute size-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              alt="produto"
              src={image.url}
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
}
