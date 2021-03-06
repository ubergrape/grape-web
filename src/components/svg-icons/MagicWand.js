import PropTypes from 'prop-types'
import React from 'react'

const colors = {
  dark: [
    '#0B69C6',
    '#0080FF',
    '#032950',
    '#99449B',
    '#8C448E',
    '#B158B3',
    '#954197',
  ],
  light: [
    '#FFEAC6',
    '#FFEAC6',
    '#FFEAC6',
    '#F5A623',
    '#F5A623',
    '#F5A623',
    '#F5A623',
  ],
}

const MagicWand = ({ variant, ...rest }) => (
  <svg
    width="24"
    height="24"
    viewBox="284 335 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill={colors[variant][0]}
        d="M298.952 344.048l-.971-.302-13.504 12.823a1.382 1.382 0 1 0 1.955 1.954l12.822-13.503-.302-.972z"
      />
      <path
        fill={colors[variant][1]}
        d="M284.477 356.57c-.09.089-.159.19-.218.294.06.105.129.206.218.296.54.539 1.414.539 1.955 0l12.466-13.13-.917-.284-13.504 12.823z"
      />
      <path
        fill={colors[variant][2]}
        d="M297.98 343.746l-2.577 2.447 1.07.333.334 1.07 2.447-2.576-.302-.972z"
      />
      <path
        fill={colors[variant][3]}
        d="M307.823 344.302a.962.962 0 0 0-.086-1.012l-2.01-2.693 1.079-3.183c.235-.694-.526-1.454-1.219-1.22l-3.184 1.08-2.694-2.011a.96.96 0 0 0-1.535.783l.043 3.36-2.744 1.942a.962.962 0 0 0 .27 1.703l3.21.997.997 3.211a.969.969 0 0 0 .768.664.963.963 0 0 0 .934-.395l1.942-2.744 3.361.043a.96.96 0 0 0 .868-.525z"
      />
      <path
        fill={colors[variant][4]}
        d="M305.587 336.194l-3.184 1.08-2.694-2.012a.96.96 0 0 0-1.535.784l.043 3.36-2.744 1.942a.962.962 0 0 0 .27 1.702l3.21.998 7.592-7.592c-.248-.248-.612-.38-.958-.262z"
      />
      <path
        fill={colors[variant][5]}
        d="M303.583 344.797l3.371.03a.96.96 0 0 0 .783-1.537l-2.011-2.693 1.08-3.183c.234-.694-.526-1.454-1.22-1.22l-3.183 1.08-.017-.013 1.197 7.536z"
      />
      <path
        fill={colors[variant][6]}
        d="M302.845 340.155l3.7-3.699c-.248-.248-.611-.379-.958-.262l-3.184 1.08-.017-.013.46 2.894z"
      />
    </g>
  </svg>
)

MagicWand.propTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
}

MagicWand.defaultProps = {
  variant: 'dark',
}

export default MagicWand
