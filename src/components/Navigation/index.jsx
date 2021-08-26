import React, {Component} from "react";
import Footer from "../Footer";
import "./Navigation.scss";
import Img from "gatsby-image/withIEPolyfill";
import {graphql, Link, StaticQuery} from "gatsby"
import {Button, Cell, Grid, MenuButton, Toolbar} from 'react-md';
import config from "../../../data/SiteConfig";
import BackgroundImage from 'gatsby-background-image'


export const clickEmailTopMenu = () => {
    typeof window !== "undefined" && window.gtag("event", "click", {'event_category': 'email link - top menu'});
}

export const clickEmail = () => {
    typeof window !== "undefined" && window.gtag("event", "click", {'event_category': 'email link'});
}

export const clickPhone = () => {
    typeof window !== "undefined" && window.gtag("event", "click", {'event_category': 'phone link'});
}


const ContactMenu = (props) => {
    return <div>
        <div className="contact-row"><a href={`tel:${config.phone.replace(' ', '')}`}
                                        onClick={clickPhone}>{config.phone}</a></div>
        <div className="contact-row"><a href={`tel:${config.fax.replace(' ', '')}`}> {config.fax}</a></div>
        <br/>
        <div className="address">
            <div className="address-row"><em>Address</em></div>
            {config.address.map((add, i) => {
                return <div className="address-row" key={i}>
                    {add}
                </div>
            })}
            <div className="address-row"><em>(By appointment only)</em></div>
        </div>
        <div className="contact-row"><a href={`mailto:${config.email}`} onClick={clickEmail}>{config.email}</a></div>
    </div>
}

const NavMenu = (props) => {

    const imageData = props.wolf.childImageSharp.fluid
    return <div className="main-nav-menu md-dialog--full-page md-dialog">
        <BackgroundImage Tag="section"
                         className={'guidebg'}
                         style={{backgroundSize: 'cover'}}
                         fluid={imageData}
        >
            <Grid>
                <Cell className="nav-links" size={12} style={{textAlign: 'center'}}>
                    <div><Link to="/" onClick={props.onNavClick}>Home</Link></div>
                    <div><Link to="/contact" onClick={props.onNavClick}>Contact Us</Link></div>
                    <div><Link to="/team" onClick={props.onNavClick}>The Team</Link></div>
                    <div><Link to="/services" onClick={props.onNavClick}>Services</Link></div>
                    <div><Link to="/fees" onClick={props.onNavClick}>Fees</Link></div>
                    <div><Link to="/resources" onClick={props.onNavClick}>Resources</Link></div>
                    <div><Link to="/new-client" onClick={props.onNavClick}>New Client Signup</Link></div>
                </Cell>


            </Grid>
        </BackgroundImage>
    </div>
}

class KebabMenu extends React.PureComponent {
    state = {visible: false};

    show = () => {
        this.setState({visible: true});
    };

    toggle = () => {
        this.setState({visible: !this.state.visible});
    };


    hide = () => {
        this.setState({visible: false});
    };
    escFunction = () => {
        this.hide();
    }
    componentDidMount = () => {
        document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount = () => {
        document.removeEventListener("keydown", this.escFunction, false);
    }

    render() {
        const {id, className, menuItems, wolf} = this.props;
        return <MenuButton
            id="nav-menu"
            className="nav-menu"
            role="button"
            aria-label="menu"
            menuItems={<NavMenu onNavClick={this.hide} wolf={wolf}/>}
            listInline

            fillViewportHeight={true}
            fillViewportWidth={true}
            position={MenuButton.Positions.TOP_LEFT}
            defaultVisible={false}
            onVisibilityChange={this.toggle}
            visible={this.state.visible}
            onClose={this.hide}
            onClick={this.toggle}
            transitionName="md-layover"
            anchor={{
                x: MenuButton.HorizontalAnchors.CENTER,
                y: MenuButton.VerticalAnchors.CENTER,
            }}
            icon
        >
            {this.state.visible ? <i className="fa fa-times"/> : <i className="fa fa-bars"/>}
        </MenuButton>
    }
};

const query = graphql`
  query {
    logo: file(relativePath: { eq: "images/cropped-evologo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 40) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    wolf: file(relativePath: { eq: "images/hoverbg/wolf.png" }) {
        childImageSharp {
          fluid(quality: 70) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

  }`;


const Title = props => <StaticQuery
    query={query}
    render={data => <div>
        <KebabMenu wolf={data.wolf}/>


        <Img
            className="logo"
            fixed={data.logo.childImageSharp.fixed}
            objectFit="contain"
            objectPosition="50% 50%"
            style={{maxWidth: '70vw'}}
            alt="Evolution Lawyers"
        />
    </div>}
/>


const ExternalLinks = (props) => <div className="links">
    <a href={config.twitter} target="_blank" rel="noopener">
        <i aria-hidden="true" className="fa fa-twitter" title="Twitter"></i>
        <span className="sr-only">Twitter</span>
    </a>

    <a href={config.linkedin} target="_blank" rel="noopener">
        <i aria-hidden="true" className="fa fa-linkedin" title="LinkedIn"></i>
        <span className="sr-only">LinkedIn</span>
    </a>

    <a href={config.facebook} target="_blank" rel="noopener">
        <i aria-hidden="true" className="fa fa-facebook-square" title="Facebook"></i>
        <span className="sr-only">Facebook</span>
    </a>

    <a href={config.youtube} target="_blank" rel="noopener">
        <i aria-hidden="true" className="fa fa-youtube" title="YouTube"></i>
        <span className="sr-only">YouTube</span>
    </a>

    <a href={`tel:${config.phone}`} target="_blank" rel="noopener">
        <i aria-hidden="true" className="fa fa-phone" title="Phone"></i>
        <span className="sr-only">Phone</span>
    </a>

    <a href={`mailto:${config.email}`} onClick={clickEmailTopMenu} target="_blank" rel="noopener">
        <i aria-hidden="true" className="fa fa-envelope" title="Email"></i>
        <span className="sr-only">Email</span>
    </a>

</div>;

const NavbarLinks = () => {
    return <div className="links">
        <Button flat className="md-cell--right major-button" href="/contact">
            Contact Us
        </Button>
        <Button flat className="md-cell--right major-button" href="/new-client">
            Client Signup
        </Button>
    </div>
}

export default class Navigation extends Component {
    render() {
        const {children, config, LocalTitle, data} = this.props;


        return (<div>
                <Toolbar
                    fixed
                    title={<Title/>}
                    actions={
                        <NavbarLinks/>
                    }
                >
                </Toolbar>

                <div className="main-container">{children}</div>

                <Footer userLinks={true}/>
            </div>
        );
    }
}
