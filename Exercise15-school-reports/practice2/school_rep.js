const school_reports = (grades) => {
    splitting = grades.split(', ')
    green = 0 
    amber = 0
    red = 0
    for(element of splitting) {
        upper = element[0].toUpperCase() + element.toLowerCase().slice(1)
        console.log(upper)
      if(upper == 'Green') {
          green += 1
      }else if(upper === 'Red') {
          red += 1
      }else if(upper == 'Amber') {
          amber += 1
      } else {
        return "Incorrect input"
      }
    } return "Green: " + green + ', ' + "Amber: " + amber + ', ' + "Red: " + red
}



module.exports = school_reports 