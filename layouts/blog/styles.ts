import { styled } from 'styles/theme';

export const BlogContainerPosts = styled('div', {
  display: 'flex',
});

export const LayoutCSS = styled('div', {
  background: 'var(--background)',
  minHeight: '100vh',
  transition: 'background 0.35s, color 0.35s ease',
  width: '100%',
  margin: '0 auto',
  paddingLeft: '0',

  '@bp5': {
    paddingLeft: '13rem',
  },
});
