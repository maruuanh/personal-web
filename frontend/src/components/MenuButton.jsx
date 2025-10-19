import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function MenuButton({ id, name, icon, onClick }) {
  return (
    <div id={id} className="group/item flex items-center relative">
      <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-200 ease-out pointer-events-none bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-[12px] font-medium  group-hover/item:-translate-y-3 group-hover/item:opacity-100   whitespace-nowrap z-20">
        {name}
      </Badge>
      {name === "ID" || name === "EN" ? (
        icon
      ) : (
        <Button
          variant="ghost"
          size="md"
          onClick={onClick}
          className="group/item py-4 hover:px-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 rounded-full hover:w-[calc(100%+5px)]"
        >
          {icon}
        </Button>
      )}
    </div>
  );
}
