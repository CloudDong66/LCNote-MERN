import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import {v4 as uuid} from "uuid"; 
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/greedyActions';
import PropTypes from 'prop-types';

class Greedy extends Component {
    
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        greedy: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id)
    }
    render() {
        const { greedys } = this.props.greedy;
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
                        {greedys.map(({ _id, name}) => (
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
    greedy: state.greedy,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getItems, deleteItem })(Greedy);