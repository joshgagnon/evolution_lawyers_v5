import React, {Component} from "react";
import {graphql, StaticQuery} from 'gatsby'
import {Grid, Cell, Card, Media} from "react-md";
import "./Team.scss";
import Img from "gatsby-image/withIEPolyfill";

const MEMBERS = [
    {
        name: 'Thomas Bloy',
        qualifications: 'LLB',
        title: 'Managing Director',
        phone: '+64 9 441 3426',
        mobile: '+64 27 453 8552',
        email: 'thomas@evolutionlawyers.nz',
        linkedIn: 'https://nz.linkedin.com/in/thomasbloy',
        photo: 'Thomas-2'
    }, {
        name: 'Tamina Cunningham-Adams',
        qualifications: 'LLB (Hons), BA, B Ed (Tchg)',
        title: 'Director',
        phone: '+64 9 441 3151',
        mobile: '+64 21 151 5137',
        email: 'tamina@evolutionlawyers.nz',
        linkedIn: 'https://nz.linkedin.com/pub/tamina-cunningham-adams/30/195/a64',
        photo: 'Tamina-2'
    }, {
        name: 'Sophie Bloy',
        title: 'Practice Manager',
        phone: '+64 9 441 3425',
        mobile: '+64 21 024 39766',
        email: 'sophie@evolutionlawyers.nz',
        linkedIn: 'https://nz.linkedin.com/in/sophie-gagnon-405b1299',
        photo: 'Sophie'
    }, {
        name: 'Zabariah Naz',
        title: 'Associate',
        email: 'zabariah@evolutionlawyers.nz',
        photo: 'male-placeholder-image',
        phone: '+64 9 441 3596'
    },


    {
        name: 'George Acton-Adams',
        title: 'Solicitor',
        phone: '+64 9 623 0644',
        email: 'george@evolutionlawyers.nz',
        photo: 'George'
    },
    {
        name: 'Bryden Lloyd',
        title: 'Solicitor',
        phone: '09 623 0927',
        email: 'bryden@evolutionlawyers.nz',
        photo: 'male-placeholder-image'
    },
    {
        name: 'Samuel Chand',
        title: 'Solicitor',
        phone: '09 280 4300',
        email: 'samuel@evolutionlawyers.nz   ',
        photo: 'male-placeholder-image'
    },

    {
        name: 'Georgia Jackson',
        title: 'Legal Secretary',
        phone: '+64 9 553 5355',
        mobile: '+64 272 465 838',
        email: 'georgia@evolutionlawyers.nz',
        photo: 'Georgia_pp'
    }
]

const Member = (props) => {
    const {member: {name, qualifications, title, email, phone, mobile, linkedIn, photo}, image} = props;
    return <div className="member">


        <Img fluid={image} alt={name}/>
        <div className="text-block">
            <div className="name">{name}</div>
            {qualifications && <div className="qualifications">{qualifications}</div>}
            {title && <div className="title">{title}</div>}
            { phone && <div className="phone">
                 <a href={`tel:${phone.replace(' ', '')}`}><i className="fa fa-phone"/> {phone}</a>
            </div> }
            {email && <div className="email">
                <a href={`mailto:${email}`}><i className="fa fa-envelope"/> {email}</a>
            </div>}
            {false && linkedIn && <div className="social">
                <a href={linkedIn} target="_blank" rel="noopener">
                    <i aria-hidden="true" className="fa fa-linkedin-square" title="LinkedIn"></i>
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>}
        </div>

    </div>
}


const Members = (props) => {
    return <StaticQuery
        query={graphql`
      query allImgQuery {
        source:  allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
          edges {
            node {
                 name
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}

        render={(data) => {
            return <Grid className="members">
                {MEMBERS.map((member, i) => {
                    const image = data.source.edges.find(e => e.node.name === member.photo).node.childImageSharp.fluid;
                    return <Cell size={4} key={i}>
                        <Member member={member} key={i} image={image}/>
                    </Cell>
                })}
            </Grid>
        }}
    />
}


const TeamSummary = (props) => {
    return <Grid>
        <Cell size={3} desktopOffset={3} tabletOffset={1} phoneOffset={0} phoneSize={6} tabletSize={8}>

            <div className="title-section">
                <h1 className="line"><em>Meet</em></h1>
                <h1 className="line">the team</h1>

            </div>
        </Cell>d
        <Cell size={5} phoneSize={6} tabletSize={8}>

            <p className="big-para">
                Thomas and Tamina founded Evolution Lawyers because they believed clients of traditional law firms were
                not getting value for money. They realised that using the latest technology, and proactively adapting to
                the needs of modern clients, could dramatically improve the delivery and quality of legal services while
                reducing the cost. Virtual, mobile, efficient, and up-to-speed with the latest technological
                innovations. Focusing on quality people, and quality systems, to deliver the best outcome for our
                clients. That is Evolution Lawyers. We’ve got your back.</p>


        </Cell>
    </Grid>
}

class Team extends Component {
    render() {
        return (
            <div className={"team"}>
                <TeamSummary/>
                <Members/>


            </div>

        );
    }
}

export default Team;
