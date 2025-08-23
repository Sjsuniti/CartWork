// import { useEffect, RefObject } from "react";

// export function useClickOutside(
//     ref: RefObject<HTMLElement>,
//     callback: ()=> void,
//     enabled: boolean = true
// ) {
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (ref.current && !ref.current.contains(event.target as Node)) {
//                 callback();
//             }
//         };

//         if (enabled) {
//             document.addEventListener("mousedown", handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [ref, callback, enabled]);
// }

import { useEffect, RefObject } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  enabled: boolean = true
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (enabled) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, enabled]);
}
