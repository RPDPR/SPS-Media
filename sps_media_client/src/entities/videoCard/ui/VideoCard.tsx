import { FC } from "react";
import { Skeleton } from "@/shared/ui/skeleton/index";

export const VideoCard: FC = () => {
  return (
    <div>
      <Skeleton className="w-full aspect-video overflow-hidden" />
    </div>
  );
};
