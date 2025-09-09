import React, { useState, useCallback, useMemo } from "react";
import { MdWorkHistory } from "react-icons/md";
import ContentCards from "@/app/components/content-cards"; // make sure this is default export
import { IconType } from "react-icons/lib";
import { DropdownMenu } from "./data-table";





interface ContentCardProps {
  id: string;
  isFavorite: boolean;
  icon: IconType;
  title: string;
  date?: Date;
  content?: string;
  tags?: string[];
  onFavoriteClick?: () => void;
  onTitleClicked?: () => void;
  dropDownMenu?:  DropdownMenu<ContentCardProps>;
}

//const dropDownMenu = undefined; // optional if your cards can handle it

const ContentCardList: React.FC = () => {
  const allCards: ContentCardProps[] = [
    {
      id: crypto.randomUUID(),
      isFavorite: false,
      icon: MdWorkHistory,
      title: "My Travel Notes",
      date: new Date(),
      content: "Visited Paris and saw the Eiffel Tower. The food was amazing!",
      tags: ["Travel", "Europe"],
    },
    {
      id: crypto.randomUUID(),
      isFavorite: false,
      icon: MdWorkHistory,
      title: "Work Meeting",
      date: new Date(),
      content: "Discussed Q3 goals and project timelines.",
      tags: ["Work"],
    },
    {
      id: crypto.randomUUID(),
      isFavorite: false,
      icon: MdWorkHistory,
      title: "Work Meeting",
      date: new Date(),
      content: "Discussed Q3 goals and project timelines.",
      tags: ["Work"],
    },
  ];

  const [cards, setCards] = useState<ContentCardProps[]>(allCards);

  const handleFavoriteToggle = useCallback((id: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFavorite: !card.isFavorite } : card
      )
    );
  }, []);

  const handleTitleClick = useCallback((id: string) => {
    console.log("Title clicked for card:", id);
  }, []);

  const processedCards = useMemo(
    () =>
      cards.map((card) => ({
        ...card,
        dropDownMenu,
        onFavoriteClick: () => handleFavoriteToggle(card.id),
        onTitleClicked: () => handleTitleClick(card.id),
      })),
    [cards, handleFavoriteToggle, handleTitleClick]
  );

  return (
    <div>
      <ContentCards
        gridLayout={true}
        cards={processedCards}
        showContent={true}
        showFooter={true}
        onTitleClicked={(id: string) => console.log("Clicked from ContentCards", id)}
      />
    </div>
  );
};

export default ContentCardList;


