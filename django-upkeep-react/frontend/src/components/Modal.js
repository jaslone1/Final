import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
      }
      handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      render() {
        const { toggle, onSave } = this.props;
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="bike">Bike</Label>
                  <Input
                    type="text"
                    name="bike"
                    value={this.state.activeItem.bike}
                    onChange={this.handleChange}
                    placeholder="Enter Bike"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="parts">Parts</Label>
                  <Input
                    type="text"
                    name="parts"
                    value={this.state.activeItem.parts}
                    onChange={this.handleChange}
                    placeholder="Enter Parts"
                  />
                </FormGroup>
               <FormGroup>
                  <Label for="maintenance">Maintenance</Label>
                  <Input
                    type="text"
                    name="maintenance"
                    value={this.state.activeItem.maintenance}
                    onChange={this.handleChange}
                    placeholder="Enter Maintenance performed"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }
