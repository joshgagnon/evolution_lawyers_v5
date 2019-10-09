import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import "animate.css/animate.min.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.props.title}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <script type="text/javascript">
               var script = document.createElement("script");
               script.async = true; script.type = "text/javascript";
               var target = 'https://www.clickcease.com/monitor/stat.js';
               script.src = target;
               var elem = document.head;
               elem.appendChild(script);
             </script>

            <noscript><a href="https://www.clickcease.com" rel="nofollow"><img src="https://monitor.clickcease.com/stats/stats.aspx"  alt="ClickCease"/></a></noscript>


          </Helmet>
          {children}
        </div>
      </Navigation>
    );
  }
}
