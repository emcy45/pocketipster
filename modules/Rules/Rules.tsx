"use client";

import { H1, H2, H3 } from "@/components/Primitives/Headings";
import { List } from "@/components/Primitives/List";
import { Paragraph } from "@/components/Primitives/Paragraph";
import { FunctionComponent, useState } from "react";
import { ArrowDownFromLine, ArrowUpFromLine, BookOpen } from "lucide-react";

export const Rules: FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <H1 className="justify-center p-4">Reguły gry:</H1>

      <div className="flex flex-col justify-center">
        <button
          className="flex items-center justify-center text-secondary-500  focus:outline-none font-medium"
          onClick={handleToggle}
        >
          <span className="mr-2">
            {isExpanded ? <ArrowUpFromLine /> : <BookOpen />}
          </span>
          {isExpanded ? "Zwiń" : "Czytaj"}
        </button>
        <ol
          className={`list-decimal list-inside ${
            isExpanded ? "visible" : "hidden"
          }`}
        >
          <List>
            Dołączyć do gry można w każdym momencie, lecz pozbawiamy się wtedy
            możliwych bonusów za poprawne wytypowanie zwycięzcy Mistrzostw oraz
            króla strzelców.
          </List>
          {isExpanded && (
            <>
              <List>
                Trafienie dokładnego wyniku jakim zakończyło się spotkanie
                <b className="font-bold"> 3 pkt</b>. Trafienie rozstrzygnięcia
                (zwycięstwo, remis, porażka) <b className="font-bold"> 1 pkt</b>
                .
              </List>
              <List>
                Wytypowanie zwycięzcy Mistrzostw
                <b className="font-semibold"> +6 pkt</b>, króla strzelców
                <b className="font-semibold"> +6pkt</b> (typy możliwe do
                14.06.2024r. godz. 21:00)
              </List>
              <List>
                Typować lub zmieniać typ można do momentu rozpoczęcia danego
                meczu.
              </List>
              <List>W fazie pucharowej typujemy wynik do 90 minuty.</List>
              <Paragraph className="italic">
                Przykład: Szkocja wygrała z Niemcami 5-0. Za wytypowanie
                dokładnego wyniku, gracz dostaje 3 punkty, za wytypowanie wyniku
                np. 2-1 dla Szkocji, zawodnik dostaje 1pkt. Za ustawienie remisu
                lub porażki Szkotów, zawodnik nie dostaje punktów.
              </Paragraph>
            </>
          )}
        </ol>
      </div>
    </>
  );
};
