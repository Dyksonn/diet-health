import styled, { css } from 'styled-components/native';

type PropsComponent = {
  outline?: boolean;
}

export const Container = styled.TouchableOpacity<PropsComponent>`
  ${({ theme, outline }) => {
    if (outline) {
      return css`
        flex-direction: row;
        gap: 12px;
        padding: 16px 24px;
        align-items: center;
        justify-content: center;
        border-width: 1px;
        border-color: ${theme.COLORS.GRAY_100};
        border-radius: 6px;
      `;
    } else {
      return css`
        flex-direction: row;
        gap: 12px;
        padding: 16px 24px;
        align-items: center;
        justify-content: center;
        background-color: ${theme.COLORS.GRAY_200};
        border-radius: 6px;
      `;
    }
  }}
  
`;

export const Title = styled.Text<PropsComponent>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme, outline }) => outline ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
`;