// forEach()
const nameCallback = function (el) {
   console.log(el.name)
}

function logDriverNames(array) {
   array.forEach(nameCallback)
}


function logDriversByHometown(array, hometown) {
   array.forEach(function (el) {
      if (el.hometown === hometown) {
         nameCallback(el)
      }
   })
}

// sort()

function driversByRevenue(array) {
   const sortedDrivers = [ ...array]
   sortedDrivers.sort(function (a, b) {
      return a.revenue - b.revenue
   })

   return sortedDrivers
}

function driversByName(array) {
   const sortedDrivers = [ ...array]
   return sortedDrivers.sort( function (a,b) {
      return a.name.localeCompare(b.name)
   })
}

function totalRevenue(array) {
   const totalRevenue = array.reduce( function (sum, el) {
      return sum += el.revenue
   }, 0)
   return totalRevenue
}

function averageRevenue(array) {
   const total = totalRevenue(array)
   return total / array.length
}