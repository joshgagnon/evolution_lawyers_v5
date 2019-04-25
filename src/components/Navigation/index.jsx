import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";
import Img from "gatsby-image/withIEPolyfill";
import { StaticQuery, graphql } from "gatsby"
import { Toolbar } from 'react-md';


const query = graphql`
  query {
    file(relativePath: { eq: "images/cropped-evologo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`;


const Title = props =>  <StaticQuery
    query={query}
    render={data => <div>
            <Img
              fixed={data.file.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
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
            />
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



