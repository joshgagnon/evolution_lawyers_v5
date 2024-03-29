import React, {Component} from "react";
import {graphql, StaticQuery} from "gatsby";
import ReviewSummary from '../../../content/reviewSummary.json'
import StarRatings from "react-star-ratings";
import {Cell, Grid} from "react-md";
import './Reviews.scss';
import Img from "gatsby-image"
import ScrollAnimation from "react-animate-on-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const query = graphql`query reviews {
    allReviewsJson {
        edges {
          node {
              image
              title
              link
              text
              rating
              time
              relative_time_description
          }
        } 
    }
    file(relativePath: { eq: "images/google.png" }) {
  childImageSharp {
    fixed(height: 42 quality:100) {
      ...GatsbyImageSharpFixed
    }
  }
}
}`


function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const Summary = (props) => {
    return <div className={'google-review-summary'}>
        <div className={"google-review-image"}>
            <Img fixed={props.file.childImageSharp.fixed}/>
            <span className={'google-review-big-text'}>Rating</span>
        </div>
        <div className="google-review-rating">
            <span className={"google-review-rating-number"}>{ReviewSummary.rating}</span>
            <StarRatings
                rating={ReviewSummary.rating}
                starDimension="30px"
                starSpacing="4px"
                starRatedColor={"rgb(255, 180, 0)"}
            />

        </div>
        <span className="google-review-count">{ReviewSummary.count} Reviews</span>
    </div>
}

const Review = props => {
    return   <a className={'google-review'} href={props.link} target={"_blank"}>
        <span className={"google-review-top-row"}>
            <img src={props.image} />
            <span className={"google-review-details"}>
                <span className="google-review-title">{props.title}</span>
                <span className="google-review-rating"><StarRatings
                    rating={props.rating}
                    starDimension="30px"
                    starSpacing="4px"
                    starRatedColor={"rgb(255, 180, 0)"}
                /></span>
                <span className="google-review-count">{props.relative_time_description}</span>
            </span>
        </span>
        <span className="google-review-text">{props.text}</span>
    </a>
}

class Reviews extends Component {
    render() {

        return <StaticQuery
            query={query}
            render={data => <section className={"reviews"}>
                <Grid>

                    <Cell desktopSize={6} desktopOffset={3} tabletSize={10} phoneSize={12} phoneOffset={0} >
                        <Summary file={data.file}/>
                        <Carousel autoPlay interval={6000} showStatus={false} infiniteLoop>
                        { data.allReviewsJson.edges.map((p, index) => {
                            return <Review {...p.node} index={index}/>
                        }) }
                        </Carousel>
                    </Cell>
                </Grid>
            </section>
            }/>
    }
}

export default Reviews;