function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  // return arr;

  const calculateOrbitalPeriod = (avgAltitude) => {
    const semiMajorAxis = earthRadius + avgAltitude;
    const orbitalPeriod =
      2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM);

    return Math.round(orbitalPeriod);
  };

  const result = arr.map((obj) => {
    const orbitalPeriodInSeconds = calculateOrbitalPeriod(obj.avgAlt);
    return { name: obj.name, orbitalPeriod: orbitalPeriodInSeconds };
  });
  // console.log(result);

  return result;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
//orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
