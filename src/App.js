/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

function App(props) {
  const theme = useTheme();
  const { isDark, setIsDark } = props;
  return (
    <div
      css={
        css`
        padding: 50px 0;
        background-color: ${theme.background};
        color: ${theme.text};
        text-align: center;
        height: 100vh;
        transition-duration: 0.2s;
        transition-property: background-color, color;
      `
      }
    >
      <h1>
        {`Привет! Это ${isDark ? 'тёмная' : 'светлая'} тема`}
      </h1>
      <h2>А теперь мы можем сделать немного магии</h2>
      <button
        type="submit"
        css={
          css`
          margin-top: 30px;
          border: 2px solid ${theme.buttonBorder};
          background-color: ${theme.buttonBg};
          color: ${theme.buttonText};
          padding: 14px 28px;
          font-size: 16px;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          cursor: pointer;

          :hover {
            background-color: ${theme.buttonBgHover};
            color: ${theme.buttonTextHover};
          }
        `
        }
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {`Изменить на ${isDark ? 'светлую' : 'тёмную'} тему`}
      </button>
    </div>
  );
}

export default App;
