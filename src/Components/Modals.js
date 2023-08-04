import { Component } from "react";

export default class Modals extends Component {
  constructor(props) {
    super();
  }
  render() {
    return this.props.arrayObj.map((data) => {
      return (
        <a>
          <div className="main-modal-container">
            <div className="modal-top-container">
              <div className="modal-image-container">{data.image}</div>
              <div className="modal-name-container">{data.name}</div>
            </div>

            <div className="modal-bottum-container">
              <div className="modal-info-container">{data.info}</div>
            </div>
          </div>
        </a>
      );
    });
  }
}
