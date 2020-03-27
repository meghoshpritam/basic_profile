import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from "@material-ui/core/Avatar";
import img from "../images/pic.jpeg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import SchoolIcon from "@material-ui/icons/School";
import ListItemText from "@material-ui/core/ListItemText";
import LanguageIcon from '@material-ui/icons/Language';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Carousel from "../components/Carousel";


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    root: {
        width: '100%',
    },
    heroContent: {
        padding: theme.spacing(2, 0, 6)
    },
}));

const tiers = [
    {
        title: 'Education',
        items: [
            {
                icon: SchoolIcon,
                name: "Student of Computer Science at Kanchrapara College",
                subheading: "2017 to present",
                href: "http://www.kpcoll.net/"
            },
            {
                icon: SchoolIcon,
                name: "Went to Majdia Rail Bazar High School",
                subheading: "2015 to 2017"
            },
            {
                icon: SchoolIcon,
                name: "Went to Shibnibash Sri Sri Mohanananda High School",
                subheading: "2009 to 2015"
            }
        ]
    },
    {
        title: 'Skills & Endorsements',
        items: [
            {
                icon: StarIcon,
                name: "React.js",
                href: "https://reactjs.org/"
            },
            {
                icon: StarIcon,
                name: "TypeScript",
                href: "https://www.typescriptlang.org/"
            },
            {
                icon: StarIcon,
                name: "Node.js",
                href: "https://nodejs.org/en/"
            },
            {
                icon: StarIcon,
                name: "JavaScript",
                href: "http://www.ecma-international.org/"
            },
            {
                icon: StarHalfIcon,
                name: "SQL",
                href: "https://en.wikipedia.org/wiki/SQL"
            },
            {
                icon: StarHalfIcon,
                name: "NoSQL",
                href: "https://en.wikipedia.org/wiki/NoSQL"
            }
        ]
    },
    {
        title: 'Languages',
        items: [
            {
                icon: LanguageIcon,
                name: "English",
                subheading: "Professional working proficiency"
            },
            {
                icon: LanguageIcon,
                name: "Bangali",
                subheading: "Native or bilingual proficiency"
            },
            {
                icon: LanguageIcon,
                name: "Hindi",
                subheading: "Limited working proficiency"
            }
        ]
    },
    {
        title: 'Get in touch',
        items: [
            {
                icon: TwitterIcon,
                name: "Twitter",
                href: "https://www.twitter.com/meghoshpritam/"
            },
            {
                icon: LinkedInIcon,
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/meghoshpritam/"
            },
            {
                icon: TelegramIcon,
                name: "Telegram",
                href: "https://t.me/meghoshpritam/"
            },
            {
                icon: GitHubIcon,
                name: "Github",
                href: "https://www.github.com/meghoshpritam/"
            }
        ]
    },
];


export default () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Carousel/>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <div className={classes.paper}>
                    <Avatar alt="Remy Sharp" src={img} className={classes.avatar}/>
                    <Typography component="h1" variant="h3">
                        <strong> Pritam Ghosh</strong>
                    </Typography>
                    <Typography component="h2" variant="h5">
                        Junior web developer
                    </Typography>
                    <Typography component="h3" variant="subtitle1">
                        <LocationOnIcon/> Nadia, West Bengal, India
                    </Typography>
                </div>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="l" component="main">
                <Grid container spacing={2} alignItems="flex-start">
                    {tiers.map(tier => (
                        <Grid item key={tier.title} xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    className={classes.cardHeader}
                                />
                                <CardContent style={{padding: 0}}>
                                    <List className={classes.root}>
                                        {tier.items.map((itm, idx) => (
                                            <ListItem key={idx}
                                                      button={itm.href !== undefined}
                                                      onClick={() => {
                                                          if (itm.href !== undefined)
                                                              window.open(itm.href, '_blank');
                                                      }}
                                            >
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <itm.icon/>
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={itm.name} secondary={itm.subheading}/>
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={4}>
                        <div
                            onClick={() => window.open('https://twitter.com/instagram/status/1242895227175780352/photo/1', '_blank')}>
                            <img src="https://pbs.twimg.com/media/ET-mnogU8AYfMtz?format=jpg&name=medium"
                                 alt="thank_you" style={{width: '100%'}}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};
