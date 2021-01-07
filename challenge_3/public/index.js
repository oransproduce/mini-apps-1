class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    console.log('triggering');
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let saveState = Object.fromEntries(Object.entries(this.state)); // let state = this.returnNewBlankState();
    // this.setState({}, () => {
    //   console.log('fire', this.state);
    // });

    this.props.next(saveState);
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "name",
      type: "text",
      value: this.state.name
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "email",
      type: "text",
      value: this.state.email
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "password",
      type: "text",
      value: this.state.password
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Next"
    }))); // return (
    //   <form onSubmit = {this.onSubmit}>
    //     {this.props.fieldNames.map((field, key, val) => <FormInput field={field} fieldValue={this.state.field} change={this.onChange} key={key} val={'test'}/>)}
    //     <div>
    //       <input type='submit' value='Next'></input>
    //     </div>
    //   </form>
    // )
  }

}

let FormInput = props => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, props.field, /*#__PURE__*/React.createElement("input", {
  onChange: props.change,
  name: props.field,
  type: "text",
  value: props.fieldValue
})));

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    console.log('triggering');
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('submission');
    this.props.next(this.state);
    this.setState({
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Address Line 1:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "address1",
      type: "text",
      value: this.state.name
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Address Line 2:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "address2",
      type: "text",
      value: this.state.email
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "City:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "city",
      type: "text",
      value: this.state.password
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "State:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "state",
      type: "text",
      value: this.state.password
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Zip:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "zip",
      type: "text",
      value: this.state.password
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Phone Number:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "phone",
      type: "text",
      value: this.state.password
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Next"
    })));
  }

}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      billingZip: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    console.log('triggering');
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('submission');
    this.props.next(this.state);
    this.setState({
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      billingZip: ''
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Credit Card Number:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "cardNumber",
      type: "text",
      value: this.state.name
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Expiration Date: (mm/yyyy)", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "expirationDate",
      type: "text",
      value: this.state.email
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "CVV:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "cvv",
      type: "text",
      value: this.state.password
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Billing Zip Code:", /*#__PURE__*/React.createElement("input", {
      onChange: this.onChange,
      name: "billingZip",
      type: "text",
      value: this.state.password
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Next"
    })));
  }

}

let Summary = props => {
  let keys = Object.keys(props.data);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, keys.filter(field => field != '_id' && props.data[field]).map((field, key) => /*#__PURE__*/React.createElement(Individual, {
    field: field,
    value: props.data[field]
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: props.checkout
  }, "Purchase"));
};

let Individual = props => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, props.field), /*#__PURE__*/React.createElement("span", null, props.value));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      formCounter: 0,
      currentID: '',
      formInfo: {}
    };
  }

  next(data) {
    this.setState(state => ({
      formCounter: state.formCounter + 1
    }));
    console.log(data);
    axios.post('http://localhost:3000/checkout', data).then(results => {
      this.setState({
        currentID: results.data._id
      });
    }).catch(err => {
      console.log(err);
    });
  }

  nextAddress(data) {
    this.setState(state => ({
      formCounter: state.formCounter + 1
    }));
    console.log(data);
    axios.put(`http://localhost:3000/checkout/${this.state.currentID}`, data).then(results => {
      if (this.state.formCounter === 3) {
        this.getData();
      }
    }).catch(err => {
      console.log(err);
    });
  }

  getData() {
    axios.get(`http://localhost:3000/checkout/${this.state.currentID}`).then(response => {
      this.setState({
        formInfo: response.data
      });
    }).catch(err => {
      console.log(err);
    });
  }

  checkout() {
    this.setState({
      checkout: !this.state.checkout
    });
  }

  render() {
    let element;

    if (this.state.checkout && this.state.formCounter === 0) {
      element = /*#__PURE__*/React.createElement(Form1, {
        next: this.next.bind(this)
      });
    } else if (this.state.checkout && this.state.formCounter === 1) {
      element = /*#__PURE__*/React.createElement(Form2, {
        next: this.nextAddress.bind(this)
      });
    } else if (this.state.checkout && this.state.formCounter === 2) {
      element = /*#__PURE__*/React.createElement(Form3, {
        next: this.nextAddress.bind(this)
      });
    } else if (this.state.checkout && this.state.formCounter === 3) {
      element = /*#__PURE__*/React.createElement(Summary, {
        checkout: this.checkout.bind(this),
        data: this.state.formInfo
      });
    } else {
      element = /*#__PURE__*/React.createElement("button", {
        onClick: this.checkout.bind(this)
      }, "Checkout");
    }

    return /*#__PURE__*/React.createElement("div", null, element);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));