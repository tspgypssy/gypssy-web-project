import cs from "classnames";
import { useCallback, useRef, useState } from "react";

export const Dropdown = ({ title, items, className = "",ulClassName=" " }) => {
  const [dropdownState, setDropdownState] = useState<"open" | "closed">(
    "closed"
  );

  const toggle = useCallback(() => {
    setDropdownState((old) => (old === "closed" ? "open" : "closed"));
  }, []);
  return (
  
    <div    className={cs(`dropdown dropdown-end`, 
      [className]
    )} onClick={toggle} >
      <label tabIndex={0} className="cursor-pointer">
        {title}
      </label>
      {dropdownState === "open" && (
        <ul
          tabIndex={0}
          className={cs(
            `dropdown-content menu bg-super-flyouts  rounded-lg mt-[6px]`,
            {[ ulClassName]:ulClassName !=null,' w-44 ':ulClassName ==" "}
          )}
        >
          {items.map((item) => (
            <li className={item.class != null && item.class} key={item.key || item.value}>
              <button
                onClick={item.onClick}
                className="py-3 px-4"
              >
             {item.icon != null && <item.icon/>   }
              {item.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
