//"use client"

import clsx from "clsx";
import { Details } from "./details";

export default function ExampleDetails() {
  const items = [
    {
      title: "How to protect your personal information?",
      content:
        "You are in control of how much information you share on X or any other website. Don’t post information you consider to be private, and be thoughtful about when you want to publicly share your location.",
    },
    {
      title: "How to share and watch videos on X?",
      content:
        "Record: You can record, edit and share videos from the X app (X for iPhone or X for Android OS 4.1 and higher).",
    },
    {
      title: "How to post?",
      content:
        "Type your X (up to 280 characters) into the compose box at the top of your Home timeline, or select the X button in the navigation bar.",
    },
    {
      title: "How to add your phone number to your account",
      content:
        "Click the More icon and select Settings and privacy from the drop-down menu. Click on Your account tab and choose Account information. Select Phone from the drop-down menu.",
    },
  ];

  return (
    <div className="flex px-8 pt-24 md:px-0">
      <Details className="mx-auto max-w-2xl">
        {items.map((item, index) => (
          <Details.Item key={index} className="group border-b border-white/10">
            {({ isActive, toggle }) => (
              <>
                <div
                  className="flex cursor-pointer items-center py-4 pr-4"
                  onClick={toggle}
                >
                  <div className="text-base text-white/75 transition group-hover:text-white">
                    {item.title}
                  </div>

                  <div className="relative ml-auto"></div>
                </div>

                <Details.Content className="overflow-hidden transition-all duration-500 will-change-[height]">
                  <p className="space-y-3 pb-4 text-base leading-relaxed text-[--tw-prose-body]">
                    {item.content}
                  </p>
                </Details.Content>
              </>
            )}
          </Details.Item>
        ))}
      </Details>
    </div>
  );
}
