import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HAND_AREAS } from "../constants/hand.areas";

export const Route = createFileRoute("/hand")({
  component: HandComponent,
});

const selectableAreas = HAND_AREAS;

function HandComponent() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const handleClick = (areaId: string) => {
    if (selectedAreas.includes(areaId)) {
      setSelectedAreas(selectedAreas.filter((id) => id !== areaId));
    } else {
      if (areaId === "others") {
        setSelectedAreas(["others"]);
      } else {
        setSelectedAreas([
          ...selectedAreas.filter((area) => area !== "others"),
          areaId,
        ]);
      }
    }
  };

  return (
    <div className="w-full flex justify-center my-12">
      <div className="relative md:height-[50%] md:w-auto height-auto bg-white rounded-xl shadow-lg p-8 overflow-hidden">
        <img
          onSelectCapture={(e) => e.stopPropagation()}
          src="/assets/hand/default-finger.png"
          alt="default photo for finger"
          className={`h-auto w-full ${
            selectedAreas.includes("others") ? "opacity-50" : "opacity-95"
          }`}
        />
        {selectedAreas.map((area) => (
          <img
            onSelectCapture={(e) => e.stopPropagation()}
            key={area}
            src={`/assets/hand/${area}-highlight.png`}
            alt={`${area} highlight`}
            className="absolute top-0 left-0 p-8"
          />
        ))}
        {selectedAreas.map((area) => {
          if (area !== "others")
            return (
              <img
                onSelectCapture={(e) => e.stopPropagation()}
                key={area}
                src={`/assets/hand/${area}-active.png`}
                alt={`${area} highlight`}
                className="absolute top-0 left-0 p-8"
              />
            );
        })}
        {selectableAreas.map((area) => (
          <div
            onSelectCapture={(e) => e.stopPropagation()}
            key={area.id + area.finger}
            className={`cursor-pointer rounded-full border absolute sm:w-${area.size.sm.width} sm:h-${area.size.sm.height} sm:top-[${area.position.sm.top}] sm:left-[${area.position.sm.left}] w-${area.size.default.width} h-${area.size.default.height} top-[${area.position.default.top}] left-[${area.position.default.left}]`}
            onClick={() => handleClick(area.id)}
          />
        ))}
      </div>
    </div>
  );
}
