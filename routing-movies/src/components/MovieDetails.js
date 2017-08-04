import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getId } from '../actions';

import { Card, CardHeader, CardBlock, CardTitle, CardText, Row, Col } from 'reactstrap'

class MovieDetails extends Component {

  componentDidMount() {
    this.props.getId(this.props.match.params.id);
  }

  render() {
    console.log(this.props)
    if (this.props.moviesId === null) return (
      <div>hello</div>
    )
    return (
      <div className='container'>
        <div>
          <h1>{this.props.selectedMovie.title}</h1>
          <h3>MetaScore: {this.props.selectedMovie.metascore}</h3>
        </div>
        {/* <Row>
          <Col md='4' xs='12'>
            <Card block inverse color='primary'>
              <CardHeader>Movie</CardHeader>
              <CardBlock>
                <CardTitle>{this.props.moviesId.title}</CardTitle>
                <CardText> {`Director: ${this.props.moviesId.director}`}</CardText>
                <CardText> {`Actors: ${this.props.moviesId.stars}`}</CardText>
                <CardText> {`metascore: ${this.props.moviesId.metascore}`}</CardText>
              </CardBlock>
            </Card>
          </Col>
        </Row> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moviesId: state.moviesId,
  }
}

export default connect(mapStateToProps, { getId })(MovieDetails);
// export default ShowMovies;
