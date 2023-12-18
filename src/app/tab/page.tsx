"use client";

import { useEffect, useRef, useState } from "react";
import * as style from "./sytyle.css";

const tabInfoArr = [
  {
    genre: "투어러",
    desc: "투어러 장르는 bmw motorrad의 긴 역사에서 빼놓을 수 없는 장르입니다.",
  },
  {
    genre: "슈퍼 스포츠",
    desc: "bmw motorrad 슈퍼 스포츠의 자랑스러운 모델 bmw s1000rr은 새로운 역사를 써내려가는 슈퍼 스포츠 모터사이클 입니다.",
  },
  {
    genre: "어드벤쳐",
    desc: "BMW Motorrad를 대표하는 어드벤쳐 장르입니다. 타브랜드와 비교할수 없는 최고의 경험을 선사합니다.",
  },
];

const TabPage = () => {
  const [activeMenu, setActiveMenu] = useState("전체");
  const [focusIndex, setFocusIndex] = useState<number | null>(0);
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
