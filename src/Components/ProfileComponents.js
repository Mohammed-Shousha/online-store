import styled from 'styled-components'
import { device } from '../Data/Constants'

export const ProfileContainer = styled.div`
    width: 82%;
	margin: 2em auto;
	padding: 0.5em 0.75em;
	border-radius: 5px;
	border: 1.5px solid #385A5C;
	background: white;

    @media ${device.tablet}{
        width: 75%;
    }

    @media ${device.laptopS}{
        width: 90%;
    }

    /* title */
    h3{
        text-align: left;
        font-size: 0.9em;

        @media ${device.tablet}{
            font-size: 1.15em;
        }

        @media ${device.laptop}{
            font-size: 1.25em;
        }

        @media ${device.laptopL}{
            font-size: 1.45em;
        }
    }
`
export const ProfileDetails = styled.div`
    width: ${props => props.changePassword ? '' : '100%'};
    margin: ${props => props.changePassword ? '1.5em 0.5rem' : ''};
    pointer-events:${props => props.readOnly ? 'none' : ''};

    @media ${device.laptopS}{
        width:${props => props.changePassword ? '' : '47%'};
    }

    /* field label */
    p{
        color: #555752;
        font-size: 0.8em;
        text-align: left;

        @media ${device.tablet}{
            font-size: 0.95em;
        }

        @media ${device.laptop}{
            font-size: 1.05em;
        }

        @media ${device.laptopL}{
            font-size: 1.2em;
        }
    }

    /* field */
    input{
        width: 100%;
        font-size: 1em;
        margin-bottom: 0.5em;
        border: none;
        border-bottom: 1px solid grey;
        outline: none;
        color : ${props => props.readOnly ? '#555752' : 'black'};

        @media ${device.tablet}{
            font-size: 1.15em;
        }

        @media ${device.laptop}{
            font-size: 1.25em;
        }

        @media ${device.laptopL}{
            font-size: 1.5em;
        }

    }

    /*email warning */
    h6{
        font-size: 0.65em;
        color: #555752;
        text-align: left;
        margin: 0;
        font-style: italic;

        @media ${device.laptop}{
            font-size: 0.8em;
        }

        @media ${device.laptopL}{
            font-size: 0.9em;
        }
    }
`

export const ProfileButton = styled.button`
    margin: 2em 0 1em ;
    border-radius: 2px;
    border:1px solid grey;
    background: white;
    color:${props => props.color};
    padding: 0.65em 1.25em;
    outline: none;
    font-size: 0.75em;
    font-weight: bold;
    cursor: pointer;

    @media ${device.tablet}{
        font-size: 0.9em;
    }

    @media ${device.laptopS}{
        margin: 2em 0.75em 1em;
    }

    @media ${device.laptop}{
        font-size: 1em;
    }

    @media ${device.laptopL}{
        font-size: 1.15em;
        padding: 0.75em 1.5em ;
    }
`

export const ChangePasswordContainer = styled.div`
    position: fixed;
	top: 7.5vh;
	right: 0;
	left: 0;
	width: 75%;
	margin: auto;
	border-radius: 3px;
	background: white;
	border: 1px solid red;
	padding: 2rem 1rem;

    @media ${device.tablet}{
        width: 22em;
    }

    @media ${device.laptopS}{
        width: 25em;
    }

    @media ${device.laptop}{
        top: 9.5vh;
    }

    @media ${device.laptopL}{
        width: 30em;
    }


    > div {
        line-height: 1em;
        
        /* change password */
        h3{
            font-size: 0.9em;

            @media ${device.tablet}{
                font-size: 1.15em;
            }

            @media ${device.laptop}{
                font-size: 1.25em;
            }

            @media ${device.laptopL}{
                font-size: 1.45em;
            }
        }
        
        p{
            font-size: 0.65em;

            @media ${device.laptop}{
                font-size: 0.8em;
            }

            @media ${device.laptopL}{
                font-size: 0.9em;
            }
        }
    }
`

export const ChangePasswordButton = styled(ProfileButton)`
    width: 45%;
    padding: 1em;
    margin: 1em ;

    @media ${device.laptopL}{
        padding: 1em 0.75em;
    }
`