const school_reports = (grades) => {
    if(grades == 'Green') {
        return 'Green: 1'
    } else if(grades == 'Amber') {
        return 'Amber: 1'
    } else {
        return false 
    }
}

module.exports = school_reports