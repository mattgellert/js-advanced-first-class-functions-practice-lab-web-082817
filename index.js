// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {console.log(driver.name)})
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let drivers_by_revenue = drivers.slice()
  return drivers_by_revenue.sort(function (a,b) { return (a.revenue - b.revenue)})
}

function driversByName(drivers) {
  let drivers_by_name = drivers.slice()
  return drivers_by_name.sort(function (a,b) {return a.name.localeCompare(b.name)})
}

function totalRevenue(drivers) {
  return drivers.reduce((function (agg, el, i, drivers) {return agg + el.revenue}), 0)
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers)/drivers.length)
}
