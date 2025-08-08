import { FC } from "react";
import { VideoCard } from "@/entities/videoCard/index";

export const videoData = [
  {
    id: 1,
    name: "Nikita",
  },
  {
    id: 2,
    name: "Nikita 2",
  },
  {
    id: 3,
    name: "Nikita 3",
  },
  {
    id: 4,
    name: "Nikita 4",
  },
  {
    id: 5,
    name: "Nikita 5",
  },
  {
    id: 6,
    name: "Nikita 6",
  },
  {
    id: 7,
    name: "Nikita 7",
  },
  {
    id: 8,
    name: "Nikita 8",
  },
  {
    id: 9,
    name: "Nikita 9",
  },
  {
    id: 10,
    name: "Nikita 10",
  },
  {
    id: 11,
    name: "Nikita 11",
  },
  {
    id: 12,
    name: "Nikita 12",
  },
  {
    id: 13,
    name: "Nikita 13",
  },
  {
    id: 14,
    name: "Nikita 14",
  },
  {
    id: 15,
    name: "Nikita 15",
  },
  {
    id: 16,
    name: "Nikita 16",
  },
];

export const VideoList: FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-4">
      {videoData.map((el) => {
        return (
          <div key={el.id}>
            <VideoCard key={el.id} />
            <h2 className="pl-3 text-white">{el.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
