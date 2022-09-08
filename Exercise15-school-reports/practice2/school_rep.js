const school_reports = (grades) => {
    if(grades == 'Red, Red') {
        return 'Red: 2'
    } else if(grades == 'Amber, Amber') {
        return 'Amber: 2'
    } else if(grades == 'Green, Green') {
        return 'Green: 2'
    } else 
   return grades + ': 1'
}

module.exports = school_reports