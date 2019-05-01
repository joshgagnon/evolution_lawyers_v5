import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";
import Img from "gatsby-image/withIEPolyfill";
import { StaticQuery, graphql } from "gatsby"
import { Toolbar, MenuButton, ListItem, Grid, Cell  } from 'react-md';
import config from "../../../data/SiteConfig";


const ContactMenu = (props) => {
  return <div>
          <div className="contact-row"><a href={`tel:${config.phone.replace(' ', '')}`}><span className="fa fa-phone" /> { config.phone }</a></div>
          <div className="contact-row"><a href={`tel:${config.fax.replace(' ', '')}`}><span className="fa fa-fax" /> { config.fax }</a></div>
          <div className="address">
          { config.address.map((add, i) => {
            return <div className="address-row" key={i}>
              { add }
            </div>
          })}
          <div className="address-row"><em>(By appointment only)</em></div>
          </div>
          <div className="contact-row"><a href={`mailto:${config.email}`}><span className="fa fa-envelope" /> { config.email }</a></div>


</div>
}

const NavMenu = (props) => {
  return <div className="main-nav-menu">
    <Grid>
      <Cell className="nav-links" size={6} >
        <div><a href="/" onClick={props.onNavClick}>Home</a></div>
        <div><a href="/team" onClick={props.onNavClick}>The Team</a></div>
        <div><a href="/services" onClick={props.onNavClick}>Services</a></div>
        {/*<div><a href="/fees" onClick={props.onNavClick}>Fees</a></div> */}
        <div><a href="/guides" onClick={props.onNavClick}>Guides</a></div>
      </Cell>
      <Cell  className="contact-menu" size={6}>
        <ContactMenu />
      </Cell>

    </Grid>
</div>
}

class KebabMenu extends React.PureComponent {
  state = { visible: false };

  show = () => {
    this.setState({ visible: !this.state.visible });
  };

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };


  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { id, className, menuItems } = this.props;
    return <MenuButton
        id="nav-menu"
        className="nav-menu"
        icon
        menuItems={<NavMenu onNavClick={this.hide}/>}
        listInline
        position={MenuButton.Positions.TOP_LEFT}
        defaultVisible={false}
        onVisibilityChange={this.toggle}
        visible={this.state.visible}
        onClose={this.hide}
        onClick={this.show}
        transitionName="md-layover"
        anchor={{
          x: MenuButton.HorizontalAnchors.CENTER,
          y: MenuButton.VerticalAnchors.CENTER,
        }}
      >
        more_vert
      </MenuButton>
    }
};

const query = graphql`
  query {
    file(relativePath: { eq: "images/cropped-evologo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 40) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }`;


const Title = props =>  <StaticQuery
    query={query}
    render={data => <div>
          <KebabMenu />
            <Img
            className="logo"
              fixed={data.file.childImageSharp.fixed}
              objectFit="contain"
              objectPosition="50% 50%"
              style={{maxWidth: '70vw'}}
              alt="Evolution Lawyers"
            />
        </div> }
  />



export default class Navigation extends Component {
  render() {
    const { children, config, LocalTitle, data } = this.props;


    return ( <div>
            <Toolbar
            fixed
            title={<Title />}
            //  nav={<Nav />}
              actions={
            <div className="links">
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

                <a href={`mailto:${config.email}`} target="_blank" rel="noopener">
                    <i aria-hidden="true" className="fa fa-envelope" title="Email"></i>
                    <span className="sr-only">Email</span>
                </a>

            </div>
              }

            >


            </Toolbar>

           <div className="main-container">{ children }</div>

        <Footer userLinks={true} />
        </div>
    );
  }
}

/*  <NavigationDrawer
        drawerTitle={config.siteTitle}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarChildren={<ToolbarContentComponent data={data}/>}
        toolbarActions={<ToolbarActions config={config} />}
        >
        <div className="main-container">{ children }</div>

        <Footer userLinks={footerLinks} />

      </NavigationDrawer> */



