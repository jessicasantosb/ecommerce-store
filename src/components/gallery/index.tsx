"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import Image from "next/image";
import { GalleryTab } from "./gallery-tab";

export function Gallery({ images }: { images: ImageType[] }) { 
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="w-full max-w-2xl lg:max-w-none mx-auto mt-6 hidden sm:block">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="w-full aspect-square">
        {images.map(({ id, url }) => (
          <TabPanel key={id}>
            <div className="relative size-full aspect-square sm:rounded-lg overflow-hidden">
              <Image
                alt="produto"
                src={url}
                fill
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
