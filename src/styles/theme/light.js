const light = {
  title: 'light',
  breakpoints: {
    xs: "376px",
    sm: "426px",
    md: "769px",
    lg: "1025px",
    xl: "1440px",
    xxl: "1921px",
  },
  box: {
    md: "780px",
    lg: "1440px",
  },
  boxShadow: {
    header: 'rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.06),0 0 2px rgba(0,0,0,.07)',
    rewardsBanner: '0 4px 4px 0 rgba(0,0,0,0.12), 0 0 2px 0 rgba(0,0,0,0.24)'
  },
  font: {
    family: 'SoDo Sans',
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  color: {
    neutral: {
      low: {
        pure: '#000000',
        dark: 'rgba(0,0,0,.87)',
      },
      high: {
        pure: '#ffffff'
      }
    },
    brand: {
      pure: "#00754a",
      dark: "#3d7170",
      darkest: "#1e3932",
      light: "#d4e9e2",
      blueLight: "#96b2e1",
      houseGreen: '#1e3932',
    },

  }
}

export default light;