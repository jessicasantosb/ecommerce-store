import { Billboard as BillboardType } from "@/types";

export function Billboard({ data }: { data: BillboardType }) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="size-full flex flex-col items-center justify-center gap-y-8 text-center">
          <h3 className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </h3>
        </div>
      </div>
    </div>
  );
}
