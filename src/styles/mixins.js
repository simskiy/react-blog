import {color} from './global'


export const boxShadow = `
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;

export const formDlg = `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 385px;
  margin: auto;
  padding: 48px 32px;
  ${boxShadow}
`;

export const inputArticle = `
  box-sizing: border-box;
  border: 1px solid ${color.articleBorder};
  border-radius: 4px;
  padding: 8px 12px;
  color: ${color.text};
  font-size: 16px;
  font-weight: 400;
  width: 100%;

  &:active {
    outline: none;
    border: 1px solid ${color.articleBorder};
  }

  &:focus {
    outline: none;
    border: none;
    border: 1px solid ${color.articleBorder};
  }

  &:placeholder {
    color: ${color.articlePlaceholder};
  }
`
export const titleArticle = `
 color: ${color.articleText};
 font-size: 20px;
 font-weight: 500;
 text-align: center;
 margin: 0;
`
export const labelArticle = `
  font-size: 14px;
  color ${color.articleText};
  font-weight: 400;
`

const btn = `
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  cursor: pointer;
  background-color: inherit;
  
`

export const btnDelete = `
  ${btn}
  border-color: ${color.btnDelete};  
  color: ${color.btnDelete};
  width: 120px;
  &:hover {
    box-shadow: -2px -2px 7px ${color.btnDelete};
  }
`
export const btnAddTag = `
  ${btn}
  border-color: ${color.btnPrimary};
  color: ${color.btnPrimary};
  width: 135px;
  &:hover {
    box-shadow: -2px -2px 7px ${color.btnPrimary};
  }
`
export const btnSend = `
  ${btn}
  background-color: ${color.btnPrimary};
  color: white;
  width: 320px;
  border-color: ${color.btnPrimary};
  &:hover {
    box-shadow: -2px -2px 7px gray;
  }
`