import React, { ReactNode, FC, MouseEventHandler } from 'react'
import { css } from "@stitches/react";
import { ButtonSize, ButtonStyle, ButtonVariant } from "./enums"

interface ButtonProps {
  variant?: ButtonVariant,
  style?: ButtonStyle,
  size?: ButtonSize,
  children: ReactNode,
  onClick: MouseEventHandler
}

const buttonCss = css({

  appearance: 'none',
  border: 0,
  borderRadius: '$4',
  lineHeight: "$2",
  fontWeight: "$2",
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  outline: 'none',
  fontFamily: '$untitled',
  transition: 'all .5s',

  '&:hover': {
    transform: 'translate3d(0, -1px, 0)',
    boxShadow: '$1'
  },

  variants: {
    color: {
      primary:{
        backgroundColor: "$solidNormalBackground",
        color: '$white'
      }
    },

    style: {
      solid: {},
      outlined: {
        border: '1px solid $border',
      },
      link: {}
    },

    size: {
      small: {
        padding: '$2 $3',
        fontSize: "$3",
      },
      default: {
        padding: '$2 $4',
        fontSize: "$4",
        fontWeight: "$3",
      },
      large: {
        padding: '$3 $5',
        fontSize: "$5",
        fontWeight: "$3",
      },
    }
  },

  compoundVariants: [
    {
      color: 'primary',
      style: 'solid',
      css: {
        '&:hover': {
          backgroundColor: "$solidHoverBackground",
        },
        '&:focus': {
          backgroundColor: "$solidPressedBackground",
        }
      }
    },
    {
      color: 'primary',
      style: 'outlined',
      css: {
        color: '$colorTextLowContrast',
        backgroundColor: "$subtleNormalBackground",

        '&:hover': {
          borderColor: '$borderHover',
          backgroundColor: "$subtleHoverBackground",
        },

        '&:focus': {
          borderColor: '$borderHover',
          backgroundColor: "$subtlePressedBackground",
        }
      }
    },
    {
      color: 'primary',
      style: 'link',
      css: {
        color: '$colorTextLowContrast',
        backgroundColor: "$white",

        '&:hover': {
          backgroundColor: "$subtleHoverBackground",
        },

        '&:focus': {
          backgroundColor: "$subtlePressedBackground",
        }
      }
    }
  ]
})

const Button: FC<ButtonProps> = ({ variant, style, size, children, onClick }) => {

  const color = variant || ButtonVariant.PRIMARY;
  style = style || ButtonStyle.SOLID;
  size = size || ButtonSize.DEFAULT;

  return <button
    className={
      buttonCss({
        color,
        style,
        size
      })
    }
    onClick={onClick}
  >
    {children}
  </button>
}

export default Button
