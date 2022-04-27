import { styled } from 'styles/theme';

export const NavItems = styled('nav', {
  background: '$mediumBackground',
  width: '100%',
  minHeight: '3.5rem',
  color: '$gray50',
  transition: '$transitonTheme, border .4s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '2px solid $background',

  li: {
    listStyle: 'none',
  },

  'li + li': {
    paddingLeft: '$3',
  },

  'li a': {
    textDecoration: 'none',
    color: '$primary',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    transition: '$transitonTheme',

    '&:hover': {
      color: '$secondary',
    },
  },
});
