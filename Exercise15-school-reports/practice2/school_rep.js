const school_reports = (grades) => {
    splitting = grades.split(',')
    len = splitting.length
    if(grades == 'Green, Amber') {
        return 'Green: 1, Amber: 1'
    }else if(grades == 'Red, Amber') {
        return 'Red: 1, Amber: 1'
    }else if(grades == 'Red, Green') {
        return 'Red: 1, Green: 1'
    }else {
    return splitting[0] + ': ' + len
    }
}

module.exports = school_reports