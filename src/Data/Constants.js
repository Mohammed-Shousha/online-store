export const passwordRegex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[A-Za-z\d@$!%*#?&]{8,}$/

const size = {
   tablet: '30em', //480
   laptopS: '48em', //768
   laptop: '64em', //1024
   laptopL: '75em', //1200
   desktop: '90em' //1440
}

export const device = {
   tablet: `(min-width: ${size.tablet})`,
   laptopS: `(min-width: ${size.laptopS})`,
   laptop: `(min-width: ${size.laptop})`,
   laptopL: `(min-width: ${size.laptopL})`,
   desktop: `(min-width: ${size.desktop})`
}