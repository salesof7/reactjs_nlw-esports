import React from "react";
import * as Select from "@radix-ui/react-select";

import { CaretDown, CaretUp, Check } from "phosphor-react";

interface Game {
  id: string;
  title: string;
}

interface SelectProps extends Select.SelectContentProps {
  type: "" | "radix";
  games: Game[];
}

export function CustomSelect({ type, games, ...rest }: SelectProps) {
  return type !== "radix" ? (
    <select
      name="game"
      id="game"
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
      defaultValue=""
    >
      <option disabled value="">
        Selecione o game que deseja jogar
      </option>

      {games.map((game) => {
        return (
          <option key={game.id} value={game.id}>
            {game.title}
          </option>
        );
      })}
    </select>
  ) : (
    <Select.Root>
      <Select.Trigger aria-label="game">
        <Select.Value placeholder="Select a game…" />
        <Select.Icon>
          <CaretDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton>
            <CaretUp />
          </Select.ScrollUpButton>

          <Select.Viewport>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>

              <Select.Item value="apple">
                <Select.ItemText>Apple</Select.ItemText>
                <Select.ItemIndicator>
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
