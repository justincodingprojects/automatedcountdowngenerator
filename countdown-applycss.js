 var link = document.createElement('style');
        link.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  background-color: black;
}
#demo {
  text-align: center;
  font-size: 375%;
  margin-top: 0px;
  font-family: 'Roboto', sans-serif;
  color: white;
  z-index: 10;
  position: fixed;
    top: 58%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -58%);
}
  
button {
  text-align: center;
  font-size: 375%;
  margin-top: 0px;
  font-family: 'Roboto', sans-serif;
  color: white;
  z-index: 10;
  position: absolute;
    top: 58%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -58%);
}
#title {
  text-align: center;
  font-size: 375%;
  margin-top: 0px;
  font-family: 'Roboto', sans-serif;
  color: white;
  position: fixed;
    top: 45%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -45%);
}
#fadetolinear {
  text-align: center;
  display: none;
  font-size: 200%;
  margin-top: 0px;
  font-family: 'Roboto', sans-serif;
  color: white;
  position: absolute;
    top: 73%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -73%);
}
#fadetolinear2 {
  text-align: center;
  display: none;
  font-size: 200%;
  margin-top: 0px;
  font-family: 'Roboto', sans-serif;
  color: white;
  position: absolute;
    top: 80%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -80%);
}
.topnav {
  background-color: #34b518;
  position: fixed;
  top: 1.3%;
  left: 0.5%;
  right: 0.5%;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}
.footer {
  background-color: #444444;
  position: fixed;
  top: 93.3%;
  left: 33%;
  right: 33%;
  overflow: hidden;
  text-align: center;
}

.footer a {
  display: block;
  float: left;
  color: #f2f2f2;
  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  text-decoration: none;
  font-size: 18px;
  opacity: 0.5;
  font-family: 'Roboto', sans-serif;
}`
        document.head.appendChild(link)
