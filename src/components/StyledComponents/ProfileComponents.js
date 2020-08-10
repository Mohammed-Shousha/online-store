import styled from 'styled-components'

export const ProfileContainer = styled.div`
    width: 85vw;
	border-radius: 5px;
	border: 2px solid #385A5C;
	margin: auto;
	margin-top: 2.5rem;
	margin-bottom: 3rem;
	padding: 0.5rem 1rem;
	background: white;
    h3{
        text-align:left;
    }
`
export const ProfileDetails = styled.div `
    
    width: ${props => props.changePassword? '':'45%'};
    margin: ${props => props.changePassword ? '2.5rem 0.5rem': ''};
    pointer-events:${props => props.readOnly ? 'none' : ''};

    p{
        color: #555752;
        font-size: 15px;
        text-align: left;
    }

    input{
        width: 100%;
        border: none;
        border-bottom: 1px solid grey;
        font-size: 20px;
        outline: none;
        color : ${props => props.readOnly? '#555752': 'black'};
    }
`

export const ProfileText = styled.h6 `
    color: ${props => props.error ? 'red' : '#555752'};
    font-size: 12px;
    text-align: left;
    font-weight:normal;
    margin: 5px 0;
    font-style:${props => props.error ?'':'italic'}
`

export const ProfileButton = styled.button`
    margin: 2rem 2rem 1rem ;
    border-radius: 2px;
    border:1px solid grey;
    background: white;
    color:${props => props.color};
    padding: 0.75rem 1.5rem;
    outline: none;
    font-weight: bold;
    cursor: pointer;
`

export const ChangePasswordContainer = styled.div`
    position: fixed;
	top: 10vh;
	right: 0;
	left: 0;
	max-width: 450px;
	margin: auto;
	border-radius: 3px;
	background: white;
	border: 1px solid red;
	padding: 2rem 1rem;

    & > div {
        line-height: 12px;
        p{
            font-size: 10px;
        }
    }
`

export const ChangePasswordButton = styled(ProfileButton)`
    width:45%;
    padding:1rem;
`