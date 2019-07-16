import React, {Component} from 'react';

const l = [
  1,2,3,4
]
class Clock extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {l.map((i)=>
          <h1>{i}</h1>
          )}

      </div>
    );
  }
}
export default Clock;


