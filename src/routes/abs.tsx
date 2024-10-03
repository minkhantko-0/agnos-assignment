import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ABS_AREAS } from "../constants/abs.areas";

export const Route = createFileRoute("/abs")({
  component: AbsComponent,
});

const selectableAreas = ABS_AREAS;

function AbsComponent() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const handleClick = (areaId: string) => {
    if (selectedAreas.includes(areaId)) {
      // If already selected, deselect
      if (areaId === "all-over") {
        setSelectedAreas([]);
      } else {
        setSelectedAreas([
          ...[...selectedAreas.filter((id) => id !== areaId)].filter(
            (id) => id !== "all-over"
          ),
        ]);
      }
    } else {
      // Add to selected areas
      if (areaId === "all-over") {
        setSelectedAreas([...selectableAreas.map((area) => area.id)]);
      } else {
        const selectedAreaArr = [...selectedAreas, areaId];
        if (selectedAreaArr.length === selectableAreas.length - 1)
          setSelectedAreas([...selectedAreaArr, "all-over"]);
        else setSelectedAreas(selectedAreaArr);
      }
    }
  };

  return (
    <div className="w-full flex justify-center my-12">
      <div className="relative md:height-[50%] md:w-auto height-auto xs:w-full bg-white rounded-xl shadow-lg">
        <img
          onSelectCapture={(e) => e.stopPropagation()}
          src="/assets/abdomen/default-abs.png"
          alt="default photo for abs"
          className="h-auto w-full "
        />
        {selectedAreas.map((area) => (
          <img
            onSelectCapture={(e) => e.stopPropagation()}
            key={area}
            src={`/assets/abdomen/${area}-highlight.png`}
            alt={`${area} highlight`}
            className="absolute top-0 left-0 "
          />
        ))}

        {!selectedAreas.includes("all-over") &&
          selectedAreas.map((area) => {
            if (area !== "all-over")
              return (
                <img
                  onSelectCapture={(e) => e.stopPropagation()}
                  key={area}
                  src={`/assets/abdomen/${area}-active.png`}
                  alt={`${area} highlight`}
                  className="absolute top-0 left-0 p-8"
                />
              );
          })}

        {selectableAreas.map((area) => (
          <div
            key={area.id}
            className={`cursor-pointer rounded-full absolute sm:w-${area.size.sm.width} sm:h-${area.size.sm.height} sm:top-[${area.position.sm.top}] sm:left-[${area.position.sm.left}] w-${area.size.default.width} h-${area.size.default.height} top-[${area.position.default.top}] left-[${area.position.default.left}]`}
            onClick={() => handleClick(area.id)}
          />
        ))}
      </div>
    </div>
  );
}
