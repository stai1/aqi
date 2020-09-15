// Code blatantly copied from https://www.airnow.gov/sites/default/files/custom-js/aqi-conc.js
// It's the only source of the AQI function that I was able to find.

function InvLinear(AQIhigh, AQIlow, Conchigh, Conclow, a) {
  return ((a-AQIlow)/(AQIhigh-AQIlow))*(Conchigh-Conclow)+Conclow;
}

export function ConcPM25(a) {
  if (a>=0 && a<=50){
    return InvLinear(50,0,12,0,a);
  }
  else if (a>50 && a<=100) {
    return InvLinear(100,51,35.4,12.1,a);
  }
  else if (a>100 && a<=150) {
    return InvLinear(150,101,55.4,35.5,a);
  }
  else if (a>150 && a<=200) {
    return InvLinear(200,151,150.4,55.5,a);
  }
  else if (a>200 && a<=300) {
    return InvLinear(300,201,250.4,150.5,a);
  }
  else if (a>300 && a<=400) {
    return InvLinear(400,301,350.4,250.5,a);
  }
  else if (a>400 && a<=500) {
    return InvLinear(500,401,500.4,350.5,a);
  }
  else {
    return null;
  }
}