// Code EyesOnMe Component Here
import {React,Button} from 'react';

class EyesOnMe extends React.Component {
  render() {
    return(
      <Button onFocus={()=>'Good!'} onBlur={()=>'Hey! Eyes on me!'}></Button>
    )
  }
}
