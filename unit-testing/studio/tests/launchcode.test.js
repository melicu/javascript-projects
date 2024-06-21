// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test ("should return 'nonprofit' for organization key", () => {
    expect(launchcode.organization).toBe("nonprofit");
  })

  test ("should return 'Jeff' for executifeDirector key", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  })
  
  test ("should return '100' for percentageCoolEmployees key", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })

  test ("should return three specific values for programsOffered key", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  })

  test ("launchOutput() should return 'Launch!' when number ONLY divisible by 2", () => {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  })

  test ("launchOutput() should return 'Code!' when number ONLY divisible by 3", () => {
    expect(launchcode.launchOutput(9)).toBe("Code!");
  })

  test ("launchOutput() should return 'Rocks!' when number ONLY divisible by 5", () => {
    expect(launchcode.launchOutput(25)).toBe("Rocks!");
  })

  test ("launchOutput() should return 'LaunchCode!' when number divisible by 2 AND 3", () => {
    expect(launchcode.launchOutput(12)).toBe("LaunchCode!");
  })

  test ("launchOutput() should return 'Code Rocks!' when number divisible by 3 AND 5", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  })

  test ("launchOutput() should return 'Launch Rocks!' when number divisible by 2 AND 5", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  })

  test ("launchOutput() should return 'LaunchCode Rocks!' when number divisible by 2, 3, AND 5", () => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  })

  test ("launchOutput() should return 'Rutabagas! That doesn't work.' when number is not divisible by 2, 3, or 5", () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  })
  
});