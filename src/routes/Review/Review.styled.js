import styled, { css } from 'styled-components'
import LogoImage from './Logo.png'

export const Container = styled.div`
  box-sizing: border-box;
  color: #333;
  display: flex;
  font: 12px/1 Helvetica;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  padding: 2rem;
  width: 100vw;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;  
  }
  
  * {
    box-sizing: border-box;
  }  
`

export const LeftPanel = styled.div`
  background: #f1f2f2;
  flex: 1 1 auto;
  overflow: auto;
  padding: 2rem;
  width: 100%;
  
  @media only screen and (min-width: 768px) {
    width: auto;  
  }
`

export const RightPanel = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  
  @media only screen and (min-width: 768px) {
    max-width: 30rem;
    padding-left: 2rem;  
  }
`

export const PanelContent = styled.div`
  > *:last-child {
    margin-bottom: 0;
  }
  
  blockquote, h1, h2, h3, p, pre {
    margin-bottom: 2rem;
  }
  
  img {
    height: auto;
    max-width: 100%;
  }
  
  h1, h2, h3 {
    font-weight: bold;
  }
  
  h1 {
    border-bottom: 1px solid lightgray;
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  p {
    font-size: 1rem;
  }
  
  strong {
    font-weight: bold;
  }
  
  em {
    font-style: italic;
  }
  
  code, pre {
    font-family: monospace,monospace;
    font-size: 1em;
  }
  
  code {
    background-color: rgba(27,31,35,.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: .2em .4em;
  }
  
  blockquote {
    border-left: .25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
  }
  
  ul {
    margin-bottom: 2rem;
    padding-left: 1rem;
  }
  
  li {
    font-size: 1rem;
    list-style: disc;
    margin-bottom: 1rem;
  }
`

export const Form = styled.form`
  flex: 0 1 auto;
`

export const Card = styled.div`
  background: #222;
  border-radius: .25rem;
  color: white;
  margin-bottom: 2rem;
`

export const CardHeader = styled.header`
  align-items: center;
  background: rgba(255, 255, 255, .1);
  display: flex;
  padding: 2rem;
`

export const CardContent = styled.div`
  padding: 2rem;
  
  textarea {
    font-size: 1rem;
    height: 10rem;
    margin-bottom: 2rem;
    padding: 1rem;
    width: 100%;
  }
`

export const Avatar = styled.div`
  background-image: url(${({ url }) => url});
  background-size: cover;
  border: .125rem solid white;
  border-radius: 100%;
  margin-right: 1rem;
  height: 3rem;
  width: 3rem;
`

export const LogoWrapper = styled.div`
  align-item: center;
  display: flex;
  justify-content: center;
  padding: 2rem;
`

export const Logo = styled.div`
  align-self: center;
  background-image: url(${LogoImage});
  background-size: cover;
  height: 90px;
  width: 90px;
`

export const Approval = styled.div`
  align-items: center;
  border: 1px solid white;
  border-radius: .8125rem;
  display: flex;
  flex: none;
  height: 1.75rem;
  padding: 0 .5rem;
`

export const NameWrapper = styled.div`
  flex: 1 1 auto;
`

export const Name = styled.div`
  font-size: 1.2rem;  
  font-weight: bold;
  margin-bottom: .25rem;
`

export const Time = styled.div`
  color: #ccc;
`

export  const ToggleButton = styled.div`
  align-items: center;
  border: .125rem solid white;
  border-radius: 1.5rem;
  cursor: pointer;
  display: flex;
  height: 3rem;
  position: relative;
  
  &:before {
    background: white;
    border-radius: 1.5rem;
    content: '';
    height: 3rem;
    left: 50%;
    position: absolute;
    transition: left .125s linear;
    width: 50%;
  }
  
  > div {
    flex: 1 1 50%;
    font-size: .8125rem;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    transition: color .125s linear;
    width: 50%;
    
    &:last-child {
      color: #222;
    }
  }
  
  ${({approved}) => approved && css`
    &:before {
      left: 0;
    }
  
    > div {
      color: white;
      
      &:first-child {
        color: #222;
      }
      
      &:last-child {
        color: white;
      }
    }
  `}
`

export const Button = styled.button`
  background: ${({ approved }) => approved ? '#539562' : '#CB4455'};
  border: none;
  border-radius: .25rem;
  box-shadow: inset 0 0 0 2rem rgba(255, 255, 255, .6);
  color: white;
  cursor: pointer;
  font-size: .8125rem;
  font-weight: bold;
  height: 6rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;
`
