// object destructuring

const band = {
    bandName: "led selfie",
    famousSong: "Blue Eyes",
    year: 2012,
    anotherSong: "Desi kalaakar"
};
 //const var1 = band.banName;
 //const var2 = band.famousSong;

//console.log(var1, var2);

//short form
 const { bandName, famousSong, ...restProps} = band;
 console.log(bandName, famousSong);
 console.log(restProps);
