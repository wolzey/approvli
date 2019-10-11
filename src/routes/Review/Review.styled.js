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
  
  h1, h2, p {
    margin-bottom: 2rem;
  }
  
  img {
    height: auto;
    max-width: 100%;
  }
  
  h1, h2 {
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
  
  p {
    font-size: 1rem;
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
    height: 10rem;
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
  margin-bottom: 2rem;
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
