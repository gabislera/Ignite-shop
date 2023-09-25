import { styled, keyframes } from "@stitches/react"
import * as Tooltip from '@radix-ui/react-tooltip';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: 5,
  padding: '12px 16px',
  fontSize: 15,
  lineHeight: 1,
  color: '$white',
  backgroundColor: '$gray900',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
  },
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: 6,
  padding: '16px 26px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  backgroundColor: '$gray800',
  '&:hover': { backgroundColor: '$gray900' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

