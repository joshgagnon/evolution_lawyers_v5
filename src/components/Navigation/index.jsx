import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";
import Img from "gatsby-image/withIEPolyfill";
import { StaticQuery, graphql } from "gatsby"
import { Toolbar, MenuButton } from 'react-md';
import config from "../../../data/SiteConfig";

const KebabMenu = ({ id, className, menuItems }) => (
  <MenuButton
    id={id}

    className={className}
    menuItems={menuItems}
  >
more_vert
  </MenuButton>
);

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
            <Img
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



