// app/story/page.tsx など
"use client";

import { useState, useCallback } from "react";

const stories = [
  {
    id: 1,
    content: (
      <div>
        <h3>コーヒー(ice)</h3>
        <p>
          珈琲豆はグレードの最も高いと言われる
          <br />
          “スペシャルティーコーヒー”を使用しております。
        </p>
      </div>
    ),
    bg: "/img/home_image_slide_4.jpg",
  },
  {
    id: 2,
    bg: "/img/menu_image_latte(hot).jpg",
    text: "2枚目のストーリー",
  },
  {
    id: 3,
    bgColor: "#5b2c83",
    text: "3枚目のストーリー",
  },
];

export default function StoryViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 < stories.length ? prev + 1 : prev));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  const story = stories[currentIndex];

  return (
    <div
      className="story-wrapper"
      style={{
        backgroundImage: `url(${story.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="story-content">{story.content}</div>

      <button className="story-hit-area left" onClick={goPrev} />
      <button className="story-hit-area right" onClick={goNext} />
    </div>
  );
}
