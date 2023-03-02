export const getAngle = (vec1, vec2) => {
  let angle = Math.atan((vec2.y - vec1.y) / (vec2.x - vec1.x));

  return angle;
};

export const interpolate = (val1 , val2) => {
  let val = 0
  if(val != val1){
    val += 1
  }
  else{
    val -= 1
  }
  return val
}

export const ele = (e) => {
return document.getElementById(e)
}