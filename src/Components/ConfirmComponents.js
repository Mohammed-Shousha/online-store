import styled from 'styled-components'
import { device } from '../Data/Constants'

export const ConfirmContainer = styled.div `
  margin: 20vh 1em;
  font-size: 0.6em;

  @media ${device.tablet}{
    font-size: 0.75em;
  }

  @media ${device.laptopS}{
    font-size: 0.85em;
  }

  @media ${device.laptop}{
    font-size: 0.9em;
  }

  @media ${device.desktop}{
    font-size: 1em;
  }
`

export const ConfirmTitle = styled.h1 `

  font-size: 1em;

  @media ${device.tablet}{
    font-size: 1.2em;
  }

  @media ${device.laptopS}{
    font-size: 1.4em;
  }

  @media ${device.laptop}{
    font-size: 1.6em;
  }

  @media ${device.desktop}{
    font-size: 1.9em;
  }
`

export const ConfirmNav = styled.nav `
  position: fixed;
  top:0;
  left:0;
  right:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c60000;
  color: white;
  z-index:9999;
  height: 2.25em;
  font-size: 0.6em;

  @media ${device.tablet}{
    font-size: 0.7em;
    height: 2em;
  }

  @media ${device.laptopS}{
    font-size: 0.8em;
    height: 1.75em;
  }

  @media ${device.laptop}{
    font-size: 0.9em;
  }

  @media ${device.laptopL}{
    font-size: 1em;
    height: 1.5em;
  }

  p{ 
    margin: 0 12px;

    @media ${device.tablet}{
      margin: 0 15px;
    }
  }

  img{
    position: absolute;
    right: 0;
    width: 12px;

    @media ${device.tablet}{
      width: 15px;
    }

    @media ${device.laptopL}{
      width: 18px;
    }
  }
`