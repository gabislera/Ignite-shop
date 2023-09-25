import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { IconButton, TooltipArrow, TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger } from './styles'

export function TooltipDemo({ content, children }) {
  return (
    <Tooltip.Provider>

      <TooltipRoot>
        <TooltipTrigger asChild>
          <IconButton>
            {children}
          </IconButton>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>

      </TooltipRoot>

    </Tooltip.Provider>
  );
};