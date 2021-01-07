class Form1 extends React.Component {
  constructor(props) {
    super(props)

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
    })
  }

  onSubmit(event) {
    event.preventDefault();
    let saveState = Object.fromEntries(Object.entries(this.state));
    // let state = this.returnNewBlankState();
    // this.setState({}, () => {
    //   console.log('fire', this.state);
    // });
    this.props.next(saveState);

  }

  render() {
    return (
     <form onSubmit={this.onSubmit}>
       <div>
        <label>
          Name:
          <input onChange={this.onChange} name='name' type='text' value={this.state.name}></input>
        </label>
       </div>
       <div>
        <label>
          Email:
          <input onChange={this.onChange} name='email' type='text' value={this.state.email}></input>
        </label>
       </div>
       <div>
        <label>
          Password:
          <input onChange={this.onChange} name='password' type='text' value={this.state.password}></input>
        </label>
       </div>
       <div>
        <input type='submit' value='Next'></input>
       </div>
     </form>
   );
    // return (
    //   <form onSubmit = {this.onSubmit}>
    //     {this.props.fieldNames.map((field, key, val) => <FormInput field={field} fieldValue={this.state.field} change={this.onChange} key={key} val={'test'}/>)}
    //     <div>
    //       <input type='submit' value='Next'></input>
    //     </div>
    //   </form>
    // )
  }
 }

let FormInput = (props) => (
  <div>
    <label>
      {props.field}
      <input onChange={props.change} name={props.field} type='text' value={props.fieldValue}></input>
    </label>
  </div>
 )

class Form2 extends React.Component {
  constructor(props) {
    super(props)
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
    })
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
    return (
     <form onSubmit={this.onSubmit}>
       <div>
        <label>
          Address Line 1:
          <input onChange={this.onChange} name='address1' type='text' value={this.state.name}></input>
        </label>
       </div>
       <div>
        <label>
          Address Line 2:
          <input onChange={this.onChange} name='address2' type='text' value={this.state.email}></input>
        </label>
       </div>
       <div>
        <label>
          City:
          <input onChange={this.onChange} name='city' type='text' value={this.state.password}></input>
        </label>
       </div>
       <div>
        <label>
          State:
          <input onChange={this.onChange} name='state' type='text' value={this.state.password}></input>
        </label>
       </div>
       <div>
        <label>
          Zip:
          <input onChange={this.onChange} name='zip' type='text' value={this.state.password}></input>
        </label>
       </div>
       <div>
        <label>
          Phone Number:
          <input onChange={this.onChange} name='phone' type='text' value={this.state.password}></input>
        </label>
       </div>
       <div>
        <input type='submit' value='Next'></input>
       </div>
     </form>
   );
  }
 }

 class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      billingZip: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    console.log('triggering');
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('submission');
    this.props.next(this.state);
    this.setState({
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      billingZip: '',
    });
  }
  render() {
    return (
     <form onSubmit={this.onSubmit}>
       <div>
        <label>
          Credit Card Number:
          <input onChange={this.onChange} name='cardNumber' type='text' value={this.state.name}></input>
        </label>
       </div>
       <div>
        <label>
          Expiration Date: (mm/yyyy)
          <input onChange={this.onChange} name='expirationDate' type='text' value={this.state.email}></input>
        </label>
       </div>
       <div>
        <label>
          CVV:
          <input onChange={this.onChange} name='cvv' type='text' value={this.state.password}></input>
        </label>
       </div>
       <div>
        <label>
          Billing Zip Code:
          <input onChange={this.onChange} name='billingZip' type='text' value={this.state.password}></input>
        </label>
       </div>
       <div>
        <input type='submit' value='Next'></input>
       </div>
     </form>
   );
  }
 }

let Summary = (props) => {
  let keys = Object.keys(props.data);
  return (
    <div>
      <ul>
        {keys.filter(field => field!='_id' && props.data[field]).map((field, key) => <Individual field={field} value={props.data[field]}/>)}
      </ul>
      <button onClick={props.checkout}>Purchase</button>
    </div>

  )
}

let Individual = (props) => (
  <li>
    <span>{props.field}</span>
    <span>{props.value}</span>
  </li>
)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      formCounter: 0,
      currentID: '',
      formInfo: {}
    }
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
    })
  }

  render() {
    let element;
    if (this.state.checkout && this.state.formCounter === 0) {
      element = <Form1 next={this.next.bind(this)} />;
    } else if (this.state.checkout && this.state.formCounter === 1) {
      element = <Form2 next={this.nextAddress.bind(this)} />;
    } else if (this.state.checkout && this.state.formCounter === 2) {
      element = <Form3 next={this.nextAddress.bind(this)} />
    } else if (this.state.checkout && this.state.formCounter === 3) {
      element = <Summary checkout={this.checkout.bind(this)}data={this.state.formInfo} />
    } else {
      element = <button onClick={this.checkout.bind(this)}>Checkout</button>;
    }
    return (
      <div>
        {element}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
