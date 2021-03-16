import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import {v4 as uuid} from "uuid"; 
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/graphActions';
import PropTypes from 'prop-types';

class Graph extends Component {
    
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        graph: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id)
    }
    render() {
        const { graphs } = this.props.graph;
        return(
            <Container>
                {/* <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name}]
                        }))
                    }
                }}>
                    Add Item
                </Button> */}
                
                <ListGroup>
                    <TransitionGroup className="array-list">
                        {graphs.map(({ _id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    { this.props.isAuthenticated ? 
                                        <Button 
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                            &times;
                                        </Button> : null}
                                
                                {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}



const mapStateToProps = state => ({
    graph: state.graph,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getItems, deleteItem })(Graph);