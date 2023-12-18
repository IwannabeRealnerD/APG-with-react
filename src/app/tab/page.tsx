"use client";

import { useEffect, useRef, useState } from "react";
import * as style from "./sytyle.css";

const tabInfoArr = [
  {
    genre: "Tourer",
    desc: "Tourer genre is an indispensable genre in the long history of bmw motorrad.",
  },
  {
    genre: "Super Sports",
    desc: "The proud model of bmw s1000rr, the Super Sports motorcycle, is writing a new history in the Super Sports.",
  },
  {
    genre: "adventurer",
    desc: "It is the adventurer genre that represents BMW Motorrad. It offers an incomparable best experience compared to other brands.",
  },
] as const;

type GenreType = (typeof tabInfoArr)[number]["genre"];

const TabPage = () => {
  const [activeMenu, setActiveMenu] = useState<GenreType>("Tourer");
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const tabRefList: React.MutableRefObject<
    Map<number, HTMLButtonElement>
  > = useRef(new Map());

  useEffect(() => {
    if (focusIndex === null) {
      return undefined;
    }

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        const nextIndex =
          focusIndex + 1 === tabInfoArr.length ? 0 : focusIndex + 1;
        setFocusIndex(nextIndex);
        setActiveMenu(tabInfoArr[nextIndex].genre);
        tabRefList.current.get(nextIndex)?.focus();
        return;
      }
      if (e.key === "ArrowLeft") {
        const nextIndex =
          focusIndex === 0 ? tabInfoArr.length - 1 : focusIndex - 1;
        setFocusIndex(nextIndex);
        setActiveMenu(tabInfoArr[nextIndex].genre);
        tabRefList.current.get(nextIndex)?.focus();
      }
    };
    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [focusIndex]);

  return (
    <main className={style.container}>
      <h2>BMW Motorrad</h2>
      <div role="tablist">
        {tabInfoArr.map(({ genre }, index) => {
          const isSelected = genre === activeMenu;
          return (
            <button
              key="tab"
              type="button"
              tabIndex={isSelected ? 0 : -1}
              aria-selected={isSelected}
              id={`tab-${index + 1}`}
              role="tab"
              aria-controls={`tabpanel-${index + 1}`}
              onFocus={() => setFocusIndex(index)}
              onBlur={() => setFocusIndex(null)}
              ref={(domNode) => {
                if (domNode) {
                  tabRefList.current.set(index, domNode);
                  return;
                }
                tabRefList.current.delete(index);
              }}
              onClick={() => {
                setActiveMenu(genre);
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      {tabInfoArr.map(({ genre, desc }, index) => {
        const isSelected = genre === activeMenu;
        const key = `tabpanel-${index + 1}`;
        return (
          <div
            key={key}
            id={key}
            tabIndex={0}
            role="tabpanel"
            aria-labelledby={`tab-${index + 1} ${key}`}
            aria-label="에 대한 설명"
            hidden={!isSelected}
          >
            <p>{desc}</p>
          </div>
        );
      })}
    </main>
  );
};

export default TabPage;
