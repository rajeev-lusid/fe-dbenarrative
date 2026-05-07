import { createTheme } from "@mui/material";

import styles from "../global.scss";

export const theme = createTheme({
    typography: {
        // fontFamily: "urbanist",
        fontFamily: "Plus Jakarta Sans",
        h1: {
            fontWeight: 900,
            fontSize: "148px",
            color: styles["secondary_dark"]
        },
        h2: {
            fontWeight: 800,
            fontSize: "108px",
            color: styles["secondary_dark"]
        },
        h3: {
            fontWeight: 700,
            fontSize: "72px",
            color: styles["secondary_dark"]
        },
        h4: {
            fontWeight: 600,
            fontSize: "48px",
            color: styles["secondary_dark"]
        },
        h5: {
            fontWeight: 600,
            fontSize: "30px",
            color: styles["secondary_dark"]
        },
        h6: {
            fontWeight: 600,
            fontSize: "22px",
            color: styles["secondary_dark"]
        },
        subtitle1: {
            fontWeight: 600,
            fontSize: "18px",
            color: styles["secondary_dark"]
        },
        subtitle2: {
            fontWeight: 600,
            fontSize: "16px",
            color: styles["secondary_dark"]
        },
        body1: {
            fontWeight: 500,
            fontSize: "15px", 
            color: styles["secondary_dark"]
        },
        body2: {
            fontWeight: 400,
            fontSize: "15px",
            color: styles["secondary_dark"]
        },
        button: {
            fontWeight: 700,
            fontSize: "15px",
            color: styles["secondary_dark"]
        },
        caption: {
            fontWeight: 500,
            fontSize: "14px",
            color: styles["secondary_dark"]
        }
    },
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1450 }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    minWidth: "120px",
                    minHeight: "48px",
                    textTransform: "none"
                },
                text: {
                    backgroundColor: styles["primary_light"],
                    color: styles["secondary_dark"],
                    "&:hover": {
                        backgroundColor: styles["primary"]
                    }
                },
                contained: {
                    backgroundColor: styles["secondary_light"],
                    color: styles["primary_light"],
                    "&:hover": {
                        backgroundColor: styles["secondary"]
                    }
                },
                outlined: {
                    borderColor: styles["secondary_dark"],
                    color: styles["secondary_dark"],
                    "&:hover": {
                        backgroundColor: styles["primary_light"]
                    }
                }
            }
        },
         MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    borderColor: "red",
                },
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "grey"
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: "12.5px",
                    color: "grey"
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    // pointerEvents: 'none',
                },
                paper: {
                    borderRadius: "12px",
                    // pointerEvents: "auto",
                },
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    fontSize: "18px"
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: styles["secondary"]
                    }
                },
            }
        }
    }
})