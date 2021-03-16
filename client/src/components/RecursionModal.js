import { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/recursionActions';
import PropTypes from 'prop-types';
// import {v4 as uuid} from "uuid"; 

class RecursionModal extends Component {
  state = {
      modal: false,
      name: ''
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  toggle = () => {
      this.setState({
          modal: !this.state.modal
      });
  };

  onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
  }

//   onSubmit = () => {
//       console.log("Submitted");
//   }
  onSubmit = e => {
      e.preventDefault();

      const newItem = {
        name: this.state.name
      }

      // Add item via addItem action
      this.props.addItem(newItem);

      // Close modal
      this.toggle();
  }

  render() {
      return(
        <div>
          { this.props.isAuthenticated ? 
            <Button
              className="mt-3"
              color='dark'
              style={{marginBottom: '2rem'}}
              onClick={this.toggle}
            >
                Add Item
            </Button> : <h4 className="mb-3 ml-4">Please log in to manage items</h4>}
            
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
                <ModalHeader toggle={this.toggle}>Add To Recursion Collection</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="array">Problem #:</Label>
                            <Input
                              type="text"
                              name="name"
                              id="array"
                              placeholder="Type in Problem Number"
                              onChange={this.onChange}/>
                            <Button
                              color="dark"
                              style={{marginTop: '2rem'}}
                              block>
                                Add Item
                            </Button>

                              
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
      );
  }
}

const mapStateToProps = state => ({
    recursion: state.recursion,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addItem })(RecursionModal);