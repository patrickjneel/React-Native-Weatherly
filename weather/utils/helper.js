import rain from './rain.jpg';
import sun from './sun.png';
import water from './water.jpg';


const showImage = (cond) => {
  const condition = {
    ['rain']: rain,
    ['sun']: sun,
    ['water']: water 
  }
  return condition[cond]
}

export default showImage;
